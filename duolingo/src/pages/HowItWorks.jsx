import React from 'react';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';

const HowItWorks = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ paddingTop: '70px' }}>
        <HowItWorksSection />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;