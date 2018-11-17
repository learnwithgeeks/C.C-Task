/* Signin JS Module is responsible for authentication of by using passport local */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();
const passport = require("../strategy/local");

/* This route is used for authentication by using passport local strategy */
router.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/"
  })
);

module.exports = router;
