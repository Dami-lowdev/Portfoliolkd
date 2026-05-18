import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import "./CompetencesContentsStyles.css";

const experiences = [
    {
        title: 'GlobalID | Lausanne, Suisse',
        text: 'Pentester — Audit sécurité outil biométrique (Août 2025 - Octobre 2025)',
        details1: '- Réalisation d\'un White-box pentest sur le Venoscanner',
        details2: '- Identification des vulnérabilités (failles applicatives, logs sensibles), scénarios d\'attaques (DOS, Fuzzing API, MITM), rédaction d\'un rapport de risques avec POC et recommandations correctives.',
    },
    {
        title: 'ADECCO.IESEG | Paris, France',
        text: 'Intérimaire — Technicien informatique (Juillet 2023 - Août 2023)',
        details1: '- Déploiement et mise en marche de 150 postes informatiques sur le campus universitaire',
        details2: '- Installation, configuration et assignation des systèmes d\'exploitation — assistance technique — collaboration avec une équipe de cinq techniciens.',
    },
];

const techskills = [
    { title: 'Protocoles & Analyse réseau', text: 'TCP/IP, HTTP, Wireshark, Nmap, Nessus, Kali Linux' },
    { title: 'Virtualisation & Cloud', text: 'VMware, Hyper-V, Azure' },
    { title: 'Pare-feux & Commutateurs', text: 'Cisco, Fortinet, pfSense' },
    { title: 'Langages & Scripting', text: 'Java, JavaScript, PowerShell, MongoDB, SQL, HTML/CSS, Android, Node.js' },
    { title: 'Gestion de projet', text: 'Git, Trello' },
];

const softskills = [
    { title: 'Autonomie', text: 'Capacité à mener des missions de manière indépendante, comme lors du pentest chez GlobalID.' },
    { title: 'Apprentissage continu', text: 'Veille active sur la cybersécurité (DGSI, HackTheNews, LinkedIn), certifications régulières.' },
    { title: 'Bonne communication', text: 'Rédaction de rapports techniques, échanges avec des équipes pluriculturelles en France, Suisse et Allemagne.' },
    { title: 'Gestion du stress', text: 'Missions en environnement contraint, projets académiques sous délai serré.' },
    { title: 'Esprit d\'équipe', text: 'Collaboration avec une équipe de cinq techniciens chez ADECCO, projets agiles à l\'ESAIP.' },
];

const transversales = [
    { title: 'Langues', text: 'Français (langue maternelle) · Anglais niveau avancé (TOEIC 945/990) · Allemand niveau élémentaire' },
    { title: 'Mobilité internationale', text: 'Parcours entre le Cameroun, la France (Angers), l\'Allemagne (Reutlingen) et la Suisse (Lausanne).' },
    { title: 'Veille cybersécurité', text: 'Suivi régulier de l\'actualité sécurité : DGSI, HackTheNews, LinkedIn, TryHackMe.' },
    { title: 'Bénévolat', text: 'Distribution de denrées alimentaires et d\'hygiène aux Restos du Cœur.' },
];

const CompetencesContent = () => {
    const [activeTab, setActiveTab] = useState('experiences');
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

                    <div className="tabs">
                        <button
                            className={`tab-btn ${activeTab === 'experiences' ? 'active' : ''}`}
                            onClick={() => setActiveTab('experiences')}
                        >
                            Expériences
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'competences' ? 'active' : ''}`}
                            onClick={() => setActiveTab('competences')}
                        >
                            Compétences
                        </button>
                    </div>

                    {activeTab === 'experiences' && (
                        <div className="cards">
                            <div className="softskills" style={{ flex: '1 1 100%' }}>
                                {experiences.map((exp, i) => (
                                    <div key={i} className="card">
                                        <h3>{exp.title}</h3>
                                        <p>
                                            {exp.text}
                                            <button className='btn' onClick={() => handleDetailsClick(exp.title)}>
                                                Détails
                                            </button>
                                        </p>
                                        {modalOpen && selectedCard === exp.title && (
                                            <div className="modal">
                                                <p>{exp.details1}</p>
                                                <p>{exp.details2}</p>
                                                <button className="close-btn" onClick={() => setModalOpen(false)}>
                                                    <FaTimes size={20} style={{ color: "blue" }} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'competences' && (
                        <div className="cards">
                            <div className="softskills">
                                <div className="textleft"><h1>Compétences Techniques</h1></div>
                                {techskills.map((skill, i) => (
                                    <div key={i} className="card">
                                        <h3>{skill.title}</h3>
                                        <p>{skill.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="hardskills">
                                <div className="textleft"><h1>Compétences Humaines</h1></div>
                                {softskills.map((skill, i) => (
                                    <div key={i} className="card">
                                        <h3>{skill.title}</h3>
                                        <p>{skill.text}</p>
                                    </div>
                                ))}

                                <div className="textleftsub"><h1>Compétences Transversales</h1></div>
                                {transversales.map((skill, i) => (
                                    <div key={i} className="card">
                                        <h3>{skill.title}</h3>
                                        <p>{skill.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
};

export default CompetencesContent;
