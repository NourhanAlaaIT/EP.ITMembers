import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Blogs from './components/Blogs';
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Blogs />
      <Footer />
    </React.Fragment>
  );
};

export default App;
