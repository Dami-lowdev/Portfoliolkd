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
        <p className="hero-subtitle">Salut, je suis Damien Laning Keubou</p>
        <h1 className="hero-title">Administrateur Systèmes & Réseaux | Cybersécurité</h1>
        <p className="hero-spec">Pentest · Administration Réseau · Cloud</p>
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

