import React from 'react';
import "./LepContentStyles.css";

const associations = [
    {
        name: 'Bureau des Internationaux (BDI)',
        subtitle: 'ESAIP Angers · Membre actif · 2023 – 2024',
        sections: [
            {
                icon: '🏛',
                title: 'Présentation de l\'association',
                content: 'Le Bureau des Internationaux (BDI) de l\'ESAIP est une association étudiante dont la mission est de faciliter l\'intégration des étudiants étrangers et de favoriser les échanges interculturels au sein de l\'école. Elle agit comme un pont entre les différentes nationalités représentées sur le campus, en créant des espaces de rencontre, de partage et de découverte mutuelle.',
            },
            {
                icon: '👤',
                title: 'Mon rôle et mes missions',
                content: 'En tant que membre actif du BDI, j\'ai participé à la conception et à l\'organisation d\'événements fédérateurs. Ma principale contribution a été l\'organisation de la Journée Interculturelle, un événement réunissant des stands de représentation des cultures du monde, des animations et des échanges entre étudiants de différentes nationalités. J\'ai été impliqué dans la coordination logistique, la communication et la mobilisation des participants.',
            },
            {
                icon: '💡',
                title: 'Ce que j\'ai appris',
                content: 'Cette expérience m\'a permis de développer des compétences clés en gestion de projet événementiel : planification, coordination d\'équipe, gestion des imprévus et sens des responsabilités. J\'ai également renforcé mes aptitudes relationnelles et ma capacité à travailler dans un environnement multiculturel — un atout majeur dans tout contexte professionnel international.',
            },
        ],
    },
    {
        name: 'ADÉCA — Association des Étudiants Camerounais à Angers',
        subtitle: 'Membre actif · Pôle logistique · 2025 – présent',
        sections: [
            {
                icon: '🏛',
                title: 'Présentation de l\'association',
                content: 'L\'Association des Étudiants Camerounais à Angers (ADÉCA) est une association à vocation sociale, culturelle et solidaire. Elle accompagne les étudiants camerounais dans leur intégration à Angers, tisse des liens de solidarité et promeut la culture camerounaise en France. Elle organise des assemblées générales, événements conviviaux, sorties culturelles et actions caritatives — notamment en partenariat avec l\'Association Dames de Cœur.',
            },
            {
                icon: '👤',
                title: 'Mon rôle et mes missions',
                content: 'Rattaché au pôle logistique, j\'interviens dans la préparation et la mise en œuvre des événements de l\'association. J\'ai contribué à l\'organisation des Assemblées Générales et à des actions caritatives telles que la distribution de packs alimentaires et d\'hygiène au Stade Paul Robin de Belle Beille, en partenariat avec l\'Association Dames de Cœur. Mon rôle consiste à anticiper les besoins matériels, coordonner les bénévoles et assurer le bon déroulement de chaque événement.',
            },
            {
                icon: '💡',
                title: 'Ce que j\'ai appris',
                content: 'Cette expérience m\'a appris à gérer simultanément des contraintes de temps, de budget et de ressources humaines — des compétences directement liées aux métiers de l\'ingénierie. La participation à des actions caritatives a renforcé mon sens de l\'engagement citoyen et ma capacité à travailler en partenariat avec des structures extérieures. J\'ai développé ma rigueur, mon sens de l\'organisation et mon aptitude à fédérer une équipe autour d\'un objectif commun.',
            },
        ],
    },
];

const LepContent = () => {
    return (
        <div>
            <section>
                <div className="lep-container">
                    <div className="lep-title-block">
                        <h1>Vie Associative</h1>
                    </div>
                    <p className="lep-intro">
                        Parallèlement à ma formation d'ingénieur, je m'engage activement dans la vie associative —
                        un espace où je développe des compétences humaines et organisationnelles essentielles à ma future carrière.
                    </p>
                    {associations.map((asso, i) => (
                        <div key={i} className="lep-card">
                            <div className="lep-card-header">
                                <h2>{asso.name}</h2>
                                <span className="lep-badge">{asso.subtitle}</span>
                            </div>
                            <div className="lep-sections">
                                {asso.sections.map((sec, j) => (
                                    <div key={j} className="lep-section">
                                        <h3>{sec.icon} {sec.title}</h3>
                                        <p>{sec.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LepContent;
