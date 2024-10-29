import React from 'react';
import PortfolioItem from './PortfolioItem';

const Projects = [
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "",
    image: ""
  },
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "",
    image: ""
  },
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "",
    image: ""
  },
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "",
    image: ""
  },
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "",
    image: ""
  },
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "",
    image: ""
  }
]

const Portfolio = () => (
    <section>
      <h2>Portfolio</h2>
      <p>Check out some of my projects below.</p>
      <div id="PortfolioItemContainer">
      <PortfolioItem project = {Projects[0]}/>
      <PortfolioItem project = {Projects[1]}/>
      <PortfolioItem project = {Projects[2]}/>
      <PortfolioItem project = {Projects[3]}/>
      <PortfolioItem project = {Projects[4]}/>
      <PortfolioItem project = {Projects[5]}/>
      </div>
    </section>
  );


export default Portfolio;