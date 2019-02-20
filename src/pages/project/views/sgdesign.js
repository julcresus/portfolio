import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Project_View from "../project.js";

class PsStore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var projectrender = (
      <Project_View
        projectname="Societe Generale Design"
        projectpicture1="./img/sg/1.png"
        projectpicture2="./img/sg/2.png"
        projectpicture3="./img/sg/3.png"
        projectdescription="SG Markets Foreign Exchange is a fast, secure and reliable way to electronically access Societe Generale’s deep FX liquidity. FX has many products such as Options, Target Accumulator and Bulk Trading."
        projectmore={[
          "You can read more about the design process here: ",
          <a href="https://design.sgmarkets.com/en/" target="_blank">
            https://design.sgmarkets.com/en/
          </a>
        ]}
        projectprocess={[
          "I was brought on board around 35% of the project. Each product had its own process, although there was a common base on every process.",
          <ul>
            <li>
              Meeting with the stakeholders, P.O and developers aka. the pizza
              team
            </li>
            <li>
              Defining use cases, as a follow-up of the stakeholders meeting
            </li>
            <li>Building user journeys and personas</li>
            <li>Validating all the research with the pizza team</li>
            <li>Wireframing based on the research</li>
            <li>UI/UX prototyping using Adobe Photoshop/XD</li>
            <li>Developer handout using InVision</li>
          </ul>,
          "",
          <h5>The transition</h5>,
          "Moreover, the design system was being switched from Bootstrap 3 to Bootstrap 4, which provided a new design system and style, which brought some changes to the actual process. Indeed, the processes were taking more time and needed more supervision from the transition team, and also more discussion with developers."
        ]}
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default PsStore;
