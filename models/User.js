const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new object
const UserSchema = new Schema({
    stories: 
    [{
        storyText: { type: String, required: true },
        storyImgUrl: { type: String, required: true },
        storyImgName: { type: String, required: true },
        storyComments: 
          [{
            comments: { type: String, required: true },
          }],
        storyLikes: {type: Number}
     }],
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;