import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./about.css";

const hobbies = [
  "instagramming food, people, buildings or selfies",
  "playing rugby, or at least trying, for the King's Cross Steelers",
  "watching movies or TV shows",
  "travelling, visiting new cities, new museums"
];

const hobbies_list = hobbies.map(hobby => {
  return <li>{hobby}</li>;
});

const About = () => (
  <div class="row">
    <div class="col-sm-5">
      <img src="img/profilepic.png" alt="profilepic" class="img-responsive" />
    </div>
    <div class="col-sm-6">
      <h2>About me</h2>
      <p>
        Hi, I'm Julien. I am a UX/UI designer. <br />I work on the internet and
        create designs for it. <br />
      </p>
      <p>
        I've started coding my first hello world app in C++ back when I was 9,
        which was not very user friendly or usable at all, but it worked.
      </p>
      <p>
        Originally from Paris, I emigrated to London in 2016, in order to do my
        studies in UX Design and discover some new horizons. I graduated in 2018
        from Kingston University, London. After a year and a half at Societe
        Generale, I'm currently on the hunt for new opportunities and new
        challenges.
      </p>
      <p>When I'm not designing, I'm:</p>
      {hobbies_list}
      <br />
      <p>
        Don't hesitate to say hello here: {""}
        <a href="mailto:cresusjulien@gmail.com">hello@juliencresus.com</a>!
      </p>
    </div>
  </div>
);

export default About;
