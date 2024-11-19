import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import hall from './assets/hall.jpg';
import frank from './assets/frank.jpg';
import crank from './assets/crank.jpg';
import kenye from './assets/kenye.jpg';

function LandingPage() {
  const navigate = useNavigate(); // Hook to navigate between pages

  // Function to handle button click
  const handleCreateEvent = () => {
    navigate('/loading'); // Navigate to the loading page
  };

  return (
    <>
      {/* Page Image */}
      <div className="page-image-container">
        <img src={hall} alt="Hall" className="page-image" />
        <p className="img-text">&nbsp;COP YOUR TICKETS!</p>
      </div>

      {/* Upcoming Events */}
      <h5 className="new-txt">&nbsp;&nbsp;&nbsp;&nbsp;UPCOMING EVENTS</h5>

      {/* Card Container */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card-1">
          <img src={frank} alt="Card Image" className="card-img" />
          <div className="card-body">
            <h3 className="card-title">Card Title 1</h3>
            <p className="card-description">
              This is a description of the card. It provides some details about the content inside.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-2">
          <img src={kenye} alt="Card Image" className="card-img" />
          <div className="card-body">
            <h3 className="card-title">Card Title 2</h3>
            <p className="card-description">
              This is a description of the card. It provides some details about the content inside.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-3">
          <img src={crank} alt="Card Image" className="card-img" />
          <div className="card-body">
            <h3 className="card-title">Card Title 3</h3>
            <p className="card-description">
              This is a description of the card. It provides some details about the content inside.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default LandingPage;
