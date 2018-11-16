/* This API will check already authenticated user if user is authenticated and return that user else return route /loginUser */

const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  if (req.user) {
    app.render(req, res, "/loggedIn", req.query);
  } else {
    res.json({
      status: "User session not found"
    });
  }
});

module.exports = router;
