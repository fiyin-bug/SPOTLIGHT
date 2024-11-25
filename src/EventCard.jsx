import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import trav from './assets/trav.jpg';
import drake from './assets/drake.jpg';
import asake from './assets/asake.jpg';
import ken from './assets/ken.jpg';
import carti from './assets/carti.jpg';
import adele from './assets/adele.jpg';
import frank from './assets/frank.jpg';
import crank from './assets/crank.jpg';
import kenye from './assets/kenye.jpg';
import './EventCard.css';
// Card data array (renamed to EventCard for consistency)
export const EventCardData = [
  { id: 1, image: frank, title: 'Card Title 1', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 2, image: kenye, title: 'Card Title 2', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 3, image: crank, title: 'Card Title 3', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 4, image: trav, title: 'Card Title 4', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 5, image: drake, title: 'Card Title 5', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 6, image: asake, title: 'Card Title 6', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 7, image: ken, title: 'Card Title 7', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 8, image: carti, title: 'Card Title 8', description: 'This is a description of the card. It provides some details about the content inside.' },
  { id: 9, image: adele, title: 'Card Title 9', description: 'This is a description of the card. It provides some details about the content inside.' }
];

const EventCard = ({ eventCardData }) => {
  return (
    <div className="card-container">
      {eventCardData.map((card) => (
        <Link to={`/ticket/${card.id}`} key={card.id} className="card-link">
          <div className="card">
            <img src={card.image} alt="Card Image" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventCard;
