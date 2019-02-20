import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Project_View from "../project.js";

class Familyplace extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var projectrender = (
      <Project_View
        projectname="Familyplace"
        projectpicture1="./img/psstore/picture1.jpg"
        projectpicture2="./img/psstore/picture2.jpg"
        projectpicture3="./img/psstore/picture3.jpg"
        projectpicture4="./img/psstore/picture4.jpg"
        projectpicture5="./img/psstore/picture5.jpg"
        projectdescription="During my master year in Kingston University, one of my projects was to create a completely new product, on the UX side. Therefore, as a brother of 4 sisters living in another country from them, I've immedietaly thought about a Workspace for Facebook-like, made for family."
        projectmore={[
          "As it was a university project, you can access the report about it ",
          <a
            href="./pdf/K1632457_DESIGNREPORT_UX(CONTENTS).pdf"
            target="_blank"
          >
            there.
          </a>
        ]}
        projectprocess={[
          " « FamilyPlace » is a social network made for family. It combines :",
          <br />,
          "- Sharing content such as pictures, videos or web links and articles from the Web. Plus, the ability to create groups to share content with the people you want.",
          <br />,
          "- Communicating with relatives, no matter where they are, using texting and video/audio calling, and even screen sharing",
          <br />,
          "- Managing the family by creating personalized task list, timetable/ calendar and newsfeed depending on the relationship with the other relative.",
          <br />,
          <br />,
          "To create this interface, I used Axure for the wireframes, Sketch, my personal favorite, combined with InVision for the prototype."
        ]}
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default Familyplace;
