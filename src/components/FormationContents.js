import React,{useState} from 'react'
//import "./FormationContentsStyles.css";
const FormationContents = () => {
    const [softskills] = useState([
       {
        title: 'ESAIP |Angers, France',
        text: ` Cycle Ingénieur (09/2022 - présent)`
       },
       {
        title: 'Technical University of Lodz|Lodz, Poland ',
        text: ` Bachelor Degree in Computer Science |séjour ERASMUS (02/2023 - 07/2023) `
       },
       {
        title: 'Institut Universitaire de la cote| Douala, Cameroun',
        text: ` Classes Préparatoires aux Grandes Ecoles (09/2020 - 07/2022)`
       },
    ])
    const [hardskills] = useState([
        {
         title: 'CCNA : Introduction to Networks',
         text: ` Certification délivrée par Cisco`
        },
        {
         title: 'Azure AI 900',
         text: ` Certification délivrée par Microsoft .`
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
                           <button className='btn'>
                            details
                           </button>
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
                           <button className='btn'>
                            details
                           </button>
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