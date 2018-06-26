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
            comment: { type: String, required: true },
          }],
        storyShare: {type: Boolean, required: true},
        storyLikes: {type: Number, required: true }
     }],
  username: { type: String, required: false, unique: true },
  password: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
