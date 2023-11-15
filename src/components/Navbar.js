import "./NavbarStyles.css"
import React, {useState} from 'react';
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa";



const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio.dkl</h1>
      </Link>
      
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/formation" onClick={handleClick}>
            Formation
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="pilemenu" onClick={handleClick}>
        <FaBars size={20} style={{ color: "#dff" }} />
      </div>
    </div>
  );
};


























/*const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio.dkl</h1>
        </Link>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
 
            </li>
            <li>
                <Link to="/formation">Formation</Link>
                
            </li>
            <li>
                <Link to="/project">Projects</Link>
                
            </li>
            <li>
                <Link to="/hobbies">Hobbies</Link>
                
            </li>
            <li>
                <Link to="/contact">Contact</Link>
                
            </li>
        </ul>

        <div classname="pilemenu" onClick={handleClick}>

            <FaBars size={(20)} style={{color: "#000" }} />
    
        </div>
    </div>
  )
}*/

export default Navbar