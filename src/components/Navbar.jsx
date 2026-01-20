import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Gestion du thème
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('light-theme');
  };

  // Détection du scroll pour changer le style de la barre
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Détection de la section active (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-glass">
        <div className="logo">Ray<span>Dev</span></div>
        
        <ul className={`nav-links ${showMenu ? 'mobile-active' : ''}`}>
          <li>
            <a href="#home" 
               className={activeSection === 'home' ? 'active' : ''} 
               onClick={() => setShowMenu(false)}>Home</a>
          </li>
          <li>
            <a href="#apropo" 
               className={activeSection === 'apropo' ? 'active' : ''} 
               onClick={() => setShowMenu(false)}>À propos</a>
          </li>
          <li>
            <a href="#competence" 
               className={activeSection === 'competence' ? 'active' : ''} 
               onClick={() => setShowMenu(false)}>Compétences</a>
          </li>
          <li>
            <a href="#projet" 
               className={activeSection === 'projet' ? 'active' : ''} 
               onClick={() => setShowMenu(false)}>Projets</a>
          </li>
          <li>
            <a href="#contact" 
               className={`contact-btn ${activeSection === 'contact' ? 'active-contact' : ''}`} 
               onClick={() => setShowMenu(false)}>Contact</a>
          </li>
        </ul>

        <div className="nav-controls">
          {/* <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button> */}
          <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;