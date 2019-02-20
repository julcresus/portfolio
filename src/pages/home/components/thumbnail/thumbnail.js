import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./thumbnail.css";

class Project_Thumbnail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-xl-4 col-md-6 col-sm-12 thumbnail">
        <div id="win-grid">
          <div id="win-nav">{this.props.data.projectname}</div>
          <a href={"./" + this.props.data.projectlink}>
            <img id="content" src={this.props.data.mainimg_link} />
          </a>
          <div id="win-footer">
            <div className="tags">{this.props.data.projecttags}</div>
            <div className="tags">{this.props.data.projectdate}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project_Thumbnail;
