import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  ChevronDown,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  HelpCircle,
  FileCheck2,
  ListChecks
} from 'lucide-react';
import '../styles/PricingSection.css';

const includedItems = [
  'Official Duolingo English Test booking',
  'Fast confirmation and account delivery',
  'Local payment support (eSewa, Khalti, Fonepay)',
  'Test validity: 21 days from activation',
  'Priority support before and after booking',
];

const processSteps = [
  { icon: <FileCheck2 size={24} />, title: 'Complete Booking Form', desc: 'Securely enter your details.' },
  { icon: <CreditCard size={24} />, title: 'Make Payment', desc: 'Use local payment methods.' },
  { icon: <ShieldCheck size={24} />, title: 'Upload Receipt', desc: 'Submit proof for verification.' },
  { icon: <Zap size={24} />, title: 'Get Account', desc: 'Receive DET login details fast.' },
];

const requirements = [
  'Valid email address for account communication',
  'Active phone/WhatsApp number',
  'Payment receipt image or PDF',
  'Correct spelling of your legal name (as per ID)',
];

const faqs = [
  {
    question: 'Is the price fixed?',
    answer: 'Yes. The current booking price is strictly NPR 8,500 with no hidden fees or service charges.',
  },
  {
    question: 'How long does confirmation take?',
    answer: 'Most bookings are confirmed quickly after receipt verification, typically within the same day of submission.',
  },
  {
    question: 'Can I pay using local wallets?',
    answer: 'Absolutely. We fully support eSewa, Khalti, and Fonepay transfers for your convenience.',
  },
  {
    question: 'Where do I complete the booking?',
    answer: 'Click the "Book Now" button on this page to be redirected to our secure booking form.',
  },
];

const PricingSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pricing-page-wrapper">
      {/* 1. Hero Section */}
      <section className="pricing-hero-section">
        <div className="container-inner">
          <div className="eyebrow-badge">
            <Sparkles size={16} />
            <span>Simple & Transparent Pricing</span>
          </div>
          <h1>Duolingo English Test Booking</h1>
          {/* <p className="hero-subtitles">
            One clear price. No hidden fees. Book your official test today using local payment options and get verified access within hours.
          </p> */}
        </div>
      </section>

      {/* 2. Main Pricing Banner CTA */}
      <section className="pricing-banner-section alternate-bg">
        <div className="container-inner">
          <div className="banner-content">
            <div className="price-info">
              <span className="plan-label">Current Booking Price</span>
              <div className="price-display">
                <span className="currency">NPR</span>
                <span className="amount">8,500</span>
              </div>
              <p className="price-note">Official DET booking support with local payment handling.</p>
            </div>
            <div className="action-info">
              <Link to="/book-now" className="premium-btn">
                <span>Book Now Securely</span>
                <ArrowRight size={20} className="btn-icon" />
              </Link>
              <p className="fine-print">You will be redirected to the secure booking form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's Included */}
      <section className="pricing-row-section">
        <div className="container-inner row-layout">
          <div className="row-header">
            <h2>What's Included</h2>
            <p>Everything you need for a smooth test booking experience.</p>
          </div>
          <div className="row-content">
            <ul className="premium-list">
              {includedItems.map((item, idx) => (
                <li key={idx}>
                  <Check size={20} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. How Booking Works */}
      <section className="pricing-row-section alternate-bg">
        <div className="container-inner">
          <div className="section-title-center">
            <h2>How Booking Works</h2>
            <p>A simple 4-step process to get your account.</p>
          </div>
          <div className="process-timeline-horizontal">
            {processSteps.map((step, idx) => (
              <div className="timeline-step" key={idx}>
                <div className="step-icon-box">{step.icon}</div>
                <div className="step-number">Step {idx + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {idx !== processSteps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Payments & Requirements (Side by side on desktop, stacked on mobile) */}
      <section className="pricing-row-section split-section">
        <div className="container-inner split-grid">

          <div className="split-column">
            <div className="row-header">
              <h2>Accepted Payments</h2>
              <p>We accept popular local digital wallets.</p>
            </div>
            <div className="payment-logos-premium">
              <div className="logo-box">
                <img src="/esewa.png" alt="eSewa" loading="lazy" decoding="async" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.textContent = 'eSewa' }} />
              </div>
              <div className="logo-box">
                <img src="/khalti.png" alt="Khalti" loading="lazy" decoding="async" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.textContent = 'Khalti' }} />
              </div>
              <div className="logo-box">
                <img src="/fonepay.png" alt="Fonepay" loading="lazy" decoding="async" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.textContent = 'Fonepay' }} />
              </div>
            </div>
          </div>

          <div className="split-divider"></div>

          <div className="split-column">
            <div className="row-header">
              <h2>Before You Book</h2>
              <p>Please have these ready before starting.</p>
            </div>
            <ul className="requirements-list">
              {requirements.map((item, idx) => (
                <li key={idx} className="req-item">
                  <div className="req-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 6. FAQs */}
      <section className="pricing-row-section alternate-bg faq-section">
        <div className="container-inner row-layout">
          <div className="row-header">
            <h2>Common Questions</h2>
            <p>Everything you need to know about the booking process and pricing.</p>
          </div>
          <div className="row-content">
            <div className="faq-accordion">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    className={`faq-card ${isOpen ? 'open' : ''}`}
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faq-question">
                      <h3>{item.question}</h3>
                      <ChevronDown
                        size={20}
                        className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                      />
                    </div>
                    <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
