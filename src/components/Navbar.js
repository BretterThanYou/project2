// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/page1" className="nav-link">Super Mario Bros</Link>
      <Link to="/page2" className="nav-link">The Legend of Zelda</Link>
      <Link to="/page3" className="nav-link">Pokemon</Link>
    </nav>
  );
};

export default Navbar;