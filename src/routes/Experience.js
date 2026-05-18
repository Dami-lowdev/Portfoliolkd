import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ExperienceContent from "../components/ExperienceContent";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Expériences" text="Mon parcours professionnel." />
      <ExperienceContent />
      <Footer />
    </div>
  );
};

export default Experience;
