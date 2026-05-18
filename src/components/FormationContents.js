import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import "./FormationContentsStyles.css";

const FormationContents = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const handleDetailsClick = (title) => {
        setSelectedCard(title);
        setModalOpen(true);
    };

    const creditTryHackMe = () => { window.location.href = 'https://tryhackme.com/p/Dami-lowdev'; };
    const creditcisco = () => { window.location.href = 'https://www.credly.com/badges/434ba043-e2c1-4601-a6aa-3f370f69c002/public_url'; };
    const creditazure = () => { window.location.href = 'https://www.credly.com/badges/8b71f240-660a-4b4c-9361-4f3717b1c74d/public_url'; };

    const [formations] = useState([
        {
            title: 'ESAIP | Angers, France',
            text: 'Cycle Ingénieur | Majeur Cybersécurité (Septembre 2022 - Septembre 2026)',
            details1: '- Cryptographie, réseaux informatiques, Linux OS, Windows OS, Active Directory',
            details2: '- Gestion de projet, initiation à la recherche scientifique, communication, mathématiques',
        },
        {
            title: 'Hochschule Reutlingen | Reutlingen, Allemagne',
            text: 'Computer Science — Séjour ERASMUS (Mars 2024 - Juillet 2024)',
            details1: '- Cloud computing, génie logiciel',
            details2: '- Business Consulting, Gestion de Projet',
        },
    ]);

    const [certifications] = useState([
        {
            title: 'FORTINET Certified Associate Cybersecurity',
            text: 'Certification délivrée par Fortinet',
            details1: <span><button onClick={() => window.location.href = 'https://www.fortinet.com'}>Voir la certification</button></span>,
        },
        {
            title: 'FORTINET Certified Fundamentals Cybersecurity',
            text: 'Certification délivrée par Fortinet',
            details1: <span><button onClick={() => window.location.href = 'https://www.fortinet.com'}>Voir la certification</button></span>,
        },
        {
            title: 'CCNA : Introduction to Networks',
            text: 'Certification délivrée par Cisco',
            details1: <span><button onClick={creditcisco}>Voir sur Credly</button></span>,
        },
        {
            title: 'Azure AI Fundamentals (AI-900)',
            text: 'Certification délivrée par Microsoft',
            details1: <span><button onClick={creditazure}>Voir sur Credly</button></span>,
        },
        {
            title: 'Mooc SecNumacadémie',
            text: 'Formation cybersécurité délivrée par l\'ANSSI',
            details1: <span>Sécurité des systèmes d'information — référentiel ANSSI</span>,
        },
        {
            title: 'Profil TryHackMe',
            text: 'Plateforme de hacking éthique et de CTF',
            details1: <span><button onClick={creditTryHackMe}>Voir le profil</button></span>,
        },
    ]);

    return (
        <div>
            <section>
                <div className="container">

                    <div className='textleft'><h1>Formation</h1></div>

                    <div className="cards">
                        <div className='softskills'>
                            {formations.map((scard, i) => (
                                <div key={i} className="card">
                                    <h3>{scard.title}</h3>
                                    <p>
                                        {scard.text}
                                        <button className='btn' onClick={() => handleDetailsClick(scard.title)}>
                                            Détails
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
                            ))}
                        </div>

                        <div className='hardskills'>
                            <div className='textleft'><h1>Certifications</h1></div>
                            {certifications.map((hcard, i) => (
                                <div key={i} className="card">
                                    <h3>{hcard.title}</h3>
                                    <p>
                                        {hcard.text}
                                        <button className='btn' onClick={() => handleDetailsClick(hcard.title)}>
                                            Détails
                                        </button>
                                        {modalOpen && selectedCard === hcard.title && (
                                            <div className="modal">
                                                {hcard.details1}
                                                <button className="close-btn" onClick={() => setModalOpen(false)}>
                                                    <FaTimes size={20} style={{ color: "blue" }} />
                                                </button>
                                            </div>
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FormationContents;
