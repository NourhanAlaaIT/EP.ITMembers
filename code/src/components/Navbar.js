import React, { Component } from "react";
import { BrowserRouter, Link ,Route } from "react-router-dom";

export default class Navbar extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              Logo
            </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle nav-btn" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Login</a>
                    <a className="dropdown-item" href="#">Sign up</a>
                    </div>
                </li>
              </ul>
          </nav>
        </div>
      );
    }
  }