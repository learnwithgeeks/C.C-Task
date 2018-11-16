/* Signout Module is responsible for deleting user session and logout user */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

/* This route will detroy user session and remove cookie of user */
router.post("/signout", (req, res) => {
  res.clearCookie("connect.sid"); //Clear The cookie
  req.logout(); //Delete session of user
  return res.status(200).send({
    status: "User Logout"
  });
});

module.exports = router;
