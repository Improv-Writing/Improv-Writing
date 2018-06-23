const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/stories",
  {
    useMongoClient: true
  }
);
[{
  storyText: { type: String, required: true },
  storyImgUrl: { type: String, required: true },
  storyImgName: { type: String, required: true },
  storyComments: 
    [{
      comments: { type: String, required: true },
    }],
  storyLikes: {type: Number}

const storySeed = [
  {
    storyText: "The Dead Zone",
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
