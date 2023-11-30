import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import FormationContents from "../components/FormationContents"


const Formation = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Formation" text="cursus scolaires et certifications." />
      <FormationContents />
      <Footer />
    </div>
  );
};

export default Formation;