/* Login JS Component is responsible for authentication of user */

//Importing 3rd Party Modules
import React, { Component } from "react";
import axios from "axios";

//Import User Defined Module
import setAuthToken from "./auth";

//Export our main Login Component Class
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  //This Method will perform authentication by sending data to server
  login() {
    axios({
      method: "post",
      url: "http://localhost:3000/signin",
      data: {
        email: this.state.email,
        password: this.state.password
      },
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("access_token", res.data.token);
          setAuthToken(res.data.token);
          this.props.history.replace("/single#" + res.data.token);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  //This Method will render login form for user
  render() {
    return (
      <div id="login">
        <h1> Login Here </h1>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    );
  }
}
