import "./FormationCard.css"
import React from 'react'
import { NavLink } from "react-router-dom";

const FormationCard = () => {
  return (
    <div className="formation">
        <div className="card-container">
            <div className="card">
                <h3></h3>
                <span className="bar"> </span>
                <p className="btc">ESAIP|Angers,France</p>
                <p>09/2022-07/2025</p>
                <p>cycle ingénieur</p>
                <p>Programmation</p>
                <p>gestion de projet</p>
               <NavLink to="https://www.esaip.org/" target="_blank" className="btn">WEBsite</NavLink>
            </div>

            <div className="card">
                <h3></h3>
                <span className="bar"> </span>
                <p className="btc">Technical University of Lodz|Lodz,Pologne</p>
                <p>02/2023-07/2023</p>
                <p>Bachelor degree(Erasmus Stay)</p>
                <p>Programmation</p>
                <p>mathématiques</p>
               <NavLink to="https://p.lodz.pl/" target="_blank" className="btn">WEBsite</NavLink>
            </div>

            <div className="card">
                <h3></h3>
                <span className="bar"> </span>
                <p className="btc">Institut de la Côte|Douala,Cameroun</p>
                <p>09/2022-07/2022</p>
                <p>classes Préparatoires</p>
                <p>Programmation</p>
                <p>mathématiques</p>
               <NavLink to="https://myiuc.com/en/home-en/" target="_blank" className="btn">WEBsite</NavLink>
            </div>



        </div>
    </div>
  )
}

export default FormationCard
