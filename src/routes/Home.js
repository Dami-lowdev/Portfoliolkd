import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import AboutContent from "../components/AboutContent";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
