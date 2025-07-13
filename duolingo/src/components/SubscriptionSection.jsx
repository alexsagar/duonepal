import React, { useState } from 'react';
import '../styles/SubscriptionSection.css';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      // You can add success notification here
    }, 1000);
  };

  return (
    <section className="subscription-section">
      <div className="subscription-container">
        <div className="subscription-content">
          {/* Decorative elements */}
          <div className="decoration-circle-1"></div>
          <div className="decoration-circle-2"></div>
          
          <h2 className="subscription-title">
            Stay Ahead with Exclusive Offers &<br />
            Free DET Preparation Tips
          </h2>
          <p className="subscription-subtitle">
            Get the latest updates, special discounts, and expert tips to help you ace<br />
            your Duolingo English Test — straight to your inbox.
          </p>
          
          <form className="subscription-form" onSubmit={handleSubmit}>
            <div className="email-input-container">
              <div className="email-icon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#9CA3AF"/>
                </svg>
              </div>
              <input
                type="email"
                placeholder="Your mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
            </div>
            <button 
              type="submit" 
              className="subscribe-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;