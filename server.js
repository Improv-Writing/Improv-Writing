const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const test = require("./test.js");
const passport = require("passport");
const session = require("express-session");
const passportConfig = require("./passportConfig.js");


// const seedDB = require("./scripts/seedDB");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret:'myfinalproject1',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
