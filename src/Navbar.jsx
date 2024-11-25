import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import spot from './assets/spot.png';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCreateEvent = () => {
    navigate('/loading');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={spot} alt="Logo" className="nav-logo" />
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger Menu Icon */}
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>

      <button className="event-button" onClick={handleCreateEvent}>
        Create Event
      </button>
    </nav>
  );
}

export default Navbar;
