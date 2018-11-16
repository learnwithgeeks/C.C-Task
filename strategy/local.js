/* Local JS Module is responsible for applying local passport strategy for authentication */

//Importing 3rd Party Modules
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//Importing User Defined Modules
const User = require("../models/user");

//Using Passport Strategy Local for Authentication of User
passport.use(
  new LocalStrategy(function(email, password, done) {
    //Compare email if same return user else return false
    User.findOne({ email: email }, function(err, user) {
      if (err) return done(err);
      if (!user) {
        return done(null, false);
      }
      if (!user.comparePassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

//Passport Serialization
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

//Passport Deserialize
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if (err) return done(err);
    if (user) {
      done(null, user);
    }
  });
});

module.exports = passport;
