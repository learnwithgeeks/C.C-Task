//Third Party Modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//User Defined Components
import SingleTodo from "./singleTodo";
import CollabrativeTodo from "./collabrativeTodo";
import { initializeFirebase } from "./push-notification";

//Render Component To DOM on index.html
ReactDOM.render(
  <BrowserRouter>
    <Switch>
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
initializeFirebase();
