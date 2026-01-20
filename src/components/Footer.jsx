import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dashboard-footer-line">
      <div className="footer-left">
        <div className="status-badge">
          <span className="dot"></span>
          <span className="status-text">System Active</span>
        </div>
        <div className="footer-separator"></div>
        <p className="copyright">© 2026 RAYMOND KOKODOKO</p>
      </div>

      <div className="footer-right">
        <div className="tech-stack-info">
          <span>React 18.2</span>
          <div className="footer-separator"></div>
          <span>Lomé, TG</span>
        </div>
        <div className="footer-separator"></div>
        <div className="social-links-mini">
          <a href="https://github.com/Raythebest8"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;