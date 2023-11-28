import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCloudDownloadAlt
} from "react-icons/fa";

const Footer = () => {
  const redirigerVersLinkedIn = () => {
    // Utilisez window.location.href pour rediriger vers le lien LinkedIn
    window.location.href = 'https://www.linkedin.com/in/damien-laning-034783257/';
  };
  const redirigerVersGitHub = () => {
    // Utilisez window.location.href pour rediriger vers le lien Github
    window.location.href = 'https://github.com/Dami-lowdev';
  };
  const TelechargerCV = () => {
    // Utilisez window.location.href pour rediriger vers le lien Github
    window.location.href = 'https://1drv.ms/b/s!Au28sXDAsI6JiBrTKTVGszWbVKZq?e=CXG0bk';
  };


  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Boulevard Henri Dunant</p>
              <p>Angers 49000</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +33 780000000
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              laningkeuboudamien@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Damien Portfolio</h4>
          <p>
            N'hésitez pas à me contacter afin que nous discutions de nouveau projets
            et challenges.
          </p>
          
          <div className="social">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={redirigerVersGitHub}

            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={redirigerVersLinkedIn}
            />
          </div>
          <p>
          <FaCloudDownloadAlt
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={TelechargerCV}

            /> mon CV
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
