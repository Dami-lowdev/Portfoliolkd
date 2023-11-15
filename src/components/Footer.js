import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color:"#7a5bb3", marginRight: "2rem"}}/>  
                    <div>
                      <p>Boulevard Henri Dunant</p>
                      <p>Angers 49000.</p>
                     </div>
                </div>

             <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#7a5bb3", marginRight: "2rem"}}/>  
                  +33 78000000000</h4>
                   
             </div>
             <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#7a5bb3", marginRight: "2rem"}}/>  
                  laningkeuboudamien@gmail.com</h4>
                   
             </div>



            </div>



            <div className="right">
                <h4> About Damien</h4>
                <p>   this is a Damien a passionated Cybersecurity Student</p>
                
                <div className="social">
                <FaMailBulk size={20} style={{color:"#7a5bb3", marginRight: "1rem"}}/>
                <FaGithub size={20} style={{color:"#7a5bb3", marginRight: "1rem"}}/>
                <FaLinkedin size={20} style={{color:"#7a5bb3", marginRight: "1rem"}}/>


                </div>








            </div>




        </div>
    </div>
  )
}

export default Footer