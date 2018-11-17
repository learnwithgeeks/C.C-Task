import React from "react";
import ReactDOM from "react-dom";
import CollabrativeTodo from "./collabrativeTodo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CollabrativeTodo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
