import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroingProj from '../components/HeroingProj';
import AboutContent from '../components/Aboutcontent';


const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroingProj heading="ABOUT." text="I'm Cybersecurity Student" />
      <AboutContent/>








    <Footer/></div>
  )
}

export default About