import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" onClick={closeMenu}>
        <h1>Damien Laning</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/formation" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Formation</NavLink>
        </li>
        <li>
          <NavLink to="/competences" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Compétences</NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Projets</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
