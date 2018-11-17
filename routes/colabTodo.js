/* Colab Todo Js Module is responsible for storing todo list for multiple users */

//Importing 3rd Party Modules
const express = require("express"),
  router = express.Router();

//Importing User Defined Module
const ColabTodo = require("../models/colabTodo");

/* This route is responsible for storing todo collabrators , todo title and todo list in database  */
router.post("/colabTodo", (req, res) => {
  var colabTodo = new ColabTodo();
  for (let i = 0; i < req.body.email.length; i++) {
    colabTodo.email[i] = req.body.email[i];
  }
  colabTodo.todoTitle = req.body.title;
  for (let i = 0; i < req.body.list.length; i++) {
    colabTodo.todoList[i] = req.body.list[i];
  }
  colabTodo.save((err, user) => {
    if (err) {
      return res.status(400).send({
        status: "Colab Todo is not saved"
      });
    } else {
      return res.status(200).send({
        status: "Colab Todo is saved"
      });
    }
  });
});

router.get("/showColabTodo", (req, res) => {
  ColabTodo.find({}, (err, user) => {
    if (err) console.log("Error");
    else {
      return res.status(200).send({
        data: user
      });
    }
  });
});

module.exports = router;
