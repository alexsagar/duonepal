import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyBookSection from '../components/WhyBookSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedPartnersSection from '../components/TrustedPartnerSection';
import FAQSection from '../components/FAQSection';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';

const Home = ({ openModal }) => {
  return (
    <div style={{ width: '100%' }}>
      <HeroSection />
      <section id="features">
        <FeaturesSection openModal={openModal} />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <WhyBookSection />
      <TestimonialsSection />
      <TrustedPartnersSection />
      <section id="faqs">
        <FAQSection />
      </section>
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Home;
