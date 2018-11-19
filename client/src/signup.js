/* Signup JS component is responsible for creating user account */

//Importing 3rd Party Modules
import React, { Component } from "react";
import axios from "axios";

//Export our main Signup Component Class
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  //This Method is responsible for sending user data to user for perform signup operation
  signup() {
    axios({
      method: "post",
      url: "http://localhost:3000/signup",
      data: {
        email: this.state.email,
        password: this.state.password
      },
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
      .then(res => {
        if (res.data.status === "User Account is created") {
          this.props.history.replace("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  //This Method will render signup form for user
  render() {
    return (
      <div id="signup">
        <h1> Signup Here </h1>
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
        <button onClick={this.signup.bind(this)}>Login</button>
      </div>
    );
  }
}
