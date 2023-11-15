import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroingProj from '../components/HeroingProj';
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroingProj heading="CONTACT." text="contactez moi ici" />
      <Form />
      

      <Footer/></div>
  )
}

export default Contact