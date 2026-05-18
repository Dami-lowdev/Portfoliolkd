import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import "./FormationContentsStyles.css";

import LogoGlobalID from "../assets/global id Logo.jpg";
import LogoIESEG    from "../assets/logo Ieseg.jpg";

const experiences = [
    {
        title: 'GlobalID | Lausanne, Suisse',
        logo: LogoGlobalID,
        text: 'Pentester — Audit sécurité outil biométrique (Août 2025 - Octobre 2025)',
        details: [
            {
                subtitle: 'Mission',
                content: 'Réalisation d\'un White-box pentest sur le Venoscanner : analyse du code source, des flux réseau et des composants embarqués.',
            },
            {
                subtitle: 'Résultats',
                content: 'Identification des vulnérabilités (failles applicatives, logs sensibles exposés), modélisation de scénarios d\'attaques (DoS, Fuzzing API, attaque MITM). Rédaction d\'un rapport de risques complet avec POC et recommandations correctives.',
            },
        ],
    },
    {
        title: 'ADECCO.IESEG | Paris, France',
        logo: LogoIESEG,
        text: 'Intérimaire — Technicien informatique (Juillet 2023 - Août 2023)',
        details: [
            {
                subtitle: 'Mission',
                content: 'Déploiement et mise en marche de 150 postes informatiques sur le campus universitaire de l\'IESEG School of Management.',
            },
            {
                subtitle: 'Environnement de travail',
                content: 'Installation, configuration et assignation des systèmes d\'exploitation Windows — assistance technique aux utilisateurs — collaboration avec une équipe de cinq techniciens en environnement contraint.',
            },
        ],
    },
];

const ExperienceContent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleDetailsClick = (title) => {
        setSelectedCard(title);
        setModalOpen(true);
    };

    return (
        <div>
            <section>
                <div className="container">
                    <div className="textleft"><h1>Expériences Professionnelles</h1></div>
                    <div style={{ maxWidth: '720px', width: '100%' }}>
                        {experiences.map((exp, i) => (
                            <div key={i} className="card">
                                <div className="card-header">
                                    {exp.logo && (
                                        <img src={exp.logo} alt={exp.title} className="institution-logo" />
                                    )}
                                    <h3>{exp.title}</h3>
                                </div>
                                <p>
                                    {exp.text}
                                    <button className="btn" onClick={() => handleDetailsClick(exp.title)}>
                                        Détails
                                    </button>
                                </p>
                                {modalOpen && selectedCard === exp.title && (
                                    <div className="modal">
                                        {exp.details.map((d, j) => (
                                            <div key={j} style={{ marginBottom: '0.8rem' }}>
                                                <strong style={{ color: '#818cf8' }}>{d.subtitle}</strong>
                                                <p style={{ marginTop: '0.3rem' }}>{d.content}</p>
                                            </div>
                                        ))}
                                        <button className="close-btn" onClick={() => setModalOpen(false)}>
                                            <FaTimes size={20} style={{ color: "blue" }} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExperienceContent;
