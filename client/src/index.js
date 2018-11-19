/* Index JS Component is responsible for rendering all the component to DOM */

//Importing Third Party Modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Import User Defined Components
import Login from "./login";
import Signup from "./signup";
import SingleTodo from "./singleTodo";
import CollabrativeTodo from "./collabrativeTodo";
import { initializeFirebase } from "./push-notification";

//Render Component To DOM on index.html
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" name="Login" component={Login} />
      <Route exact path="/signup" name="Single" component={Signup} />
      <Route exact path="/single" name="Single" component={SingleTodo} />
      <Route
        exact
        path="/collabrative"
        name="Collabrative"
        component={CollabrativeTodo}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
initializeFirebase(); //This Method will initialize fireabase for notification
