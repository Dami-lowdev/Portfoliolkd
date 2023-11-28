import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const Resume = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="RESUME." text="summary of my CV" />

        <Footer/>
    </div>
  )
}

export default Resume