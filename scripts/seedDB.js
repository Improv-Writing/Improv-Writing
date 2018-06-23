const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Stories collection and inserts the stories below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/stories",
  
);

const storySeed = [
  {
    storyText: "TCats",
    storyImgUrl: "https://giphy.com/",
    storyImgName: "CAT",
    storyComments: [
      "ghkjhgkjhgkjhgkjhg",
      "hjlkjhlkjhlkjh;lkjh"
    ],
    storyLikes: 1,
      
    date: new Date(Date.now())
  },
  {
    storyText: "The Dead Zone",
    storyImgUrl: "https://giphy.com/",
    storyImgName: "CAT",
    storyComments: [
      "ghkjhgkjhgkjhgkjhg",
      "hjlkjhlkjhlkjh;lkjh"
    ],
    storyLikes: 2,
      
    date: new Date(Date.now())
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(storySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
