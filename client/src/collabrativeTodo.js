/* Collabrative Todo JS Component show todo list to authorized collabrative user */

//Importing Third Party Modules
import React from "react";
import axios from "axios";

//Importing User Defined Component
import { askForPermissionToReceiveNotifications } from "./push-notification";
import setAuthToken from "./auth";

//Export our main Collabrative Todo Component Class
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", collabrativeTodo: [] };
  }
  //This Method will call before render() and it will set email and token in localstorage and header
  componentWillMount() {
    let email = localStorage.getItem("email");
    this.setState({ email: email });
    let token = localStorage.getItem("access_token");
    setAuthToken(token);
    this.props.history.replace("/collabrative#" + token);
  }

  //This Method Will Show Collapsed Todo
  showTodo(Id) {
    document.getElementById(Id + "1").style.display = "inline-block";
    document.getElementById(Id).innerHTML = "Hide";
    document.getElementById(Id).onclick = this.hideTodo.bind(this, Id);
  }

  //This Method Will Collapsed Todo
  hideTodo(Id) {
    document.getElementById(Id + "1").style.display = "none";
    document.getElementById(Id).innerHTML = "Show";
    document.getElementById(Id).onclick = this.showTodo.bind(this, Id);
  }

  //This Method Will Logout User and Remove User Token from local storage
  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("access_token");
    this.props.history.replace("/");
  }

  //Collabrative Todo List Will Render in This Method
  render() {
    return (
      <main>
        <ul className="nav nav-tabs nav-justified">
          <li>
            <a href={"#" + this.state.email} style={{ fontSize: 30 }}>
              Collabrative Todo
            </a>
            <button onClick={this.logout.bind(this)}>Logout</button>
            <button
              id="notification"
              onClick={askForPermissionToReceiveNotifications}
            >
              Recieve Notification
            </button>
            <div>
              {this.state.collabrativeTodo.map((res, index) => {
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
                    <hr />
                    <div id={res._id + "1"} style={{ display: "none" }}>
                      <hr />
                      {res.email.map((item, index) => {
                        return (
                          <div key={index}>
                            <h1>Collabrator : {item}</h1>
                          </div>
                        );
                      })}
                      <hr />
                      {res.todoList.map((item, index) => {
                        return (
                          <div key={index}>
                            <h1> - {item}</h1>
                          </div>
                        );
                      })}
                      <hr />
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

  //This Method will invoked after render()
  componentDidMount() {
    //This Will Get all collabrative user todo list
    axios.get("http://localhost:3000/showColabTodo").then(res => {
      for (let i = 0; i < res.data.data.length; i++) {
        for (let j = 0; j < res.data.data[i].email.length; j++) {
          if (res.data.data[i].email[j] === this.state.email) {
            this.state.collabrativeTodo.push(res.data.data[i]);
          }
        }
      }
      this.setState({ collabrativeTodo: this.state.collabrativeTodo });
    });
  }
}
