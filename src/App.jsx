import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';  
import LandingPage from './LandingPage'; 
import LoadingEvent from './LoadingEvent';
import Navbar from './Navbar';
import DiscoveryPage from './DiscoveryPage';
import TicketPage from './TicketPage';
import CheckoutPage from './CheckoutPage'; // Import the CheckoutPage
import Footer from './Footer'; 
import './Footer.css';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar visible on all pages */}
        
        {/* Main content section */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/loading" element={<LoadingEvent />} />
            <Route path="/discover" element={<DiscoveryPage />} />
            <Route path="/ticket/:id" element={<TicketPage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> {/* Add this route */}
            <Route path="/About" element={<About />} /> 
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>

        <Footer /> {/* Footer visible on all pages */}
      </div>
    </Router>
  );
}

export default App;


