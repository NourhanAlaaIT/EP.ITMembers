import React, { Component } from "react";
import Navbar from "../sharedComponents/Navbar";
import SideBar from "./SideBar";
import Footer from "../sharedComponents/Footer";
import PersonImg from "../../imgs/person.png";
import Content from "./Content";
class QuestionsFullPage extends Component {
  state = {
    topics: [
      { title: "Activity", href: "#Activity", option: "Activity" },
      { title: "Projects", href: "#Projects", option: "Projects" },
      { title: "Courses", href: "#Courses", option: "Courses" }
    ],
    questions: [],
    profileData: [
      {
        img: { PersonImg },
        name: "Jhon Due",
        position: "Web developer",
        experience: "Project1"
      }
    ]
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
    if (option === "Activity") {
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
    } else if (option === "Projects") {
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
    } else if (option === "Courses") {
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
          profileData={this.state.profileData}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default QuestionsFullPage;
