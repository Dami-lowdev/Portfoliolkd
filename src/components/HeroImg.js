import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/backgoundapropos de moi.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="hero-subtitle">Salut, je suis Damien Laning</p>
        <h1 className="hero-title">Etudiant Ingenieur Cybersecurite</h1>
        <p className="hero-spec">Pentest · Forensics · DevSecOps</p>
        <div className="hero-btns">
          <Link to="/project" className="btn">
            Mes Projets
          </Link>
          <Link to="/contact" className="btn btn-light">
            Me Contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

