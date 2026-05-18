import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/photo de damien.jpeg";
import React2 from "../assets/brainkey.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Qui suis-je ?</h1>
        <p>
          Étudiant en 5ème année de cycle ingénieur (BAC+5) à l'ESAIP Angers,
          spécialisé en cybersécurité, je recherche un{" "}
          <strong>stage de fin d'études à partir de septembre 2026</strong>.
          Passionné par l'administration réseau, le cloud et la sécurité
          offensive, je souhaite contribuer à des projets innovants tout en
          développant mes compétences techniques et professionnelles.
        </p>
        <p>
          Mon parcours m'a conduit de Douala à Angers, avec une expérience
          ERASMUS à la Hochschule Reutlingen (Allemagne). Curieux et
          persévérant, j'aborde la sécurité comme un état d'esprit autant
          que comme une discipline technique.
        </p>

        <h2>Dans 3 ans</h2>
        <p>
          Ingénieur cybersécurité au sein d'une équipe Pentest ou DevSecOps,
          après mon stage de fin d'études. Consolidation de mes certifications
          — OSCP dans le viseur — et montée en expertise sur les audits
          techniques offensifs.
        </p>

        <h2>Dans 5 ans</h2>
        <p>
          Consultant ou expert reconnu, capable d'intervenir sur des missions
          d'audit complexes avec une dimension internationale, héritée de mon
          parcours entre le Cameroun, la France et l'Allemagne.
        </p>

        <Link to="/contact">
          <button className="btn">Me contacter</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="Damien Laning Keubou" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="cybersécurité" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
