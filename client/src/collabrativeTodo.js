/* This Component is for show todo list to authorized collabrative user */

//Third Party Modules
import React from "react";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", collabrativeTodo: [] };
  }
  componentWillMount() {
    let email = window.location.hash.substring(1);
    this.setState({ email: email });
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
              Collabrative Todo
            </a>
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
                    <div id={res._id + "1"} style={{ display: "none" }}>
                      {res.email.map((item, index) => {
                        return (
                          <div key={index}>
                            <h1>{item}</h1>
                          </div>
                        );
                      })}
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
