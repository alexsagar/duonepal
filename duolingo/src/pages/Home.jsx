import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyBookSection from '../components/WhyBookSection';
import TrustedPartnersSection from '../components/TrustedPartnerSection';
import FAQSection from '../components/FAQSection';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';

const Home = ({ openModal }) => {
  return (
    <div className="home-page" style={{ width: '100%' }}>
      <HeroSection />
      <FeaturesSection id="features" openModal={openModal} />
      <HowItWorksSection id="how-it-works" />
      <WhyBookSection />
      <TrustedPartnersSection />
      <FAQSection id="faqs" />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Home;
