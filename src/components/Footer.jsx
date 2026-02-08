import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">Explorer</span>
        </div>
        <div className="footer-info">
          <p>&copy; {currentYear} All rights reserved to © Arpa.</p>
          <div className="footer-links">
            <a href="" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-gradient"></div>
    </footer>
  );
};

export default Footer;
