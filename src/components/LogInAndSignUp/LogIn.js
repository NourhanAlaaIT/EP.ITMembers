import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./login.css";
class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = document.getElementsByTagName("form");
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    this.setState({
      email: email,
      password: password
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Log In</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Email:</label>
              <input
                className="input email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="field">
              <label>Password:</label>
              <input
                className="input password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <input className="button" type="submit" value="log in" />
          </form>
          <p className="signUp">
            Don't have account ?
            <Link className="signUpLink" to="/signUp">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LogIn;
