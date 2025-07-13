import React from 'react';
import PricingSection from '../components/PricingSection';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div style={{ width: '100%' }}>
      {/* Add padding top to account for fixed navbar */}
      <div style={{ paddingTop: '70px' }}>
        <PricingSection />
        <SubscriptionSection />
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;