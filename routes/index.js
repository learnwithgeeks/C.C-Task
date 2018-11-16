/* Index JS Module will check already authenticated user if user is authenticated and return that user else return route /loginUser */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

/* This route will check user session */
router.get("/", (req, res) => {
  if (req.user) {
    return res.status(200).send({
      status: "User Session Found"
    });
  } else {
    return res.status(400).send({
      status: "User Session Not Found"
    });
  }
});

module.exports = router;
