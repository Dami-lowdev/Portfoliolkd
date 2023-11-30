import React,{useState,NavLink} from 'react'
import { FaTimes} from "react-icons/fa";
//import "./FormationContentsStyles.css";
const FormationContents = () => {
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
      const creditcisco = () => {
        // Utilisez window.location.href pour rediriger vers le lien LinkedIn
        window.location.href = 'https://www.credly.com/badges/434ba043-e2c1-4601-a6aa-3f370f69c002/public_url';
      };
      const creditazure = () => {
        // Utilisez window.location.href pour rediriger vers le lien LinkedIn
        window.location.href = 'https://www.credly.com/badges/8b71f240-660a-4b4c-9361-4f3717b1c74d/public_url';
      };

    const [softskills] = useState([
       {
        title: 'ESAIP |Angers, France',
        text: ` Cycle Ingénieur (09/2022 - présent)`,
        details1: `-réalisation de projet en respectant la méthode agile`,
        details2: `-apprentissage de la cybersécurité (cryptographie, investigation Numérique) `,
        
       },
       {
        title: 'Technical University of Lodz|Lodz, Poland ',
        text: ` Bachelor Degree in Computer Science |séjour ERASMUS (02/2023 - 07/2023) `,
        details1: `-development of a Student Management platform based on Angular Framework and its security tools`,
        details2: `-integration in a foreign land`
        

       },
       {
        title: 'Institut Universitaire de la cote| Douala, Cameroun',
        text: ` Classes Préparatoires aux Grandes Ecoles (09/2020 - 07/2022)`,
        details1: `-apprentisage de langage de programmation(c,java)`,
        details2: `-Mathématiques, Physique , Science de l'ingénieur`
       },
    ])
    const [hardskills] = useState([
        {
         title: 'CCNA : Introduction to Networks',
         text: ` Certification délivrée par Cisco`,
         details1: (
            <span>
              <button onClick={creditcisco}>Cisco</button>
            </span>
          ),
        },

        {
         title: 'Azure AI 900',
         text: ` Certification délivrée par Microsoft .`,
          details1: (
            <span>
              <button onClick={creditazure}>Azure AI900</button>
            </span>
          ),
         
        },
        
     ])
  return (
    <div>
        <section>
            <div className="container">
                
               <div className='textleft'> <h1>Formation</h1></div>
        
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
                           <button className='btn' onClick={() => handleDetailsClick(scard.title)}>
                            details
                           </button>
                           {modalOpen && selectedCard === scard.title && (
      <div className="modal">
        {scard.details1}
        <p>{scard.details2}</p>
        <button className="close-btn" onClick={() => setModalOpen(false)}>
        <FaTimes size={20} style={{ color: "blue" }} /> 
        </button>
      </div>
    )}
                        </p>
                    </div>
                        ))
                        
                        }
                    </div>
                    <div className='hardskills'>

                    <div className='textleft'> <h1>Certifications</h1></div>
                    {
                        hardskills.map((hcard,i) =>(

                            <div key={i} className="card">
                        <h3>
                            {hcard.title}
                        </h3>
                        <p>
                           {hcard.text}
                           <button className='btn' onClick={() => handleDetailsClick(hcard.title)}>
                            details
                           </button>
                           {modalOpen && selectedCard === hcard.title && (
      <div className="modal">
        {hcard.details1}
        <p>{hcard.details2}</p>
        <button className="close-btn" onClick={() => setModalOpen(false)}>
        <FaTimes size={20} style={{ color: "blue" }} /> 
        </button>
      </div>
    )}
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

export default FormationContents