import React, { Component } from "react";
import CourseCard from './CourseCard';

import { BrowserRouter, Link,Route } from "react-router-dom";

export default class Courses extends Component {
  state = {
    courses: [
        {
            title: "Web development",
            body: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
            title: "App development",
            body: "Lorem ipsum dolor sit amet, consectetur",
        }
    ]
}


    render() {
      return (
          <div className="courseMenu">
            <div className="scrollMenu">
            <h4 className="courseDesc">Scroll left & right to explore our tracks</h4>
                <div className="card-con">
                {this.state.courses && this.state.courses.map((course) => {
                    return(
                      <CourseCard key={course.title} data={course} />
                        )
                    }) 
                }
              </div>
          </div>
          <Link to=""><button className="btn">See more</button></Link>
            <div className="arrowBtns">
              <Link to="/"><i className="fas fa-chevron-left"></i></Link>
              <Link to=""><i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>
      );
    }
  }