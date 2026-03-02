import React from 'react';
import '../styles/TrustedPartnerSection.css';

const firstRowPartners = [
  { name: 'AECC Nepal', logo: '/aecc.png' },
  { name: 'Edwise Foundation', logo: '/edwise.png' },
  { name: 'Mission USA', logo: '/missionusa.png' },
  { name: 'US Edu-Consult', logo: '/useduconsult.png' },
  { name: 'American Online Service', logo: '/americanonline.png' },
];

const secondRowPartners = [
  { name: 'Infinity Visa & Online Service', logo: '/infinityvisa.png' },
  { name: 'Orbit International', logo: '/orbit.png' },
  { name: 'President Travel & Tours', logo: '/presidenttravel.png' },
  { name: 'KIEC', logo: '/kiec.png' },
];

const PartnerMarqueeRow = ({ partners, reverse = false }) => {
  const loopedPartners = [...partners, ...partners];

  return (
    <div className="logo-marquee" aria-label="Partner logos">
      <div className={`logo-track ${reverse ? 'reverse' : 'forward'}`}>
        {loopedPartners.map((partner, index) => (
          <div className="logo-card" key={`${partner.name}-${index}`}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="company-logo"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = '/logo.png';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TrustedPartnersSection = () => {
  return (
    <section className="trusted-partners-section">
      <div className="trusted-partners-container">
        <div className="section-header">
          <h2 className="section-title4">
            Trusted by Leading Educational Consultancies Across Nepal
          </h2>
          <p className="section-subtitle">
            We partner with top consultancies to simplify Duolingo test booking for their students,
            enabling fast and secure payments.
          </p>
        </div>

        <div className="partners-marquee-stack">
          <PartnerMarqueeRow partners={firstRowPartners} />
          <PartnerMarqueeRow partners={secondRowPartners} reverse />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
