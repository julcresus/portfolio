import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./project.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);
library.add(faArrowLeft);

function Project_View(props) {
  return (
    <div className="row">
      <div className="col-6 project_description">
        <h2>
          <a href="./">
            <FontAwesomeIcon icon="arrow-left" className="backicon" size="xs" />
          </a>
          {props.projectname}
        </h2>
        <br />
        <h5>The brief</h5>
        <p>{props.projectdescription}</p>
        <p>
          <i>{props.projectmore}</i>
        </p>
        <h5>The process</h5>
        <p>{props.projectprocess}</p>
      </div>
      <div className="col-6">
        <Carousel showStatus={false} showIndicators={false}>
          <div>
            <img src={props.projectpicture1} />
          </div>
          <div>
            <img src={props.projectpicture2} />
          </div>
          <div>
            <img src={props.projectpicture3} />
          </div>
          <div>
            <img src={props.projectpicture4} />
          </div>
          <div>
            <img src={props.projectpicture5} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Project_View;
