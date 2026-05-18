import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import "./FormationContentsStyles.css";

const CREDLY_AZURE    = 'https://www.credly.com/badges/8b71f240-660a-4b4c-9361-4f3717b1c74d/public_url';
const CREDLY_FORTINET = 'https://www.credly.com/badges/8b71f240-660a-4b4c-9361-4f3717b1c74d/public_url';
const CREDLY_CCNA     = 'https://www.credly.com/badges/434ba043-e2c1-4601-a6aa-3f370f69c002/public_url';

const VerifyBtn = ({ href, label = 'Vérifier sur Credly' }) => (
    <a href={href} target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
        {label}
    </a>
);

const FormationContents = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleDetailsClick = (title) => {
        setSelectedCard(title);
        setModalOpen(true);
    };

    const formations = [
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
    ];

    const certifications = [
        {
            title: 'Azure AI Fundamentals (AI-900)',
            text: 'Certification délivrée par Microsoft',
            details: <VerifyBtn href={CREDLY_AZURE} />,
        },
        {
            title: 'Fortinet FortiGate 7.4 Operator',
            text: 'Certification délivrée par Fortinet',
            details: <VerifyBtn href={CREDLY_FORTINET} />,
        },
        {
            title: 'CCNA : Introduction to Networks',
            text: 'Certification délivrée par Cisco',
            details: <VerifyBtn href={CREDLY_CCNA} />,
        },
        {
            title: 'Mooc SecNumacadémie — ANSSI',
            text: 'Formation cybersécurité délivrée par l\'ANSSI (Agence Nationale de la Sécurité des Systèmes d\'Information)',
            details: (
                <a href="/anssi-secnum.pdf" target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                    Voir l'attestation
                </a>
            ),
        },
        {
            title: 'Profil TryHackMe',
            text: 'Plateforme de hacking éthique et de CTF',
            details: <VerifyBtn href="https://tryhackme.com/p/Dami-lowdev" label="Voir le profil" />,
        },
    ];

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
                                                <p>{scard.details1}</p>
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
                                    <p>{hcard.text}</p>
                                    {hcard.details}
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
