import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import LepContent from "../components/LepContent";

const Lep = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Vie Associative" text="Mes engagements et apprentissages." />
      <LepContent />
      <Footer />
    </div>
  );
};

export default Lep;
