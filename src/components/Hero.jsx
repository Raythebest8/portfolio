import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaLaravel, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-subtitle">Bonjour, je suis</h2>
        <h1 className="hero-title">Ray<span>Dev</span></h1>

        <h3 className="hero-job">
          <Typewriter
            options={{
              strings: ['Développeur web', 'Designer UI/UX', 'Développeur Mobile', 'CMS (Wordpress)'],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        <p className="hero-description">
          je suis développeur fullstack en pleine évolution, passionné par l'écriture de code maintenable et élégant. 
          J'excelle dans la création d'expériences numériques modernes, intuitives et centrées sur l'utilisateur.
        </p>

        <div className="hero-socials">
          <a href="https://github.com/RayTheBest8" className="social-icon"><FaGithub /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div>

        <div className="hero-btns">
          <a href="#projet" className="btn-primary">Voir mes projets</a>
          <Link to="/CV" className="btn-secondary">Voir mon CV</Link>        </div>
      </div>

      <div className="hero-image">
        {/* Style PC : Le Blob (caché sur mobile) */}
        <div className="blob pc-only"></div>

        {/* Style Mobile : Badge et Éléments interactifs (cachés sur PC) */}
        <div className="availability-badge mobile-only">
          <span className="pulse-dot"></span>
          Disponible
        </div>

        <div className="mobile-interactive-elements mobile-only">
          <div className="center-circle">
            <span className="ray-text">RAY</span>
          </div>
          <div className="orbiting-icons">
            <div className="icon-item i1"><FaGithub /></div>
            <div className="icon-item i2"><FaReact /></div>
            <div className="icon-item i3"><FaNodeJs /></div>
            <div className="icon-item i4"><FaLaravel /></div>
          </div>
        </div>

        {/* L'image qui s'adapte aux deux styles */}
        <img
          src="./assets/images/rayprortrait.jpg"
          alt="RayDev Profile"
          className="main-profile-img"
        />
      </div>
    </section>
  );
};

export default Hero;