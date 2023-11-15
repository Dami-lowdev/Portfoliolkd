import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/LANING Damien picture.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
        Bienvenue dans l'univers fascinant de l'informatique, où ma passion et ma curiosité se rencontrent pour créer des opportunités infinies. 
        Spécialisé dans le monde dynamique des réseaux, je suis constamment assoiffé de nouvelles connaissances et passionné par les technologies émergentes. Mon souhait de contribuer à l'évolution de votre équipe est motivé par la recherche constante d'excellence et la volonté de perfectionner mes compétences. 
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
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
