/* This API is responsible for Signing in User by using passport local */
const express = require("express"),
  router = express.Router(),
  passport = require("passport");

router.post(
  "/signin",
  passport.authenticate("local", {
    failureMessage: "User is not login in successfully"
  }),
  (req, res) => {
    res.redirect("/loggedIn");
  }
);

module.exports = router;
