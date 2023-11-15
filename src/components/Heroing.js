import "./HeroingStyles.css";
import React from 'react'
import IntroImg from "../rawImg/backgoundapropos de moi.jpg"
import {Link} from "react-router-dom";

const Heroing = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Background"/>
    
      </div>
      <div className="content">
        <p>Hi I'm Damien Laning it's a pleasure to meet you here!</p>
        <h1>Cybersecurity Student.</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroing


    