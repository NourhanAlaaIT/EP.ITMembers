import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Courses from './components/Courses';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Card} />
        <Route exact path="/view/courses" component={Courses} />
        </BrowserRouter>
    );
  }
}
