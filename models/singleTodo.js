/* Single Todo JS Module is responsible for storing Personal Todo list */

//Importing 3rd Party Modules
const mongoose = require("mongoose");

//Schema will be stored in constant named as Schema
const Schema = mongoose.Schema;

//Schema of userModel for user
const singleTodo = new Schema({
  email: { type: String, lowercase: true },
  todoTitle: String,
  todoList: String
});

//Exporting the userModel as a key User
module.exports = mongoose.model("SingleTodo", singleTodo);
