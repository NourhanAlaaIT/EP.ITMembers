import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Courses />
      <Footer />
    </React.Fragment>
  );
};

export default App;
