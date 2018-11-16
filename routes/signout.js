/* This API is responsible for deleting user session and logout user */

const express = require("express"),
  router = express.Router();

router.post("/signout", (req, res) => {
  res.clearCookie("connect.sid"); //Clear The cookie
  req.logout(); //Delete session of user
  res.json({
    status: "User logout successfully"
  });
});

module.exports = router;
