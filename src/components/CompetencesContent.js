import React,{useState} from 'react'
import { FaTimes } from "react-icons/fa";

const CompetencesContent = () => {
    const [modalOpen, setModalOpen]= useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const handleDetailsClick = (title) => {
        setSelectedCard(title);
        setModalOpen(true);
      };
      
      const closeModal = () => {
        setModalOpen(false);
        setSelectedCard(null);
      };
      
    const [softskills] = useState([
        {
         title: 'ADECCO.IESEG |Paris, France',
         text: ` Intérimaire | Technicien Informatique(09/2023)`,
         details1: `-deploiement de 150 postes informatiques sur le campus de paris `,
         details2: `-installation d'Operating System grace à manage engine OS deployer `,
        },
        {
         title: 'INVEST LOGISTIC SARL |Douala, Cameroun',
         text: ` Stagiaire (07/2021 - 09/2021) `,
         details1: ` -gestion et placement de produits sur un site d'E-Commerce`,
         details2: ` -prospection et proposition de solutions informatiques`
        },
       
     ])
     const [hardskills] = useState([
         {
          title: 'Adaptabilité & Apprentissage Continu',
          text: `compétence que je développe pendant mes expériences de vie`
         },
         {
          title: 'Aisance dans les communications interpersonelles',
          text: ` échanger avec les autres est toujours une meilleure manière de s'instruire.`
         },
         {
            title: 'Esprit d équipe',
            text: `compétence développée surtout à travers les projets académiques réalisés`
           },
         
      ])
      const [techskills] = useState([
        {
         title: 'administration Réseau',
         text: `LINUX , CISCO , Serveur Windows , GNS3`
        },
        {
         title: 'Traitement de Texte et Reporting',
         text: ` Ms Word, Excel, PowerPoint, Canva`
        },
        {
           title: 'Programmation Web |Frontend ',
           text: `HTML/CSS, Java , React.js , GitHub, MATLAB`
          },
        
     ])
   return (
     <div>
         <section>
             <div className="container">
                 
                <div className='textleft'> <h1>Experiences Professionnelles</h1></div>
         
                 <div className="cards">
                     <div className='softskills'>
                     {
                         softskills.map((scard,i) =>(
 
                             <div key={i} className="card">
                         <h3>
                             {scard.title}
                         </h3>
                         <p>
                            {scard.text}
                            <button className='btn' onClick={() => handleDetailsClick(scard.title)} >
                             details
                            </button>
                         </p>
                         {modalOpen && selectedCard === scard.title && (
      <div className="modal">
        {scard.details1}
        <p>{scard.details2}</p>
        <button className="close-btn" onClick={() => setModalOpen(false)}>
        <FaTimes size={20} style={{ color: "blue" }} /> 
        </button>
      </div>
    )}
                     </div>
                         ))
                         
                         }
                     </div>
                     <div className='hardskills'>
 
                     <div className='textleft'> <h1>Compétences Humaines</h1></div>
                     {
                         hardskills.map((hcard,i) =>(
 
                             <div key={i} className="card">
                         <h3>
                             {hcard.title}
                         </h3>
                         <p>
                            {hcard.text}
                            
                         </p>
                     </div>
                         ))
                         
                         }
                         <div className='textleftsub'> <h1>Compétences Techniques</h1></div>
                         {
                         techskills.map((tcard,i) =>(
 
                             <div key={i} className="card">
                         <h3>
                             {tcard.title}
                         </h3>
                         <p>
                            {tcard.text}
                            
                         </p>
                     </div>
                         ))
                         
                         }
                     </div>
                 </div>
             </div>
         </section>
 
     </div>
   )
 }

export default CompetencesContent