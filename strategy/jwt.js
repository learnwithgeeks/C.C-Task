/* Local JS Module is responsible for applying local passport strategy for authentication */

//Importing 3rd Party Modules
const passport = require("passport"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  jwt = require("jsonwebtoken");

//Importing User Defined Module
const User = require("../models/user");

//Using Passport Strategy JWT for Authentication of User
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

//Exporting passport module
module.exports = passport;
