import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Project_Thumbnail from "./components/thumbnail/thumbnail.js";
import "./home.css";

const projects = [
  {
    projectname: "societe generale design",
    projecttags: "ux design, ui design",
    projectdate: "2017/2018",
    mainimg_link: "./img/sg/main.jpg",
    projectlink: "sgdesign"
  },
  {
    projectname: "pride in london",
    projecttags: "ui design",
    projectdate: "2018",
    mainimg_link: "./img/pride/main.jpg",
    projectlink: "pride"
  },
  {
    projectname: "playstation store redesign study",
    projecttags: "ui design, redesign, ux design",
    projectdate: "2017",
    mainimg_link: "./img/psstore/main.jpg",
    projectlink: "psstore"
  },
  {
    projectname: "sleen: a presentation assistant",
    projecttags: "ui design, front-end dev",
    projectdate: "2017",
    mainimg_link: "./img/sleen/main.jpg",
    projectlink: "sleen"
  },
  {
    projectname: "familyplace",
    projecttags: "ux design, research",
    projectdate: "2016",
    mainimg_link: "./img/familyplace/main.jpg",
    projectlink: "familyplace"
  }
];

class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var ProjectsElements = projects.map((projects, index) => (
      <Project_Thumbnail key={index} data={projects} />
    ));

    return <div className="App row mt-4">{ProjectsElements}</div>;
  }
}
export default HomeView;
