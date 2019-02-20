import React, { Component } from "react";
import HomeView from "./pages/home/home.js";
import About from "./pages/about/about.js";
import PsStore from "./pages/project/views/psstore.js";
import SgDesign from "./pages/project/views/sgdesign";
import Familyplace from "./pages/project/views/familyplace";
import Pride from "./pages/project/views/pride.js";
import Sleen from "./pages/project/views/sleen.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainView = () => (
  <Router>
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/home"
            className="nav-link bg-dark text-white font-weight-bold"
          >
            Julien CRESUS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./pdf/cv.pdf" target="_blank">
            cv
          </a>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={HomeView} />
      <Route exact path="/home" component={HomeView} />
      <Route path="/about" component={About} />
      <Route path="/psstore" component={PsStore} />
      <Route path="/sleen" component={Sleen} />
      <Route path="/pride" component={Pride} />
      <Route path="/familyplace" component={Familyplace} />
      <Route path="/sgdesign" component={SgDesign} />
    </div>
  </Router>
);

export default MainView;
