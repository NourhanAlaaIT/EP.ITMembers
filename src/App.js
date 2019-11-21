import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUP";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/log-in" component={LogIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </BrowserRouter>
  );
};

export default App;
