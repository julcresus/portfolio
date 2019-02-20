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
        projectname="Playstation Store App study"
        projectpicture1="./img/psstore/picture1.jpg"
        projectpicture2="./img/psstore/picture2.jpg"
        projectpicture3="./img/psstore/picture3.jpg"
        projectpicture4="./img/psstore/picture4.jpg"
        projectpicture5="./img/psstore/picture5.jpg"
        projectdescription="Within the scope of my studies in Kingston University, the goal was to analyse a desktop system such as a website or an application and redesign it for mobile devices, using UX principles and the CIF (Common Industry Format) for Usability Test Report. I decided to focus on the PlayStation Store, which, in my opinion, has a lack of consistency between all current platforms. I decided to merge the PlayStation Store and the current PlayStation Messages app and make an application of its time."
        projectmore={[
          "You can try it using this link: ",
          <a
            href="https://projects.invisionapp.com/share/UHA1EOIVZ#/screens"
            target="_blank"
          >
            https://projects.invisionapp.com/share/UHA1EOIVZ#/screens
          </a>
        ]}
        projectprocess={[
          " ",
          <ul>
            <li>
              Benchmark about the different game platforms (Xbox Store,
              PlayStation Store Desktop, PS Store Console...)
            </li>
            <li>
              Testing on those platforms by making the user try different easy
              tasks and interview them on their behaviour and opinion
            </li>
            <li>
              Surveying a bigger audience made of gamers and non gamers about
              their use of the gaming platform
            </li>
            <li>
              Understanding of all the data gathered and defining the
              deliverables
            </li>
            <li>
              Building user journeys and personas based on the research done
              before
            </li>
            <li>Content creation such as messages and games</li>
            <li>Wireframing the app using Axure</li>
            <li>UI Design using Sketch and InVision</li>
            <li>App testing on same users as before</li>
          </ul>
        ]}
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default PsStore;
