


import React, { useState } from 'react';
import './Projets.css';

const Projets = () => {
  const listProjets = [
    {
      id: 1,
      titre: "Procredi",
      desc: "Développement d'une plateforme en ligne complète pour la gestion et la demande de prêts. Le système permet aux utilisateurs de soumettre facilement leurs demandes, de suivre l'avancement de leurs dossiers et d'accéder à des outils de gestion sécurisés. L'interface intuitive optimise le traitement des prêts, améliore la transparence et facilite la relation entre prêteurs et emprunteurs.",
      img: ["assets/images/dashboard_admin2.png"] ,
      category: "code", 
      tags: ["Laravel", "MySQL" ,"git" ,"boostrap", "Tailwins",],
      type: "Fil rouge",
      url: "https://github.com/Raythebest8/MicroSass_By_Ray" 
    },
     {
      id: 7,
      titre: "Gitmaster",
      desc: "GitMaster est une plateforme éducative innovante conçue pour rendre l'apprentissage de Git et GitHub accessible à tous les développeurs, quel que soit leur niveau. Notre approche pédagogique privilégie l'apprentissage visuel et interactif, permettant aux utilisateurs de maîtriser Git directement depuis l'interface de VS Code, sans avoir besoin de la ligne de commande.",
      img: ["assets/images/gitmaster.png"],
      category: "code", 
      tags: ["html", "css" ,"javacript",],
      type: "équipe",
      url: "https://github.com/RayTheBest08/GitMaster" 
    },
    {
      id: 6,
      titre: "Gescadmec",
      desc: "Développement d'une plateforme digitale dédiée à la gestion des étudiants, permettant de centraliser les inscriptions, le suivi académique, la gestion des notes et la communication entre l'administration, les enseignants et les étudiants. L'outil vise à simplifier les processus, améliorer l'organisation et offrir une expérience utilisateur moderne et efficace.",
      img: ["assets/images/.png"],
      category: "code", 
      tags: ["Laravel", "MySQL" ,"git" ,"vite",],
      type: "solo",
      url: "https://github.com/Raythebest8/Project_GESCADEMEC" 
    },
   

    {
      id: 2,
      titre: "Ayoub Décor",
      desc: "Création d'un site vitrine élégant pour Ayoub Décor, mettant en valeur des réalisations de décoration intérieure et extérieure. Le site offre une galerie immersive, présente les services sur-mesure et facilite la prise de contact, afin d'attirer de nouveaux clients et de renforcer la notoriété de l'entreprise",
      img: "assets/images/ayoubdecor.png",
      category: "cms",
      tags: ["WordPress", "PHP" ,"html" ,"css" ,"javascript"],
      type: "équipe",
      url: "https://decor.marineintelligency-gestion.com" 
     
    },
    {
      id: 5,
      titre: "site vitrine longrich",
      desc: "Conception d'un site vitrine moderne et attractif pour valoriser les produits de santé de l'entreprise, renforcer la confiance des clients et faciliter la prise de contact. Le site met en avant l'expertise, la qualité des produits et l'engagement envers le bien-être, tout en offrant une navigation fluide et une expérience utilisateur optimale",
      img: "assets/images/site_longrich.png",
      category: "cms",
      tags: ["WordPress", "PHP" ,"html" ,"css" ,"javascript"],
      type: "Personnel",
      url: "https://longrichbusiness.lovestoblog.com" 
    },

    {
      id: 3,
      titre: "SaaS Dashboard",
      desc: "Développement d'un tableau de bord SaaS moderne et intuitif, conçu pour optimiser la gestion des microcrédits. L'interface interactive permet un suivi en temps réel des indicateurs clés, une visualisation claire des données financières et une prise de décision facilitée pour les utilisateurs, tout en garantissant sécurité et performance",
      img: "/assets/images/maquette_saas_dashboard.png", // Image ajoutée pour le design
      category: "design",
      tags: ["Figma", "UI/UX"],
      type: "solo",
      url: "https://www.figma.com/design/JYXboZJMbgqRBgpAM0cbWS/Microcredit?node-id=0-1&t=bdCokm5GARG0Dpbr-1" 
    },
 

    {
      id: 4,
      titre: "site d'urgence sapeurs pompiers",
      resultat: "15ème place sur 50 participants",
      desc: "Réalisation d’un site web dédié à une caserne de sapeurs-pompiers, intégrant un système de gestion des interventions. La plateforme valorise l’engagement des équipes, facilite la coordination des missions et offre aux citoyens un accès rapide aux informations et services d’urgence, le tout dans une interface moderne et intuitive",
      img: "/assets/images/sos_maquette.png", // Image ajoutée pour le design
      category: "design",
      tags: ["Figma", "UI/UX"],
      type: "Challenge",
      url: "https://www.figma.com/proto/v6iv1i9bGVEpeB8AGLFxnY/URGENCE?page-id=0%3A1&node-id=1-3&p=f&viewport=36%2C201%2C0.06&t=vIsck6rR1mBiARGn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1" 
    }
  ];

  const [filter, setFilter] = useState('all');

  // Mappage des noms affichés vers les catégories réelles
  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'code', label: 'Développement' },
    { id: 'cms', label: 'CMS (WordPress)' },
    { id: 'design', label: 'Design' }
  ];

  const filteredData = filter === 'all' 
    ? listProjets 
    : listProjets.filter(p => p.category === filter);

  return (
    <div className="projets-wrapper">
      <div className="project-header">
        {/* <span className="project-subtitle">Mes Projets</span> */}
        <h2 className="project-main-title">Projets <span>Récents</span></h2>
      </div>

      {/* Barre de Filtres */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille de Projets */}
      <div className="project-grid-container">
        {filteredData.map((projet) => (
          <div key={projet.id} className="project-card glass-morphism animate-fade">
            <div className="project-img-wrapper">
              <span className={`badge-type ${projet.type === 'équipe' ? 'is-team' : 'is-solo'}`}>
                {projet.type}
              </span>
              
              <img src={projet.img} alt={projet.titre} />
              
              <div className="project-hover-overlay">
                <a 
                  href={projet.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-btn"
                >
                  Voir le projet
                </a>
              </div>
            </div>

            <div className="project-details">
              <h3>{projet.titre}</h3>
              {projet.resultat && (
                <div className="project-resultat">{projet.resultat}</div>
              )}
              <p>{projet.desc}</p>
              <div className="tech-tags">
                {projet.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;