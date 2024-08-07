import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#about" className="navbar-item">Skill</a>
               
      <a href="#Internship&education" className="navbar-item">Internship and Education</a>
                <a href="#projects" className="navbar-item">College Projects</a>
                <a href="#contactPage" className="navbar-item">Contact Me</a>
            </div>
        </nav>
    );
};

export default Navbar;
