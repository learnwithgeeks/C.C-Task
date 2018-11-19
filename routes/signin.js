/* Signin JS Module is responsible for authentication of by using passport jwt*/

//Importing 3rd Party Modules
const express = require("express"),
  bcrypt = require("bcrypt-nodejs"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  jwt = require("jsonwebtoken"),
  router = express.Router();

//Importing User Defined Modules
const passport = require("../strategy/jwt"),
  User = require("../models/user");

/* This route is used for authentication by using passport jwt strategy */
router.post("/signin", (req, res) => {
  // Find user by username
  User.findOne({ email: req.body.email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(400).send({
        status: "user not found"
      });
    } else {
      //Compare encrytped user password
      bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
        if (isMatch) {
          // User Matched
          const payload = { id: user._id }; // Create JWT Payload

          // Sign Token
          jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
            return res.status(200).send({
              status: "user found",
              token: "Bearer " + token,
              email: user.email
            });
          });
        } else {
          return res.status(400).send({
            status: "user password not matched"
          });
        }
      });
    }
  });
});

//Exporting router module
module.exports = router;
