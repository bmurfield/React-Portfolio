import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Header.css';

function Header() {
  return (
    <header>
      <h1>Brendan Murfield</h1>
      <nav>
        <NavLink to="/" end>About Me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
    </header>
  );
}

export default Header;