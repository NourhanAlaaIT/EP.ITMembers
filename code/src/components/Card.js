import React, { Component } from "react";

import { BrowserRouter, Link ,Route } from "react-router-dom";

export default class Card extends Component {
    
    state = {
        welcomeText : "Lorem ipsum dolor sit amet, consectetur",
        btnText: "Join us"
    }

    render() {
      return (
        <div>
          <article className="mainCard">
              <p> {this.state.welcomeText} </p>
              <button className="btn"> {this.state.btnText} </button>
          </article>
          <Link to="/view/courses" className="left-btn"><i className="fas fa-chevron-left"></i></Link>

        </div>
      );
    }
  }