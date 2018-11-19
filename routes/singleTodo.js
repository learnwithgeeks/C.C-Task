/* Single Todo Js Module is responsible for storing todo list for single user */

//Importing 3rd Party Modules
const express = require("express"),
  axios = require("axios"),
  router = express.Router();

//Importing User Defined Modules
const SingleTodo = require("../models/singleTodo");
const User = require("../models/user");
const passport = require("../strategy/jwt");

/* This route is responsible for storing todo title and todo list array in database after that i will send notification to user */
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
      //Firebase Notification When Todo Is Added
      User.findOne({ email: req.body.email }, (err, user) => {
        let token = user.token;
        axios({
          method: "post",
          url: "https://fcm.googleapis.com/fcm/send",
          data: {
            to: token,
            notification: {
              title: req.body.title
            }
          },
          headers: {
            Authorization:
              "key=AAAAZv05ZFw:APA91bFcfX1bl6Nc5HREIE2uJXjO00LHCVbDvAMjNyC9tBskXnlkA0LM0HjC5KJkRYzJo2beqNHXoImfIz8MgC6OmLYm5nj2ssWkRwkidMVR0jtPbRVHj78RfAjNgAiftgihriqtSyZj",
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  });
});

/* This route will show all todo list to single user */
router.get(
  "/showSingleTodo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    SingleTodo.find({}, (err, user) => {
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
