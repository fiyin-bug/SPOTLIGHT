import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import spot from './assets/spot.png';

function Navbar() {
  const navigate = useNavigate(); // Hook to navigate between pages

  // Function to handle button click
  const handleCreateEvent = () => {
    navigate('/loading'); // Navigate to the loading page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={spot} alt="Logo" className="nav-logo" />
      </div>

      <ul className="navbar-links">
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>

      {/* Create Event button */}
      <button className="event-button" onClick={handleCreateEvent}>
        Create Event
      </button>
    </nav>
  );
}

export default Navbar;

