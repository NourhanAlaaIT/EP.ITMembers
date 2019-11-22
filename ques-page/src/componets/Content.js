import React, { Component } from "react";
import "./style/content.css";
class Content extends Component {
  state = {};

  render() {
    return (
      <div
        className="tab-pane fade show"
        id={this.props.id}
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <h4>{this.props.title}</h4>
        <p>{this.props.ques}</p>
      </div>
      
    );
  }
}

export default Content;
