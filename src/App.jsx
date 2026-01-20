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
                        <img src="./assets/images/Roronoa-Zoro-Wanted-Poster-7-scaled.webp" alt="RayDev Portrait" className="about-profile-img" />
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
                        Passionné par la synergie entre la <strong>technologie</strong> et l'<strong>analyse économique</strong>,
                        je poursuis actuellement un double cursus en Informatique et Économie.
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
                          <p>Licence Informatique et Économie en cours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section Compétences (Ici tu remettras ton code complet des skills) */}
                <section id="competence" class="skills-section">
                  <div class="skills-header">
                    <h2 class="skills-main-title">Expertise <span>Technique</span></h2>
                  </div>

                  <div class="skills-wrapper">

                    <div class="hard-skills-box">
                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar html" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                          <span class="skill-percent">95%</span>
                        </div>
                        <p>HTML5</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar css" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                          <span class="skill-percent">90%</span>
                        </div>
                        <p>CSS3</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar js" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                          <span class="skill-percent">85%</span>
                        </div>
                        <p>JavaScript</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar react" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                          <span class="skill-percent">80%</span>
                        </div>
                        <p>React</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar laravel" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                          <span class="skill-percent">75%</span>
                        </div>
                        <p>Laravel</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar wordpress" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
                          <span class="skill-percent">90%</span>
                        </div>
                        <p>WordPress</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar php" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                          <span class="skill-percent">80%</span>
                        </div>
                        <p>PHP</p>
                      </div>

                      <div class="skill-item">
                        <div class="progress-container">
                          <svg class="progress-svg" viewBox="0 0 100 100">
                            <circle class="progress-bg" cx="50" cy="50" r="45"></circle>
                            <circle class="progress-bar mysql" cx="50" cy="50" r="45"></circle>
                          </svg>
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                          <span class="skill-percent">85%</span>
                        </div>
                        <p>MySQL</p>
                      </div>

                    </div>

                    <div class="soft-skills-box">
                      <h3 class="soft-title">Soft Skills</h3>
                      <ul class="soft-list">
                        <li><span class="bullet"></span> Résolution de problèmes complexes</li>
                        <li><span class="bullet"></span> Esprit d'équipe & Collaboration</li>
                        <li><span class="bullet"></span> Adaptabilité & Curiosité</li>
                        <li><span class="bullet"></span> Communication & Empathie</li>
                        <li><span class="bullet"></span> Analyse Stratégique (Économie)</li>
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
                  <h1 className="contact-titles">Contactez-Moi</h1>
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