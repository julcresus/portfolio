import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Project_View from "../project.js";

class Pride extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var projectrender = (
      <Project_View
        projectname="Pride In London"
        projectpicture1="./img/psstore/picture1.jpg"
        projectpicture2="./img/psstore/picture2.jpg"
        projectpicture3="./img/psstore/picture3.jpg"
        projectpicture4="./img/psstore/picture4.jpg"
        projectpicture5="./img/psstore/picture5.jpg"
        projectdescription="I got to work on the Pride in London website, as a volunteer. It was a small experience because of time schedule, although, I got to see most of the process that was made, and got to work with really nice people. I mainly worked on the UI of 'Places to Eat & Drink', based on wireframes, desktop and mobile version. It's an experience I'd love to try again next year, much more earlier to give myself more time on it."
        projectmore={[]}
        projectprocess={[
          "To create this interface, I used Sketch, my personal favorite, combined with InVision for the interaction and the sharing."
        ]}
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default Pride;
