import React from 'react';
import '../styles/TrustedPartnerSection.css';

const TrustedPartnersSection = () => {
  // First row partners (8 logos)
 const firstRowPartners = [
  { name: 'AECC Nepal', logo: '/aecc.png' },
  { name: 'Edwise Foundation', logo: '/edwise.png' },
  { name: 'Mission USA', logo: '/missionusa.png' },
  { name: 'US Edu-Consult', logo: '/useduconsult.png' },
];

const secondRowPartners = [
  { name: 'American Online Service', logo: '/americanonline.png' },
  { name: 'Infinity Visa & Online Service', logo: '/infinityvisa.png' },
  { name: 'Orbit International', logo: '/orbit.png' },
];

const thirdRowPartners = [
  { name: 'President Travel & Tours', logo: '/presidenttravel.png' },
  { name: 'KIEC', logo: '/kiec.png' },
];

  return (
    <section className="trusted-partners-section">
      <div className="trusted-partners-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title4">
            Trusted by Leading Educational Consultancies Across Nepal
          </h2>
          <p className="section-subtitle">
            We partner with top consultancies to simplify Duolingo test booking for their students — 
            enabling fast, secure payments.
          </p>
        </div>

        {/* Partners Grid - Staggered Layout */}
        <div className="partners-grid">
          {/* First Row - 4 Logos */}
          <div className="partners-row first-row">
            {firstRowPartners.map((partner, index) => (
              <div 
                key={`first-${index}`} 
                className="partner-logo"
                style={{ '--animation-delay': `${index * 0.1}s` }}
              >
                <div className="logo-circle">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="company-logo"
                    onError={(e) => {
                      e.target.src = `https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2`;
                    }}
                  />
                </div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Logos (Offset) */}
          <div className="partners-row second-row">
            {secondRowPartners.map((partner, index) => (
              <div 
                key={`second-${index}`} 
                className="partner-logo"
                style={{ '--animation-delay': `${(index + 8) * 0.1}s` }}
              >
                <div className="logo-circle">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="company-logo"
                    onError={(e) => {
                      e.target.src = `https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2`;
                    }}
                  />
                </div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>

          {/* Third Row - 3 Logos (Offset & Faded) */}
          <div className="partners-row third-row faded">
            {thirdRowPartners.map((partner, index) => (
              <div 
                key={`third-${index}`} 
                className="partner-logo faded-logo"
                style={{ '--animation-delay': `${(index + 15) * 0.1}s` }}
              >
                <div className="logo-circle">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="company-logo"
                    onError={(e) => {
                      e.target.src = `https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2`;
                    }}
                  />
                </div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;