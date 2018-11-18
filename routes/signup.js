/* Signup JS Module is Responsible for creating user account */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

//Importing User Defined Module
const User = require("../models/user");

/* This route is responsible for creating user account by storing email and password to database */
router.post("/signup", (req, res) => {
  var user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.token = "";
  user.save((err, user) => {
    if (err) {
      return res.status(400).send({
        status: "User Account is not created"
      });
    } else {
      return res.status(200).send({
        status: "User Account is created"
      });
    }
  });
});

module.exports = router;
