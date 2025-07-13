import React from 'react';
import { Check, Star, CreditCard, Smartphone, Wallet } from 'lucide-react';
import '../styles/PricingSection.css';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const features = [
    'Instant Test Account Delivery',
    'Valid for 21 Days from Activation',
    '24/7 Customer Support',
    'Free Preparation Guide (PDF)',
    'Test Day Checklist',
    'Score Explanation Guide',
    'Email Confirmation',
    'No Hidden Charges'
  ];

  const paymentMethods = [
    {
      name: 'eSewa',
      logo: '/esewa.png',
      description: 'Pay instantly with eSewa',
      popular: true
    },
    {
      name: 'Khalti',
      logo: '/khalti.png',
      description: 'Quick payment via Khalti'
    },
    {
      name: 'Fonepay',
      logo: '/fonepay.png',
      description: 'Secure Fonepay transactions'
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-layout">
        {/* Left Side */}
        <div className="pricing-left">
          <h3 className="plan-name">Duolingo English Test</h3>
          <p className="plan-description">Complete test booking with instant delivery</p>
          <div className="price-group">
            <div className="price-main">
              <span className="currency">NPR</span>
              <span className="amount">7,500</span>
            </div>
            <div className="price-note">
              <span className="original-price">Official Price: $69</span>
              <span className="savings">You save on conversion fees!</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="pricing-right">
          <div className="popular-badge">
            <Star size={16} /> Most Popular
          </div>
          <h4 className="payment-title">Accepted Payment Methods:</h4>
          <div className="payment-options">
            {paymentMethods.map((method, index) => (
              <div className={`payment-method ${method.popular ? 'highlight' : ''}`} key={index}>
                <img src={method.logo} alt={method.name} />
                <div className="method-text">
                  <strong>{method.name}</strong>
                  <p>{method.description}</p>
                </div>
                {method.popular && <span className="popular-label">Popular</span>}
              </div>
            ))}
          </div>
          <Link to="/book-now">
  <button className="book-now-btn">
    <CreditCard size={18} /> Book Now - NPR 7,500
  </button>
</Link>
<p className="security-note">
  🔒 Secure payment • Instant delivery • 100% legitimate
</p>
        </div>
      </div>

      {/* Features Below */}
      <div className="features-wrapper">
        <h4>What's Included:</h4>
        <ul className="features-grid1">
          {features.map((feature, index) => (
            <li key={index}><Check size={18} /> {feature}</li>
          ))}
        </ul>
      </div>

      {/* Additional Info Section */}
      <div className="extra-info">
        <div className="info-grid">
          <div className="info-box">
            <Smartphone size={28} />
            <h5>Instant Delivery</h5>
            <p>Get your test account details via email within minutes of payment confirmation</p>
          </div>
          <div className="info-box">
            <CreditCard size={28} />
            <h5>Local Payments</h5>
            <p>No need for dollar cards or international payment methods</p>
          </div>
          <div className="info-box">
            <Check size={28} />
            <h5>100% Legitimate</h5>
            <p>Official Duolingo test vouchers with worldwide recognition</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Common Questions</h3>
        <div className="faq-grid">
          <div className="faq-box">
            <h4>How long is the test valid?</h4>
            <p>Your test account is valid for 21 days from activation.</p>
          </div>
          <div className="faq-box">
            <h4>Is this the official price?</h4>
            <p>Yes, NPR 7,500 is equivalent to the official $49 USD price.</p>
          </div>
          <div className="faq-box">
            <h4>What if I need help?</h4>
            <p>Our 24/7 support team is available via WhatsApp, email, and phone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
