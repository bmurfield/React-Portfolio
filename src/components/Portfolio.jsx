import React from 'react';
import PortfolioItem from './PortfolioItem';

const Projects = [
  {
    github:"https://github.com/bmurfield/BLAM", 
    deployed: "https://bmurfield.github.io/BLAM/",
    image: "/pictures/border2.png"
  },
  {
    github:"https://github.com/bmurfield/Weather-Dashboard", 
    deployed: "https://weather-dashboard-11tr.onrender.com/",
    image: "/pictures/weather2.jpg"
  },
  {
    github:"https://github.com/bmurfield/Driving-Simulator", 
    deployed: "https://drive.google.com/file/d/1ABIhLAlLVRMMr_ZSpWCli1YI9WYp2PZs/view",
    image: "/pictures/driver.jpg"
  },
  {
    github:"https://github.com/bmurfield/README-Generator", 
    deployed: "https://drive.google.com/file/d/1TPyhlGXWn3JdqjgfLQl0GAO54ap0_MNl/view",
    image: "/pictures/readme2.jpg"
  },
  {
    github:"https://github.com/bmurfield/React-Portfolio", 
    deployed: "https://github.com/bmurfield/React-Portfolio",
    image: "/pictures/port1.jpg"
  },
  {
    github:"https://github.com/bmurfield/", 
    deployed: "https://github.com/bmurfield/",
    image: "/pictures/football3.jpg"
  }
]

const Portfolio = () => (
    <section className='center'>
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