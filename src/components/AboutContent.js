import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/LANING Damien picture.jpg";
import React2 from "../assets/brainkey.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Qui suis-je ?</h1>
        <p>
          Etudiant ingenieur en cybersecurite a l'ESAIP Angers (cycle bac+5),
          je recherche un <strong>stage de fin d'etudes</strong> dans les domaines
          du Pentest, de la Forensique numerique ou du DevSecOps.
        </p>
        <p>
          Mon parcours m'a conduit de Douala a Angers, avec une experience
          Erasmus a l'Universite Technique de Lodz (Pologne). Curieux et
          rigoureux, j'aime aborder la securite comme un etat d'esprit autant
          que comme une discipline technique.
        </p>
        <Link to="/contact">
          <button className="btn">Me contacter</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
