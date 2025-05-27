import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
<div className="footer-description">
        
        
      </div>
      </div>
      <div className="col-lg-2">
        <div className="footer-column">
        <h5>Links</h5>
        <div className="footer-item">Landing Page</div>
        <div className="footer-item">Home Page</div>
        <div className="footer-item">History Page</div>
      </div>

      </div>
      <div className="col-lg-2">
        <div className="footer-column">
        <h5>Guides</h5>
        <div className="footer-item">React</div>
        <div className="footer-item">React Router</div>
        <div className="footer-item">React Bootstrap</div>
      </div>
      </div>
      <div className="col-lg-4">
        <div className="footer-column">
        <h5>Contact</h5>
        <div className="footer-item">Enter your Email here!!</div>
      </div>
      </div>
    </div>
  );
};

export default Footer;

