//Third Party Modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

//User Defined Components
import SingleTodo from "./singleTodo";
import CollabrativeTodo from "./collabrativeTodo";

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
registerServiceWorker();
