const db = require("../models");
const passport = require("passport");

// Defining methods for the UserController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  publicStories: function (req, res) {
    //collection of all public stories
    var publicStories = []
    db.User
      .find({})
      .then(dbModel => {
        // dbModel = dbModel[0];
        //   // console.log('another ' + dbModel[0].length);
        //go through each user
        for (var user in dbModel) {
          //each user's public stories
          var userStories = []
          for (i = 0; i < dbModel[user]['stories'].length; i++) {
            if (dbModel[user]['stories'][i]['storyShare'] == true) {
              userStories.push(dbModel[user]['stories'][i])
            }
          }
          var userWithStories = {
            _id: dbModel[user]['_id'],
            username: dbModel[user]['username'],
            stories: userStories
          }
          publicStories.push(userWithStories);
        }
        res.json(publicStories);
        //   return publicStories;
      })
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  saveStory: function (req, res) {
    if (req.user) {

      var newStoryId =  Math.floor(Math.random() * Math.floor(999999999));
      var newStory = {
        storyId: newStoryId,
        storyText: req.body.storyText,
        storyImgUrl: req.body.storyImgUrl,
        storyImgName: req.body.storyImgName,       
        storyShare: req.body.storyShare,
        storyLikes: req.body.storyLikes
        }
        db.User.update(
          {username:req.user["username"]},
          { $push: {stories: newStory}}
        )
        .then(
          res.json({
            success: true,
            'message': 'Story Submitted!'
          })
        )
      //   })
      //   .then(dbModel => {
      //       dbModel[0]['stories'].push({
      //         another: 'element'
      //       });
      //       console.log(dbModel[0])
            // dbModel[0]['stories']
          // }

        // )
        // .then(dbModel => res.json({}))
        // db.User.post({
        //     username: req.user["username"],

        //     storyText: req.storyText,
        //     storyImgURL: req.storyImgURL

        //   })
        //   .then(dbModel => {
        //     dbModel[0]["password"] = undefined;
        //     return dbModel
        //     res.save({
        //       success: true,
        //       'message': 'Story Submitted!'
        //     })
        //   })
        //   .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    } else {
      res.status(422).json({
        error: 'Login required'
      })
    }
  },



  myStories: function (req, res) {
    if (req.user) {
      db.User.find({
          username: req.user["username"]
        })
        .then(dbModel => {
          dbModel[0]["password"] = undefined;
          return dbModel
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      res.status(422).json({
        error: 'Login required'
      })
    }
  },

  signUp: function (req, res) {
    const newUser = new db.User();
    newUser.password = newUser.generateHash(req.body["password"]);
    newUser.username = req.body["username"].toLowerCase();
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Internal error"
        })
      }
      return res.send({
        success: true,
        message: "Signed up"
      })
    })
  },

  logOut: function (req, res) {
    req.logout();
    res.json({
      success: true,
      message: "You logged out!"
    })
  },

  logIn: function (req, res, next) {

    // passport.authenticate('local', {}),
    //   function (req, res) {
    //     res.redirect('/');
    //   }

    passport.authenticate("local", {}, function (err, user, info) {
      console.log(info);
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send({
          response: 'failure',
          message: info
        })
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        //remove password from data
        user['password'] = undefined;
        //save to session
        req.session.loggedIn = true;
        return res.send({
          response: 'success',
          message: 'You are logged in!',
          user: user
        })

      })
    })(req, res, next);
  },

  shareStory: function (req, res) {
    if (req.user) {
      db.User.find({
        username: req.user["username"]
      })
      .then(dbModel =>{
        for(i=0; i <dbModel[0]['stories'].length; i++){
          if(dbModel[0]['stories'][i]['storyId'] == req.body.id){
            dbModel[0]['stories'][i]['storyShare'] = true;
          }
        }
        db.User.update(
          {username:req.user['username']},
           dbModel[0])
        .then(
          res.json({
            success: true,
            'message': 'Story Now Shared!'
          })
        )
        .catch(err => res.status(422).json(err));

      })
      .catch(err => res.status(422).json(err));
    } else {
      res.status(422).json({
        error: 'Login required'
      })
    }




    // //collection of all public stories
    // var publicStories = []
    // db.User
    //   .find({})
    //   .then(dbModel => {
    //     // dbModel = dbModel[0];
    //     //   // console.log('another ' + dbModel[0].length);
    //     //go through each user
    //     for (var user in dbModel) {
    //       //each user's public stories
    //       var userStories = []
    //       for (i = 0; i < dbModel[user]['stories'].length; i++) {
    //         if (dbModel[user]['stories'][i]['storyShare'] == true) {
    //           userStories.push(dbModel[user]['stories'][i])
    //         }
    //       }
    //       var userWithStories = {
    //         _id: dbModel[user]['_id'],
    //         username: dbModel[user]['username'],
    //         stories: userStories
    //       }
    //       publicStories.push(userWithStories);
    //     }
    //     res.json(publicStories);
    //     //   return publicStories;
    //   })
    //   // .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }



  // db.User
  // .

  // create: function(req, res) {
  //   db.User
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.User
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
}