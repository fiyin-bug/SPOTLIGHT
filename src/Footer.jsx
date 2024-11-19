// Footer.js
import React from 'react';
import './Footer.css';
import spot from './assets/spot.png';
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={spot} alt="Spotlight Logo" className="footer-logo-img" />
          <p style={{ fontSize: '24px', display: 'inline' }}>SPOTLIGHT EVENTS</p>

          <p className="mission-text">Our mission is to create memorable events that bring people together.</p>
          <p className="contact-info">Phone: +1234567890</p>
          <p className="contact-info">Email: info@spotlightevents.com</p>
          <hr className="footer-line" />
          <p className="rights-text">&copy;2024 Spotlight Nigeria. All rights reserved.</p>
        </div>
      </div>

      <div className="footer-right">
        <ul className="quick-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/discover">Discover</a></li>
        </ul>
        <div className="social-icons">
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={{ fontSize: '30px', color: 'black',hover:'white' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

