import React,{useState} from 'react'


const CompetencesContent = () => {
    const [softskills] = useState([
        {
         title: 'ADECCO.IESEG |Paris, France',
         text: ` Intérimaire | Technicien Informatique(09/2023)`
        },
        {
         title: 'INVEST LOGISTIC SARL |Douala, Cameroun',
         text: ` Stagiaire (07/2021 - 09/2021) `
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
                            <button className='btn'>
                             details
                            </button>
                         </p>
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