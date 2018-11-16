/* This Module is Responsible for creating user account */

const express = require("express"),
  router = express.Router();
const User = require("../models/user");

router.post("/signup", (req, res) => {
  var user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, user) => {
    if (err) {
      console.error("Error: ", err);
    } else {
      res.json({
        status: "User account created successfully"
      });
    }
  });
});

module.exports = router;
