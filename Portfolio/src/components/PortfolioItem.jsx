import React from "react";

const PortfolioItem = ({ project }) => (
  <section className="Box">
    <img src={project.image} />
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-github"></i>
    </a>
    <a href={project.deployed} target="_blank" rel="noopener noreferrer">
      <i class="fa-solid fa-link"></i>
    </a>
  </section>
);

export default PortfolioItem;
