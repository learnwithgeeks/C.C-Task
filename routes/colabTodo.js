/* Colab Todo Js Module is responsible for storing todo list for multiple users */

//Importing 3rd Party Modules
const express = require("express"),
  axios = require("axios"),
  router = express.Router();

//Importing User Defined Module
const ColabTodo = require("../models/colabTodo");
const User = require("../models/user");
const passport = require("../strategy/jwt");

/* This route is responsible for storing todo collabrators , todo title and todo list in database and send notification to client addreses  */
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
      //Firebase Notification When Todo Is Added
      for (let i = 0; i < req.body.email.length; i++) {
        User.findOne({ email: req.body.email[i] }, (err, user) => {
          if (!err) {
            axios({
              method: "post",
              url: "https://fcm.googleapis.com/fcm/send",
              data: {
                to: user.token,
                notification: {
                  title: req.body.title
                }
              },
              headers: {
                Authorization:
                  "key=AAAAZv05ZFw:APA91bFcfX1bl6Nc5HREIE2uJXjO00LHCVbDvAMjNyC9tBskXnlkA0LM0HjC5KJkRYzJo2beqNHXoImfIz8MgC6OmLYm5nj2ssWkRwkidMVR0jtPbRVHj78RfAjNgAiftgihriqtSyZj",
                "Content-Type": "application/json"
              }
            });
          }
        });
      }
    }
  });
});

/* This route will show all the collabrative todo list to multiple user */
router.get(
  "/showColabTodo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ColabTodo.find({}, (err, user) => {
      if (err) console.log("Error");
      else {
        return res.status(200).send({
          data: user
        });
      }
    });
  }
);

//Exporting router module
module.exports = router;
