import React from 'react';
import { CreditCard, Clock, Headphones, Wallet, Users, ArrowRight } from 'lucide-react';
import '../styles/WhyBookSection.css';

const WhyBookSection = () => {
  const benefits = [
    {
      id: 'no-dollar-card',
      icon: CreditCard,
      title: 'No Dollar Card Required',
      description: 'Book your test without needing international payment cards',
      position: 'left-top'
    },
    {
      id: 'instant-delivery',
      icon: Clock,
      title: 'Instant Delivery',
      description: 'Get your test booking confirmation immediately',
      position: 'right-top'
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your queries',
      position: 'left-bottom'
    },
    {
      id: 'local-payment',
      icon: Wallet,
      title: 'Local Payment Options',
      description: 'Pay using eSewa, Khalti, Fonepay and other local methods',
      position: 'right-bottom'
    }
  ];

  return (
    <section className="why-book-section">
      <div className="why-book-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title3">Why Book with DuoTest Nepal?</h2>
          <p className="section-subtitle">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Left Side Benefits */}
          <div className="benefits-column left-benefits">
            {benefits
              .filter(benefit => benefit.position.includes('left'))
              .map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.id} className={`benefit-card ${benefit.position}`}>
                    <div className="benefit-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Center Image */}
          <div className="video-container">
            <div className="video-wrapper">
              <img
                src="/study.png"
                alt="Happy student who booked Duolingo English Test through DuoNepal"
                className="center-video"
                loading="lazy"
                decoding="async"
              />

              {/* Image Overlay */}
              <div className="video-overlay">
                <div className="trust-badge">
                  <Users size={16} />
                  <span>Trusted by Thousands of Nepali Students</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Benefits */}
          <div className="benefits-column right-benefits">
            {benefits
              .filter(benefit => benefit.position.includes('right'))
              .map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.id} className={`benefit-card ${benefit.position}`}>
                    <div className="benefit-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Animated Arrows */}
        <div className="animated-arrows">
          <ArrowRight className="arrow-element arrow-1" style={{ '--rotation': '-30deg' }} />
          <ArrowRight className="arrow-element arrow-2" style={{ '--rotation': '30deg' }} />
          <ArrowRight className="arrow-element arrow-3" style={{ '--rotation': '30deg' }} />
          <ArrowRight className="arrow-element arrow-4" style={{ '--rotation': '-30deg' }} />
          <ArrowRight className="arrow-element arrow-5" style={{ '--rotation': '-90deg' }} />
          <ArrowRight className="arrow-element arrow-6" style={{ '--rotation': '90deg' }} />
        </div>
      </div>
    </section>
  );
};

export default WhyBookSection;
