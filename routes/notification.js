/* Notification JS Module will get firebase cloud token and email of a user and store it in database */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

//Importing Models
const User = require("../models/user");

/* This route will store firebase token to user model */
router.post("/notification", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { token: req.body.token } },
    (err, user) => {
      if (err) {
        return res.status(400).send({
          status: "User Token is not stored"
        });
      } else {
        return res.status(200).send({
          status: "User Token stored"
        });
      }
    }
  );
});

//Importing router module
module.exports = router;
