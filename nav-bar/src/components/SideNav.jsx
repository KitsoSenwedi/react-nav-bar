// SideNav.js
import React, { useState } from 'react';
import './SideNav.css';
import './Theme.css'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Side navigation container */}
      <div className={`sidenav ${isOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleNav}>
          &times;
        </button>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Button to open the side navigation */}
      <span className="openbtn" onClick={toggleNav}>
        &#9776; Menu
      </span>
    </div>
  );
};

export default SideNav;
