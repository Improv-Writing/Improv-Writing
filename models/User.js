const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


// Using the Schema constructor, create a new object
const UserSchema = new Schema({
    stories: 
    [{
        storyId: {type: Number, required :true},
        storyText: { type: String, required: true },
        storyImgUrl: { type: String, required: true },
        storyImgName: { type: String, required: true },       
        storyShare: {type: Boolean, required: true},
        storyLikes: {type: Number, required: true }
     }],
  username: { type: String, required: false, unique: true },
  password: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

// generate Hash
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// checking password is valid
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}



const User = mongoose.model("User", UserSchema);

module.exports = User;
