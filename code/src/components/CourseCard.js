import React, { Component } from "react";
import { BrowserRouter, Link,Route } from "react-router-dom";

export default class CoursesCard extends Component {

    render() {
      return (
            <div className="card">
                <Link to="">
                    <div className="card-body">
                        <h4 className="card-title">{ this.props.data.title}</h4>
                        <p className="card-text">{ this.props.data.body}</p>
                    </div>
                </Link>
            </div>
      );
    }
  }