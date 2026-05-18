import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import "./FormationContentsStyles.css";

import LogoESAIP      from "../assets/logo_ESAIP_INGENIEUR_RVB_2016-250.jpg";
import LogoReutlingen from "../assets/Hochschule reutlingen logo.jpg";

const formations = [
    {
        title: 'ESAIP | Angers, France',
        logo: LogoESAIP,
        text: 'Cycle Ingénieur | Majeur Cybersécurité (Septembre 2022 - Septembre 2026)',
        details: [
            {
                subtitle: 'Compétences techniques acquises',
                content: 'Cryptographie et PKI, réseaux informatiques (TCP/IP, routage, VPN), Linux OS et Windows OS, Active Directory & GPO, sécurité des systèmes d\'information, analyse de malwares, tests d\'intrusion applicatif et réseau.',
            },
            {
                subtitle: 'Compétences humaines développées',
                content: 'Gestion de projet (méthodes Agile/Scrum), initiation à la recherche scientifique, communication technique et vulgarisation, travail en équipe multiculturelle, présentation devant jury professionnel.',
            },
        ],
    },
    {
        title: 'Hochschule Reutlingen | Reutlingen, Allemagne',
        logo: LogoReutlingen,
        text: 'Computer Science — Séjour ERASMUS (Mars 2024 - Juillet 2024)',
        details: [
            {
                subtitle: 'Compétences techniques acquises',
                content: 'Cloud computing (AWS/Azure), génie logiciel, architecture microservices, développement d\'applications distribuées en environnement anglophone.',
            },
            {
                subtitle: 'Compétences humaines développées',
                content: 'Adaptation à un environnement international, business consulting, gestion de projet interculturelle, ouverture à différentes approches pédagogiques européennes.',
            },
        ],
    },
];

const FormationContents = () => {
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
                    <div className="textleft"><h1>Formation Académique</h1></div>
                    <div style={{ maxWidth: '720px', width: '100%' }}>
                        {formations.map((f, i) => (
                            <div key={i} className="card">
                                <div className="card-header">
                                    {f.logo && (
                                        <img src={f.logo} alt={f.title} className="institution-logo" />
                                    )}
                                    <h3>{f.title}</h3>
                                </div>
                                <p>
                                    {f.text}
                                    <button className="btn" onClick={() => handleDetailsClick(f.title)}>
                                        Détails
                                    </button>
                                </p>
                                {modalOpen && selectedCard === f.title && (
                                    <div className="modal">
                                        {f.details.map((d, j) => (
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

export default FormationContents;
