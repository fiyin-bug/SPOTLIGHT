import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from './SplashScreen';  
import LandingPage from './LandingPage'; 
import LoadingEvent from './LoadingEvent';
import Navbar from './Navbar';
import DiscoveryPage from './DiscoveryPage';
import TicketPage from './TicketPage';
import CheckoutPage from './CheckoutPage';
import Footer from './Footer'; 
import './Footer.css';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';

function Layout() {
  const location = useLocation(); // Get current route

  // Define which pages should hide the Navbar and Footer
  const hideNavbarFooterPages = ['/']; // Add more routes where Navbar/Footer should not show

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {!hideNavbarFooterPages.includes(location.pathname) && <Navbar />}
      
      {/* Main content section */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/loading" element={<LoadingEvent />} />
          <Route path="/discover" element={<DiscoveryPage />} />
          <Route path="/ticket/:id" element={<TicketPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CheckoutPage/:cardId" element={<CheckoutPage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {!hideNavbarFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
