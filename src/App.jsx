import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';

function App() {
  return (
    <Router>
      <div className="App">
        {/* On retire Navbar et TechBackground d'ici pour les mettre seulement dans la Route Accueil */}

        <Routes>
          {/* ROUTE PRINCIPALE : On regroupe tout le design du portfolio ici */}
          <Route path="/" element={
            <>
              <TechBackground />
              <Navbar />
              <main className="main-content">
                <Hero />

                {/* Section À Propos */}
                <section id="apropo" className="about-section">
                  <div className="about-main-container">
                    <div className="about-visual-box">
                      <div className="about-image-wrapper">
                        <img src="./assets/images/raythebest.jpg" alt="RayDev Portrait" className="about-profile-img" />
                        <div className="about-experience-badge">
                          <span className="about-badge-number">+1</span>
                          <span className="about-badge-text">An d'Expérience</span>
                        </div>
                      </div>
                    </div>

                    <div className="about-text-content">
                      <div className="about-header-group">
                        <span className="about-subtitle-text">Mon Parcours</span>
                        <h2 className="about-main-title">À Propos De <span>Moi</span></h2>
                      </div>
                      <p className="about-main-description">
                        Je suis un développeur passionné, toujours curieux d'apprendre et de relever de nouveaux défis.
                        Mon objectif est de créer des solutions numériques innovantes et efficaces, tout en mettant l'accent sur l'expérience utilisateur et la qualité du code.
                      </p>
                      <div className="about-cards-grid">
                        <div className="about-info-card about-glass-effect">
                          <img src="./assets/images/la-satisfaction.png" alt="Icon" className="about-card-icon" />
                          <h3>Développement</h3>
                          <p>Solutions Web & Interfaces Modernes</p>
                        </div>
                        <div className="about-info-card about-glass-effect">
                          <img src="./assets/images/diplome.png" alt="Icon" className="about-card-icon" />
                          <h3>Formation</h3>
                          <p>Bac+2 en Référent Digital et Développement web</p>
                          <p>Licence Informatique et Économie en cours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section Compétences (Ici tu remettras ton code complet des skills) */}
                <section id="competence" className="skills-section">
                  <div className="skills-header">
                    <h2 className="skills-main-title">Mes <span>Compétences</span></h2>
                  </div>

                  <div class="skills-wrapper">
                    <div class="hard-skills-box">
                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar html" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-html5"></i>
                          <span className="skill-percent">80%</span>
                        </div>
                        <p>HTML5</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar css" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-css3-alt"></i>
                          <span className="skill-percent">70%</span>
                        </div>
                        <p>CSS3</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar js" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-js-square"></i>
                          <span className="skill-percent">60%</span>
                        </div>
                        <p>JavaScript</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar react" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-react"></i>
                          <span className="skill-percent">60%</span>
                        </div>
                        <p>React</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar laravel" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-laravel"></i>
                          <span className="skill-percent">70%</span>
                        </div>
                        <p>Laravel</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar wordpress" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-wordpress"></i>
                          <span className="skill-percent">80%</span>
                        </div>
                        <p>WordPress</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar php" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-php"></i>
                          <span className="skill-percent">70%</span>
                        </div>
                        <p>PHP</p>
                      </div>

                      <div className="skill-item">
                        <div className="progress-container">
                          <svg className="progress-svg" viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle className="progress-bar mysql" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <i className="fab fa-mysql"></i>
                          <span className="skill-percent">80%</span>
                        </div>
                        <p>MySQL</p>
                      </div>

                    </div>

                    <div className="soft-skills-box">
                      <h3 className="soft-title">Soft Skills</h3>
                      <ul className="soft-list">
                        <li><span className="bullet"></span> Résolution de problèmes complexes</li>
                        <li><span className="bullet"></span> Esprit d'équipe & Collaboration</li>
                        <li><span className="bullet"></span> Adaptabilité & Curiosité</li>
                        <li><span className="bullet"></span> Communication & Empathie</li>
                        <li><span className="bullet"></span> Analyse Stratégique (Économie)</li>
                      </ul>
                    </div>

                  </div>
                </section>

                <section id="projet">
                  <div className="project-grid">
                    <Projets />
                  </div>
                </section>

                <section id="contact">
                  <h1 className="contact-titles">Contactez-<span>Moi</span></h1>
                  <Contact />
                </section>
                <Footer/>
              </main>
            </>
          } />

          {/* ROUTE CV : Ici, il n'y a ni Navbar, ni TechBackground. Page 100% vide et blanche. */}
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;