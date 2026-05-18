import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import CompetencesContent from "../components/CompetencesContent";


const Competences = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Compétences" text="Techniques, humaines et transverses." />
      <CompetencesContent/>
      <Footer />
    </div>
  );
};

export default Competences;