import React from "react";
// I used fontawesome for icons here too
const PortfolioItem = ({ project }) => (
  <section className="box">
    <img src={project.image} className="images" />
    <div className="icons">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        id="githubIcon"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a href={project.deployed} target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-link"></i>
      </a>
    </div>
  </section>
);

export default PortfolioItem;
