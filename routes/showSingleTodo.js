/* Show Single Todo Js Module is responsible for showig todo list of single user by using his/her email */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

//Importing User Defined Module
const SingleTodo = require("../models/singleTodo");

//Store User todo list
let singleUserTodo;

/* Get All Todo of user by using email */
router.post("/showSingleTodo", (req, res) => {
  SingleTodo.find({ email: req.body.email }, (err, user) => {
    if (err) console.log("Error");
    else {
      singleUserTodo = user;
      res.redirect("/showSingleTodo");
    }
  });
});

router.get("/showSingleTodo", (req, res) => {
  if (singleUserTodo) {
    return res.status(200).send({
      user: singleUserTodo
    });
  }
});

module.exports = router;
