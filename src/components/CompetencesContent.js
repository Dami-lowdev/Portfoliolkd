import React, { useState } from 'react';
import "./CompetencesContentsStyles.css";

import LogoCisco from "../assets/ciscologo.png";
import LogoAzure from "../assets/AI900logo.png";

const CREDLY_AZURE    = 'https://www.credly.com/badges/8b71f240-660a-4b4c-9361-4f3717b1c74d/public_url';
const CREDLY_FORTINET = 'https://www.credly.com/badges/8b71f240-660a-4b4c-9361-4f3717b1c74d/public_url';
const CREDLY_CCNA     = 'https://www.credly.com/badges/434ba043-e2c1-4601-a6aa-3f370f69c002/public_url';

const VerifyBtn = ({ href, label = 'Vérifier sur Credly' }) => (
    <a href={href} target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
        {label}
    </a>
);

const techskills = [
    { title: 'Protocoles & Analyse réseau', text: 'TCP/IP, HTTP/S, DNS, Wireshark, Nmap, Nessus, Kali Linux' },
    { title: 'Virtualisation & Cloud', text: 'VMware, Hyper-V, Azure, AWS (notions)' },
    { title: 'Pare-feux & Commutateurs', text: 'Cisco IOS, Fortinet FortiGate, pfSense' },
    { title: 'Langages & Scripting', text: 'Java, JavaScript, PowerShell, MongoDB, SQL, HTML/CSS, Android (Kotlin), Node.js' },
    { title: 'Gestion de projet', text: 'Git, Trello, méthodes Agile/Scrum' },
];

const certifications = [
    {
        title: 'Azure AI Fundamentals (AI-900)',
        logo: LogoAzure,
        text: 'Certification délivrée par Microsoft',
        action: <VerifyBtn href={CREDLY_AZURE} />,
    },
    {
        title: 'Fortinet FortiGate 7.4 Operator',
        logo: null,
        text: 'Certification délivrée par Fortinet',
        action: <VerifyBtn href={CREDLY_FORTINET} />,
    },
    {
        title: 'CCNA : Introduction to Networks',
        logo: LogoCisco,
        text: 'Certification délivrée par Cisco',
        action: <VerifyBtn href={CREDLY_CCNA} />,
    },
    {
        title: 'Mooc SecNumacadémie — ANSSI',
        logo: null,
        text: 'Formation cybersécurité délivrée par l\'ANSSI',
        action: (
            <a href="/anssi-secnum.pdf" target="_blank" rel="noreferrer" className="btn" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                Voir l'attestation
            </a>
        ),
    },
    {
        title: 'Profil TryHackMe',
        logo: null,
        text: 'Plateforme de hacking éthique et de CTF',
        action: <VerifyBtn href="https://tryhackme.com/p/Dami-lowdev" label="Voir le profil" />,
    },
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

const filters = ['Techniques', 'Humaines', 'Transverses'];

const CompetencesContent = () => {
    const [activeFilter, setActiveFilter] = useState('Techniques');

    return (
        <div>
            <section>
                <div className="container">
                    <div className="comp-filter-btns">
                        {filters.map(f => (
                            <button
                                key={f}
                                className={`comp-filter-btn ${activeFilter === f ? 'comp-filter-btn-active' : ''}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {activeFilter === 'Techniques' && (
                        <div>
                            <div className="textleft"><h1>Compétences Techniques</h1></div>
                            <div className="comp-grid">
                                {techskills.map((s, i) => (
                                    <div key={i} className="card">
                                        <h3>{s.title}</h3>
                                        <p>{s.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="textleftsub"><h1>Certifications</h1></div>
                            <div className="comp-grid">
                                {certifications.map((c, i) => (
                                    <div key={i} className="card">
                                        {c.logo ? (
                                            <div className="card-header">
                                                <img src={c.logo} alt={c.title} className="institution-logo" />
                                                <h3>{c.title}</h3>
                                            </div>
                                        ) : (
                                            <h3>{c.title}</h3>
                                        )}
                                        <p>{c.text}</p>
                                        {c.action}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeFilter === 'Humaines' && (
                        <div>
                            <div className="textleft"><h1>Compétences Humaines</h1></div>
                            <div className="comp-grid">
                                {softskills.map((s, i) => (
                                    <div key={i} className="card">
                                        <h3>{s.title}</h3>
                                        <p>{s.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeFilter === 'Transverses' && (
                        <div>
                            <div className="textleft"><h1>Compétences Transverses</h1></div>
                            <div className="comp-grid">
                                {transversales.map((s, i) => (
                                    <div key={i} className="card">
                                        <h3>{s.title}</h3>
                                        <p>{s.text}</p>
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
