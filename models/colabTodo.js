/* Colab Todo JS Module is responsible for storing Colabrated Todo list */

//Importing 3rd Party Modules
const mongoose = require("mongoose");

//Schema will be stored in constant named as Schema
const Schema = mongoose.Schema;

//Schema of userModel for user
const colabTodo = new Schema({
  email: { type: Array, lowercase: true },
  todoTitle: String,
  todoList: Array
});

//Exporting the userModel as a key User
module.exports = mongoose.model("ColabTodo", colabTodo);
