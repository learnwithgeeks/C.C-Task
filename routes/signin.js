/* Signin JS Module is responsible for authentication of by using passport local */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router(),
  passport = require("passport");

/* This route is used for authentication by using passport local strategy */
router.post(
  "/signin",
  passport.authenticate("local", {
    failureMessage: "User is not login in successfully"
  }),
  (req, res) => {
    return res.status(200).send({
      status: "User Logged In"
    });
  }
);

module.exports = router;
