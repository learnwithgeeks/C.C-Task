/* Single Todo Js Module is responsible for storing todo list for single user */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

//Importing User Defined Module
const SingleTodo = require("../models/singleTodo");

/* This route is responsible for storing todo title and todo list array in database  */
router.post("/singleTodo", (req, res) => {
  var singleTodo = new SingleTodo();
  singleTodo.email = req.body.email;
  singleTodo.todoTitle = req.body.title;
  singleTodo.todoList = req.body.list;
  singleTodo.save((err, user) => {
    if (err) {
      return res.status(400).send({
        status: "Single Todo is not saved"
      });
    } else {
      return res.status(200).send({
        status: "Single Todo is saved"
      });
    }
  });
});

router.get("/showSingleTodo", (req, res) => {
  SingleTodo.find({}, (err, user) => {
    if (err) console.log("Error");
    else {
      return res.status(200).send({
        data: user
      });
    }
  });
});

module.exports = router;
