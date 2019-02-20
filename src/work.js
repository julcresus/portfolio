import React, { Component } from "react";
import meimage from "./img/profilepic.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    var work_thumbnail = (
      <div class="col-xl-4 col-md-6 col-sm-12">
        <div id="win-grid">
          <div id="win-nav">{this.props.projectname}</div>
          <a href="#sgModal" data-toggle="modal" data-target="#sgModal">
            <img id="content" src={this.props.mainimg_link} />
          </a>
          <div id="win-footer">
            <div class="tags">{this.props.projecttags}</div>
            <div class="tags">{this.props.projectdate}</div>
          </div>
        </div>
      </div>
    );
    return <div class="row mt-4">{work_thumbnail}</div>;
  }
}

export default Work;
