import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spot from './assets/spot.png';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('SplashScreen component rendered');
    
    const timer = setTimeout(() => {
      console.log('Navigating to /landing');
      navigate('/landing');
    }, 5000);

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={spot} alt="Company Logo" className="logo" />
      <h4 className="splash-screen-text">UNLEASHING DREAMS AND CREATING STARS!</h4>
    </div>
  );
}

export default SplashScreen;




