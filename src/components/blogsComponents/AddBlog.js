import React, { Component } from "react";
import "./addQues.css";
class AddBlog extends Component {
  state = {};

  render() {
    return (
      <form className="addQuesForm" onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label>Blog title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label>Choose blog topic:</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
          >
            {this.props.topics.map(topic => (
              <option className="option" key={topic.option} value={topic.option}>
                {topic.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Blog :</label>
          <textarea
            className="form-control textArea"
            name="question"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <button className="addBtn" type="submit">Add</button>
      </form>
    );
  }
}

export default AddBlog;
