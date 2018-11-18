/* This Component is for show todo list to authorized single user */

//Third Party Modules
import React from "react";
import axios from "axios";

//User Defined Modules
import { askForPermissionToReceiveNotifications } from "./push-notification";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", singleTodo: [] };
  }
  componentWillMount() {
    let email = window.location.hash.substring(1);
    this.setState({ email: email });
    localStorage.setItem("email", email);
  }
  showTodo(Id) {
    document.getElementById(Id + "1").style.display = "inline-block";
    document.getElementById(Id).innerHTML = "Hide";
    document.getElementById(Id).onclick = this.hideTodo.bind(this, Id);
  }
  hideTodo(Id) {
    document.getElementById(Id + "1").style.display = "none";
    document.getElementById(Id).innerHTML = "Show";
    document.getElementById(Id).onclick = this.showTodo.bind(this, Id);
  }
  render() {
    return (
      <main>
        <ul className="nav nav-tabs nav-justified">
          <li>
            <a href={"#" + this.state.email} style={{ fontSize: 30 }}>
              Single Todo
            </a>
            <br />
            <button
              id="notification"
              onClick={askForPermissionToReceiveNotifications}
            >
              Recieve Notification
            </button>
            <div>
              {this.state.singleTodo.map((res, index) => {
                return (
                  <div key={index}>
                    <h1>
                      {res.todoTitle}
                      <button
                        style={{ float: "right" }}
                        onClick={this.showTodo.bind(this, res._id)}
                        id={res._id}
                      >
                        Show
                      </button>
                    </h1>
                    <div id={res._id + "1"} style={{ display: "none" }}>
                      <h1>{res.email}</h1>
                      {res.todoList.map((item, index) => {
                        return (
                          <div key={index}>
                            <h1>{item}</h1>
                          </div>
                        );
                      })}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </main>
    );
  }
  componentDidMount() {
    axios.get("http://localhost:3000/showSingleTodo").then(res => {
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].email === this.state.email) {
          this.state.singleTodo.push(res.data.data[i]);
        }
      }
      this.setState({ singleTodo: this.state.singleTodo });
    });
  }
}
