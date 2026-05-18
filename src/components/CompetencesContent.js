import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import "./CompetencesContentsStyles.css";

const CompetencesContent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const handleDetailsClick = (title) => {
        setSelectedCard(title);
        setModalOpen(true);
    };

    const [experiences] = useState([
        {
            title: 'GlobalID | Lausanne, Suisse',
            text: 'Pentester — Audit sécurité outil biométrique (Août 2025 - Octobre 2025)',
            details1: '- Réalisation d\'un White-box pentest sur le Venoscanner',
            details2: '- Identification des vulnérabilités (failles applicatives, logs sensibles), scénarios d\'attaques (DOS, Fuzzing API, MITM), rédaction d\'un rapport de risques avec POC et recommandations correctives',
        },
        {
            title: 'ADECCO.IESEG | Paris, France',
            text: 'Intérimaire — Technicien informatique (Juillet 2023 - Août 2023)',
            details1: '- Déploiement et mise en marche de 150 postes informatiques sur le campus universitaire',
            details2: '- Installation, configuration et assignation des systèmes d\'exploitation — assistance technique — collaboration avec une équipe de cinq techniciens',
        },
    ]);

    const [softskills] = useState([
        { title: 'Autonomie', text: 'Capacité à mener des missions de manière indépendante, comme lors du pentest chez GlobalID.' },
        { title: 'Apprentissage continu', text: 'Veille active sur la cybersécurité (DGSI, HackTheNews, LinkedIn), certifications régulières.' },
        { title: 'Bonne communication', text: 'Rédaction de rapports techniques, échanges avec des équipes pluriculturelles en France, Suisse et Allemagne.' },
        { title: 'Gestion du stress', text: 'Compétence développée lors des missions en environnement contraint et des projets académiques en délai serré.' },
        { title: 'Esprit d\'équipe', text: 'Collaboration avec une équipe de cinq techniciens chez ADECCO, projets agiles à l\'ESAIP.' },
    ]);

    const [techskills] = useState([
        { title: 'Protocoles & Analyse réseau', text: 'TCP/IP, HTTP, Wireshark, Nmap, Nessus, Kali Linux' },
        { title: 'Virtualisation & Cloud', text: 'VMware, Hyper-V, Azure' },
        { title: 'Pare-feux & Commutateurs', text: 'Cisco, Fortinet, pfSense' },
        { title: 'Langages & Scripting', text: 'Java, JavaScript, PowerShell, MongoDB, SQL, HTML/CSS, Android, Node.js' },
        { title: 'Gestion de projet', text: 'Git, Trello' },
    ]);

    return (
        <div>
            <section>
                <div className="container">

                    <div className='textleft'><h1>Expériences Professionnelles</h1></div>

                    <div className="cards">
                        <div className='softskills'>
                            {experiences.map((scard, i) => (
                                <div key={i} className="card">
                                    <h3>{scard.title}</h3>
                                    <p>
                                        {scard.text}
                                        <button className='btn' onClick={() => handleDetailsClick(scard.title)}>
                                            Détails
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
                            ))}
                        </div>

                        <div className='hardskills'>
                            <div className='textleft'><h1>Compétences Humaines</h1></div>
                            {softskills.map((hcard, i) => (
                                <div key={i} className="card">
                                    <h3>{hcard.title}</h3>
                                    <p>{hcard.text}</p>
                                </div>
                            ))}

                            <div className='textleftsub'><h1>Compétences Techniques</h1></div>
                            {techskills.map((tcard, i) => (
                                <div key={i} className="card">
                                    <h3>{tcard.title}</h3>
                                    <p>{tcard.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CompetencesContent;
