import pro1 from "../assets/tultourGuidebanner.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/schoolManagement.jpg";
import pro6 from "../assets/project1.png";

import imgForensic from "../assets/forensicimage.jpg";
import imgPentest  from "../assets/pentestimage.jpg";
import imgAudit    from "../assets/auditsiimage.jpg";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Campus Navigation",
    text: "Amélioration de la navigation sur le campus pour les étudiants internationaux, locaux et handicapés. Outils : Moodle, suite Microsoft, Miro, Google Forms.",
    view: "/project",
    source: "https://github.com/Dami-lowdev",
    category: "Academique",
  },
  {
    imgsrc: pro2,
    title: "LMS / Course Website Design",
    text: "Conception d'un site de cours en ligne avec gestion de contenu et parcours d'apprentissage structurés.",
    view: "https://www.youtube.com/watch?v=P8YuWEkTeuE",
    source: "https://github.com/Dami-lowdev",
    category: "Academique",
  },
  {
    imgsrc: pro3,
    title: "Student Management",
    text: "Plateforme sécurisée de gestion d'étudiants développée avec Angular et Spring Boot Security. Langages : Java, HTML/CSS.",
    view: "https://github.com/Dami-lowdev/Interactive-Web-Apk-Project",
    source: "https://github.com/Dami-lowdev/Interactive-Web-Apk-Project",
    category: "Academique",
  },
  {
    imgsrc: imgForensic,
    title: "Analyse Forensique",
    text: "Investigation numérique sur un système compromis : collecte de preuves, analyse de logs, reconstruction de la chronologie d'une attaque.",
    view: "#",
    source: "https://github.com/Dami-lowdev",
    category: "Forensics",
  },
  {
    imgsrc: imgForensic,
    title: "CTF - Challenge Forensics",
    text: "Participation à des challenges Capture The Flag axés sur l'analyse mémoire, les fichiers corrompus et la stéganographie.",
    view: "#",
    source: "https://github.com/Dami-lowdev",
    category: "Forensics",
  },
  {
    imgsrc: pro6,
    title: "Pipeline CI/CD Sécurisé",
    text: "Mise en place d'un pipeline DevSecOps intégrant des outils d'analyse statique (SAST), de détection de secrets et de tests de sécurité automatisés.",
    view: "#",
    source: "https://github.com/Dami-lowdev",
    category: "DevSecOps",
  },
  {
    imgsrc: imgPentest,
    title: "Test d'Intrusion Web",
    text: "Réalisation d'un pentest sur une application web : reconnaissance, exploitation de vulnérabilités (XSS, SQLi), rapport de remédiation.",
    view: "#",
    source: "https://github.com/Dami-lowdev",
    category: "Pentest",
  },
  {
    imgsrc: imgAudit,
    title: "Audit Réseau",
    text: "Audit de sécurité d'un réseau local : scan de ports, identification de services vulnérables, recommandations de durcissement.",
    view: "#",
    source: "https://github.com/Dami-lowdev",
    category: "Pentest",
  },
];

export default ProjectCardData;
