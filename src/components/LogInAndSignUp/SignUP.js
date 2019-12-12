import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./signup.css";
class SignUp extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    confirm: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = document.getElementsByTagName("form");
    const userName = document.querySelector(".userName").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const confirm = document.querySelector(".confirm").value;
    this.setState({
      userName: userName,
      email: email,
      password: password,
      confirm: confirm
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="containerSignUp">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label>User Name:</label>
            <input
              className="input userName"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={e => this.handleChange(e)}
            />
          </div>
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
          <div className="field">
            <label>Confirm Password:</label>
            <input
              className="input confirm"
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <input className="button" type="submit" value="Sign up" />
        </form>
        <p className="logIn">
          Have account ?
          <Link className="logInLink" to="/logIn">
            Login
          </Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
