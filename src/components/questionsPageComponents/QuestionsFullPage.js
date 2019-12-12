import React, { Component } from "react";
import Navbar from "./../sharedComponents/Navbar";
import SideBar from "./SideBar";
import Footer from "./../sharedComponents/Footer";
import Content from "./../ProfileComponents/Content";
class QuestionsFullPage extends Component {
  state = {
    topics: [
      { title: "Web", href: "#Web", option: "Web" },
      { title: "Android", href: "#Android", option: "Android" },
      { title: "IOS", href: "#IOS", option: "IOS" }
    ],
    questions: []
  };
  handleSubmit = e => {
    e.preventDefault();
    //select form fields to get the values of them
    const form = document.querySelector(".addQuesForm");
    const input = document.querySelector("#exampleFormControlInput1").value;
    const textArea = document.querySelector("#exampleFormControlTextarea1")
      .value;
    const select = document.querySelector("#exampleFormControlSelect1");
    const option = select.options[select.selectedIndex].value;
    //validate the form
    if (input === "" || textArea === "") {
      return;
    }
    //put the form's values in the state console here for testing
    if (option === "Web") {
        this.setState({
          questions: [
            {
              title: input,
              ques: textArea,
              option: option
            }
          ]
        })

      console.log({
        title: input,
        ques: textArea,
        option: option
      });
    } else if (option === "Android") {
      this.setState({
        questions: [
          {
            title: input,
            ques: textArea,
            option: option
          }
        ]
      });
      console.log({
        title: input,
        ques: textArea,
        option: option
      });
    } else if (option === "IOS") {
      this.setState({
        questions: [
          {
            title: input,
            ques: textArea,
            option: option
          }
        ]
      });
      console.log({
        title: input,
        ques: textArea,
        option: option
      });
    }
    //reset the form after submit
    form.reset();
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SideBar
          questions={this.state.questions}
          topics={this.state.topics}
          onSubmit={this.handleSubmit}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default QuestionsFullPage;
