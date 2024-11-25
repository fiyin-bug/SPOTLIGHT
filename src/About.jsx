import React from 'react';
import './About.css';
 import spot from './assets/spot.png';

const About = () => {
  return (
    <div className="container">
      <div className="text-section">
        <p className="about-us-text">About Us</p>
        <h2 className="who-we-are">WHO WE ARE AND WHAT WE DO??</h2>
        <p className="spotlight-info">
          Spotlight concert and awards was founded 4 years ago with the vision of giving upcoming artistes a spot in the limelight to prove themselves and also giving the winners cash gifts worth millions of naira and also a 1 year record deal for whoever that comes first, isn't that massive??
          <br />
          <br />
          Asides the competition, the regular concert goers have a blast vibing to hits from mainstream artistes, some of who have graced our stage are, The Late MOBHAD, ASAKE, SEYI VIBEZ, T-CLASSIC, DJ CONSEQUENCE, DJ NEPTUNE, DJ DSF, see as line up choke na!! And these are just a few of the celebrities that have attended over the years.
          <br />
          <br />
          Now Spotlight is coming bigger and better come 2025!! You wouldn't want to miss it. Which of your favourite artistes would you love us to bring next year?? Let us know on our instagram page, the link is below. Lagos, get ready to rave next year!!
        </p>
      </div>
      <div className="image-section">
        <img src={spot} alt="Spotlight Event" className="image"/>
      </div>
    </div>
  );
};

export default About;
