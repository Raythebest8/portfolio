import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // On prépare les données pour qu'elles correspondent EXACTEMENT à ton template HTML
    const templateParams = {
      name: e.target.user_name.value,
      message: e.target.message.value,
      user_email: e.target.user_email.value, // Optionnel si tu veux le stocker
      time: new Date().toLocaleString('fr-FR', { 
        day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' 
      })
    };

    // Utilisation de .send au lieu de .sendForm pour un contrôle total des variables
    emailjs.send(
      'service_q1g55wp', 
      'template_d8v78c7', 
      templateParams, 
      'PyxYP75l-NsHloJSL'
    )
    .then(() => {
        setStatus("SUCCESS");
        setLoading(false);
        e.target.reset();
    })
    .catch((error) => {
        console.error("Erreur EmailJS:", error);
        setStatus("ERROR");
        setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* CÔTÉ GAUCHE : TEXTE ET INFOS */}
        <div className="contact-info">
          <h2 className="contact-title">
            Parlons de votre <span>Projet</span>
          </h2>
          <p className="contact-desc">
            Prêt à transformer vos idées en réalité numérique ? 
            Envoyez-moi un message, je réponds généralement sous 24h.
          </p>

          <div className="direct-contact">
            <div className="contact-item">
              <small>EMAIL</small>
              <p>kokodokoraymond@gmail.com</p>
            </div>
            <div className="contact-item">
              <small>LOCALISATION</small>
              <p>Lomé, Togo</p>
            </div>
          </div>
        </div>

        {/* CÔTÉ DROIT : FORMULAIRE */}
        <div className="contact-form-box">
          <form onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" name="user_name" placeholder="NOM COMPLET" required />
            </div>
            
            <div className="input-group">
              <input type="email" name="user_email" placeholder="VOTRE EMAIL" required />
            </div>
            
            <div className="input-group">
              <input type="text" name="subject" placeholder="OBJET" required />
            </div>
            
            <div className="input-group">
              <textarea name="message" rows="4" placeholder="VOTRE MESSAGE..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <div className="loader"></div>
              ) : (
                <>ENVOYER L'IDÉE <span>→</span></>
              )}
            </button>

            {status === "SUCCESS" && (
              <p className="msg-success">Message envoyé avec succès. À bientôt ! </p>
            )}
            {status === "ERROR" && (
              <p className="msg-error">Une erreur est survenue. Veuillez réessayer.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;