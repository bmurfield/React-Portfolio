import React from "react";
import AudioButton from "./fightsong.jsx";


// About Me landing page
// Used global center className to align content on all pages
// AudioButton plays song from fightsong.jsx

const AboutMe = () => (
  <section className="center">
    <h2>About Me</h2>
    <div className="photo-container">
      <img
        src="/pictures/lambo2.jpg"
        alt="picture of me as a kid in front of a lamborghini"
        className="photo-lambo"
      />
      <img
        src="/pictures/penguin.jpg"
        alt="picture of me and my wive at an aquarium"
        className="photo-penguin"
      />
    </div>
    <div className="center">
      <p id="AboutMeP">
        Hi, I'm Brendan Murfield. I grew up in Kansas City and graduated from
        the University of Kansas in 2010 with a BA in Communications. I've had a
        few different jobs in the 15 years since then. A few months ago my
        brother-in-law introduced me to world of coding and I have been hooked
        since then. I'm currently enrolled in a full time bootcamp through the
        University of Central Florida, and plan on getting my certificate in
        December 2024.{" "}
      </p>
      <AudioButton />
    </div>
  </section>
);

export default AboutMe;
