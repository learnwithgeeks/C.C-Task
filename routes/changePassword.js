/* Change Password JS Module will change user password  */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcrypt-nodejs");

//Importing User Defined Module
const User = require("../models/user");

/* This route will compare user old password with new password then store new password in database */
router.post("/changePassword", function(req, res, next) {
  let email = req.body.email;
  let oldpassword = req.body.oldpassword;
  let newpassword = req.body.newpassword;

  User.findOne({ email: email }, function(err, result) {
    let password = result.password;
    bcrypt.compare(oldpassword, password, function(err, result) {
      if (result) {
        bcrypt.genSalt(10, function(err, salt) {
          if (err) {
            return next(err);
          }
          bcrypt.hash(newpassword, salt, null, function(err, hash) {
            if (err) {
              return next(err);
            }
            newpassword = hash;
            User.findOneAndUpdate(
              { email: email },
              { $set: { password: newpassword } },
              (err, user) => {
                if (err) {
                  return res.status(400).send({
                    status: "User Account password is not changed"
                  });
                } else {
                  User.findOne({ email: email }, function(err, user) {
                    if (user) {
                      return res.status(200).send({
                        status: "User Account password is changed"
                      });
                    }
                  });
                }
              }
            );
          });
        });
      } else {
        return res.status(400).send({
          status: "User Account password is not changed"
        });
      }
    });
  });
});

module.exports = router;
