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
findByName: function (req, res) {
  db.User
    .find({
      'username': req.params.name
    })
    .then(dbModel => {
      dbModel[0]['password'] = undefined;
      return dbModel;
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
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

logIn:
// function (req, res, next) {

  passport.authenticate('local', {}),
    function (req, res) {
      res.redirect('/');
    }

  // passport.authenticate("local", {},function (err, user, info) {
  // console.log(info);
  // if (err) {
  //   return next(err);
  // }
  // if (!user) {
  //   return res.send({
  //     response: 'failure',
  //     message: "Username and password combination is not correct"
  //   })
  // }
  // req.logIn(user, function (err) {
  //   if (err) {
  //     return next(err);
  //   }
  //   //remove password from data
  //   user['password'] = undefined;
  //   //save to session
  //   req.session.loggedIn = true;
  // return res.send({
  // response: 'success',
  // message: 'You are logged in!',
  // user: user
// })
// 
// })
// })
// }


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