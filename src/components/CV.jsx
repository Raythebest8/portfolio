import React from 'react';
import { Link } from 'react-router-dom';
import './CV.css';

const CV = () => {
  return (
    <section className="cv-page">
      <div className="cv-download-header">
        <Link to="/" className="back-btn">← Retour</Link>
        <button onClick={() => window.print()} className="print-btn">
          Télécharger en PDF <span>↓</span>
        </button>
      </div>

      <div className="cv-paper animate-fade">
        {/* EN-TÊTE DU CV */}
        <header className="cv-header">
          <div className="header-info">
            <h1>Raymond <span>KOKODOKO</span></h1>
            <p className="job-title">Développeur Web et Mobile / Expert CMS / Design UX/UI</p>
            <p className="job-description">
              Passionné par la création de solutions numériques innovantes, je combine mon expertise technique
              et une vision stratégique issue de mon parcours en économie pour concevoir des expériences utilisateurs
              performantes et optimisées.
            </p>
          </div>
          <div className="header-contact">
            <p> Lomé, Togo</p>
            <p> kokodokoraymond@gmail.com</p>
            <p> +228 96 18 61 06 / 71 01 96 94</p>
            <p> github.com/Raythebest8</p>
            <p> linkedin.com/in/raymond-kokodoko</p>
          </div>
        </header>

        <div className="cv-content">
          {/* COLONNE GAUCHE */}
          <aside className="cv-sidebar">
            <section className="sidebar-section">
              <h3 className="section-title">PERMIS</h3>
              <p>Permis de conduire : <strong>Catégorie B</strong> (en cours)</p>
            </section>

            <section className="sidebar-section">
              <h3 className="section-title">Compétences</h3>
              <ul>
                <li><strong>Front:</strong> React, JavaScript, HTML/CSS</li>
                <li><strong>Back:</strong> Laravel, PHP, MySQL</li>
                <li><strong>CMS:</strong> WordPress (Expertise), Prestashop</li>
                <li><strong>Outils:</strong> Git, Figma, Docker</li>
              </ul>
            </section>

            <section className="sidebar-section">
              <h3 className="section-title">Langues</h3>
              <p><strong>Français :</strong> Courant / Maternel</p>
              <p><strong>Anglais :</strong> Niveau B2 (Intermédiaire Avancé)</p>
            </section>

            <section className="sidebar-section">
              <h3 className="section-title">Soft Skills</h3>
              <p>Analyse Stratégique</p>
              <p>Esprit d'équipe</p>
              <p>Résolution de problèmes complexes</p>
              <p>Adaptabilité rapide</p>
            </section>

            <section className="sidebar-section">
              <h3 className="section-title">Centre d'intérêt</h3>
              <p> Football & Sport</p>
              <p> Lecture</p>
              <p> Cinéma & Animation</p>
              <p> Jeux de stratégie</p>
            </section>
          </aside>

          {/* COLONNE DROITE */}
          <main className="cv-main">
            <section className="main-section">
              <h3 className="section-title">Expériences & Projets Clés</h3>
              <div className="experience">

                {/* 1. PROJET DÉVELOPPEMENT (SaaS / React) */}
                <div className="exp-item">
                  <h4>Développeur Web - Freelance (Dashboard SaaS)</h4>
                  <span className="date">2024 - Présent</span>
                  <p>
                    Conception d'une interface de gestion dynamique en <strong>React.js</strong>.
                    Optimisation des performances front-end et consommation d'APIs REST pour l'affichage de statistiques en temps réel.
                  </p>
                </div>

                {/* 2. PROJET DÉVELOPPEMENT (Backend / Laravel) */}
                <div className="exp-item">
                  <h4>Plateforme Procredi - Développeur Full-Stack</h4>
                  <span className="date">6 mois (Projet Fil Rouge)</span>
                  <p>
                    Développement complet d'une solution de gestion de micro-prêts avec <strong>Laravel & MySQL</strong>.
                    Architecture de la base de données, sécurisation des transactions et gestion multi-rôles (Admin, Agent, Client).
                  </p>
                </div>

                {/* 3. PROJET CMS (WordPress / E-commerce) */}
                <div className="exp-item">
                  <h4>Expert CMS - Création de Plateformes E-commerce</h4>
                  <span className="date">2023 - 2024</span>
                  <p>
                    Déploiement de boutiques en ligne sous <strong>WordPress & WooCommerce</strong>.
                    Personnalisation de thèmes (Elementor/Divi), optimisation SEO technique et configuration de passerelles de paiement locales.
                  </p>
                </div>

                {/* 4. PROJET DESIGN (UX/UI) */}
                <div className="exp-item">
                  <h4>UI/UX Designer - Refonte d'Identité Numérique</h4>
                  <span className="date">2023</span>
                  <p>
                    Conception de maquettes haute fidélité sous <strong>Figma</strong>.
                    Création de wireframes, prototypage interactif et élaboration de chartes graphiques modernes centrées sur l'expérience utilisateur (User-First).
                  </p>
                </div>

              </div>
            </section>

            <section className="main-section">
              <h3 className="section-title">Formation</h3>
              <div className="education">
                <div className="edu-item">
                  <h4>Formation en Informatique de Base</h4>
                  <p>
                    Maîtrise de l'environnement Windows, maintenance logicielle et
                    exploitation avancée de la suite bureautique (Microsoft Office).
                    Bases de l'architecture des ordinateurs et des réseaux.
                  </p>
                  <span className="date-edu">2023</span>
                </div>
                <div className="edu-item">
                  <h4>Formation En referent digital et  Developement </h4>
                  <p>Certification intensive en réferent digital et  développement web & mobile </p>
                  <span className="date-edu">Obtenu en 2025</span>
                </div>
                <div className="edu-item">
                  <h4>Licence en Analyse et Politique Économiques</h4>
                  <p>Université de Lomé - Spécialité Analyse et Economique</p>
                  <span className="date-edu">En cours</span>
                </div>

              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default CV;