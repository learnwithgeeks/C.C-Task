/* This will test all the component by render it to DOM */

//Importing 3rd Party Module
import React from "react";
import ReactDOM from "react-dom";

//Importing User Defined Component
import Login from "./login";
import Signup from "./signup";
import SingleTodo from "./singleTodo";
import CollabrativeTodo from "./collabrativeTodo";

//This Method will test login component
it("login", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//This Method will test signup component
it("signup todo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Signup />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//This Method will test single todo component
it("single todo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SingleTodo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//This Method will test collabrative todo component
it("collabrative todo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CollabrativeTodo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
