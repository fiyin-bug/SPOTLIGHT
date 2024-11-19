import React from 'react';
import { useParams } from 'react-router-dom';
import frank from './assets/frank.jpg';
import { useNavigate } from 'react-router-dom';

const TicketPage = () => {
  // Get the event id from the URL params
  const { id } = useParams();
  const navigate = useNavigate(); 

  const handleGetTicket = () => {
    navigate('/checkout'); // Navigate to the CheckoutPage
  };


  return (
    <div className="ticket-page">
     
      <div className="ticket-info">
        {/* Left Section: Image */}
        <div className="ticket-image">
          <img src={frank} alt="Spotlight Event" />
          <button className="get-ticket-btn" onClick={handleGetTicket}>GET TICKET</button>
        </div>
        
        {/* Right Section: Event Details */}
        <div className="event-details">
          <h2 className="event-title">SPOTLIGHT CONCERT</h2>

          <div className="event-date-time">
            <span>Friday, December 17th 2024</span>
          </div>

          <div className="event-time">
            <span>12:00 PM - 1:00 AM</span>
          </div>

          <div className="event-location">
            <span>Balmoral Event Center</span>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="event-description">
        <h3>About this Event</h3>
        <p>This is a brief description of the Spotlight Concert event.</p>
      </div>

      <hr className="divider" />

      <div className="directions">
        <h3>Directions</h3>
        <div className="map-container">
          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.3430714120234!2d-123.364158!3d37.785874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ffb83234567!2sBalmoral%20Event%20Center!5e0!3m2!1sen!2sus!4v1631494238591"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;



































