const mongoose = require("mongoose");
const db = require("../models");
const faker = require('faker')
mongoose.Promise = global.Promise;

// This file empties the Stories collection and inserts the stories below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/users",
  
);



function generateUsers(numberOfUsers, numberofStories) {
  let users = []
  for (let i = 1; i<= numberOfUsers; i++) {
    let user = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
      stories: []
    }

    for (let j = 1; j<= numberofStories; j++) {
      let story = {
        storyText: faker.lorem.paragraph(),
        storyImgUrl: faker.internet.url(),
        storyImgName: faker.random.word(),
        storyComments: [],
        storyShare: faker.random.boolean(),
        storyLikes: faker.random.number(2,1000)
      }
        for (let h = 1; h<= numberofStories; h++) {
          let comment = {
            comment: faker.lorem.sentence()
          }
          story.storyComments.push(comment)
        }
      user.stories.push(story)
    }
    users.push(user)

  }

  return users
}


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(generateUsers(10, 3)))
  .then(data => {
    // console.log(JSON.stringify(data, null, 2) )
    console.log(data.ops.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })


module.exports = "";