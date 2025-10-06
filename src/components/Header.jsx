import React from 'react';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Placeholder for logo, you can replace with an actual image */}
        <span>SRays</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
