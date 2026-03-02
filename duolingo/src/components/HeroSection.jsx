import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline preload="metadata" className="bg-video">
        <source src="https://res.cloudinary.com/dtuqbqgz7/video/upload/f_auto,q_auto:good,w_1280,c_limit/v1772437140/273762_medium_jco0h0.mp4" type="video/mp4" />
        <source src="/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-video-overlay" />

      <div className="hero-container">
        {/* Trust Badge */}
        <div className="hero-trust-badge">
          <div className="hero-trust-indicator"></div>
          Nepal's #1 Trusted Platform to Book Duolingo English Test
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Book Duolingo English Test
        </h1>

        {/* Payment Method Logos */}
        <div className="hero-payment-logos">
          <div className="hero-payment-logo">
            <img src="/esewa.png" alt="eSewa" className="hero-logo-img" decoding="async" fetchPriority="high" />
          </div>
          <div className="hero-payment-logo">
            <img src="/khalti.png" alt="Khalti" className="hero-logo-img" decoding="async" fetchPriority="high" />
          </div>
          <div className="hero-payment-logo">
            <img src="/fonepay.png" alt="Fonepay" className="hero-logo-img" decoding="async" fetchPriority="high" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle">
          No Dollar Card Needed - Get Your DET Booked in Minutes<br />
          Using Local Payment Methods
        </p>

        <div className="hero-cta-wrap">
          <Link to="/book-now" className="hero-book-now-btn">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
