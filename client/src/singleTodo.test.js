import React from "react";
import ReactDOM from "react-dom";
import SingleTodo from "./singleTodo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SingleTodo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
