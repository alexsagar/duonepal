import React from 'react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ paddingTop: '70px' }}>
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
