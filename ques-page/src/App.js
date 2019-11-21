import React, { Component } from "react";
import "./App.css";
import Navbar from './componets/Navbar';
import Footer from "./componets/Footer";


class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
