import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function CheckoutPage() {
  const navigate = useNavigate();

  // State variables
  const [step, setStep] = useState(1); // Tracks progress (1 = Tickets, 2 = Contact, 3 = Payment)
  const [earlyBirdCount, setEarlyBirdCount] = useState(0);
  const [regularCount, setRegularCount] = useState(0);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [isProcessing, setIsProcessing] = useState(false); // Simulate payment processing

  // Effect for countdown timer
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [step, timer]);

  // Format timer
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle navigation between steps
  const handleContinue = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 1) navigate('/ticket/:id');
    else setStep(step - 1);
  };

  // Handle Payment Submission
  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true); // Start processing payment

    // Simulate a delay (e.g., 3 seconds)
    setTimeout(() => {
      setIsProcessing(false); // Stop processing
      alert('Payment Successful! 🎉');
      navigate('/thank-you'); // Redirect to confirmation page
    }, 3000);
  };

  return (
    <div className="checkout-page">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>✔ Tickets</div>
        <div className="line"></div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>✔ Contact</div>
        <div className="line"></div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>✔ Payment</div>
      </div>

      {/* Left Section */}
      <div className="left-section">
        {step === 1 && (
          <>
            <button className="back-btn" onClick={handleBack}>Back</button>
            <p className="Choose-text">CHOOSE TICKETS</p>
            <div className="ticket-option">
              <p className="choose-ticket">EARLYBIRD TICKETS</p>
              &nbsp;
              <p>₦10,000</p>
              &nbsp;
              <div className="counter">
                <button onClick={() => setEarlyBirdCount((count) => Math.max(0, count - 1))}>-</button>
                <span>{earlyBirdCount}</span>
                <button onClick={() => setEarlyBirdCount((count) => count + 1)}>+</button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="ticket-option">
              <p className="Choose-reg">REGULAR TICKETS</p>
              &nbsp;
              <p>₦15,000</p>
              &nbsp;
              <div className="counter">
                <button onClick={() => setRegularCount((count) => Math.max(0, count - 1))}>-</button>
                <span>{regularCount}</span>
                <button onClick={() => setRegularCount((count) => count + 1)}>+</button>
              </div>
            </div>
            &nbsp;
            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="timer">
              YOUR TICKETS ARE RESERVED. COMPLETE CHECKOUT WITHIN {formatTime(timer)} TO SECURE TICKETS.
            </p>
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Confirm Email Address</label>
                <input type="email" placeholder="Confirm your email" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="send-to-email" />
                <label htmlFor="send-to-email">Send tickets to my email address</label>
              </div>
              <button className="continue-btn" onClick={(e) => {
                e.preventDefault();
                handleContinue();
              }}>
                Proceed to Payment
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Payment Details</h3>
            {isProcessing ? (
              <div className="processing">
                <p>Processing Payment...</p>
                <div className="loader"></div> {/* Add CSS for the loader */}
              </div>
            ) : (
              <form>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="Name on card" required />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="form-group">
                  <label>Expiration Date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
                <button className="pay-btn" onClick={handlePayment}>
                  Pay Now
                </button>
              </form>
            )}
          </>
        )}
      </div>

      {/* Right Section: Summary */}
      <div className="right-section">
        <h2>Summary</h2>
        <p><strong>Spotlight Events</strong></p>
        <p>Early Bird Tickets: {earlyBirdCount}</p>
        <p>Regular Tickets: {regularCount}</p>
        <p>Subtotal: ₦{earlyBirdCount * 10000 + regularCount * 15000}</p>
        <div className="discount">
          <label>Discount Code:</label>
          <input type="text" placeholder="Enter code" />
        </div>
        <p>Total: ₦{earlyBirdCount * 10000 + regularCount * 15000}</p>
      </div>
    </div>
  );
}

export default CheckoutPage;



