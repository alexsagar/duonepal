import React, { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import '../styles/FAQSection.css';

const FAQSection = ({ id }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I book the Duolingo English Test through this website?',
      answer: 'Booking your Duolingo English Test is simple! Just fill out our booking form with your personal details, upload a valid ID for verification, make payment using local methods like eSewa, Khalti, or Fonepay, and receive your test account details instantly via email.'
    },
    {
      id: 2,
      question: 'Can I use eSewa, Khalti, or Fonepay to pay?',
      answer: 'Yes! We support all major Nepali payment methods including eSewa, Khalti, Fonepay, and other local payment options. No international credit card or dollar card is required.'
    },
    {
      id: 3,
      question: 'How long does it take to receive my account details?',
      answer: 'Your Duolingo English Test account details are delivered instantly via email after successful payment verification. The entire process typically takes just a few minutes.'
    },
    {
      id: 4,
      question: 'When can I take the test after payment?',
      answer: 'You can then schedule your Duolingo English Test at any time within 21 days from the date of activation — available 24/7.'
    },
    {
      id: 5,
      question: 'Is this platform authorized to sell Duolingo Test vouchers?',
      answer: 'Yes, we are an authorized partner for Duolingo English Test bookings in Nepal. We work directly with official channels to provide legitimate test vouchers and ensure your test results are valid and recognized worldwide.'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Split FAQs into left (first 3) and right (last 2) columns
  const leftColumnFAQs = faqs.slice(0, 3);
  const rightColumnFAQs = faqs.slice(3, 5);

  return (
    <section id={id} className="faqs-section">
      <div className="faqs-container">
        {/* Header */}
        <div className="faqs-section-headers">
          <h2 className="faqs-section-title">Frequently Asked Questions</h2>
          <p className="faqs-section-subtitle">
            Find answers to common questions about booking your Duolingo English Test
          </p>
        </div>

        {/* FAQ Grid - 3 left, 2 right */}
        <div className="faqs-grid">
          {/* Left Column - 3 Questions */}
          <div className="faqs-column left-column">
            {leftColumnFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faqs-item ${openFAQ === faq.id ? 'active' : ''}`}
                style={{ '--animation-delay': `${index * 0.1}s` }}
              >
                <div
                  className="faqs-question"
                  onClick={() => toggleFAQ(faq.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFAQ(faq.id);
                    }
                  }}
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="faqs-question-content">
                    <div className="faqs-question-number">
                      <span className="faqs-number-text">{faq.id.toString().padStart(2, '0')}</span>
                    </div>
                    <h3 className="faqs-question-text">{faq.question}</h3>
                  </div>
                  <div className="faqs-toggle-icon">
                    {openFAQ === faq.id ? (
                      <IoRemove size={24} />
                    ) : (
                      <IoAdd size={24} />
                    )}
                  </div>
                </div>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faqs-answer ${openFAQ === faq.id ? 'expanded' : ''}`}
                  aria-hidden={openFAQ !== faq.id}
                >
                  <div className="faqs-answer-content">
                    <p className="faqs-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - 2 Questions */}
          <div className="faqs-column right-column">
            {rightColumnFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faqs-item ${openFAQ === faq.id ? 'active' : ''}`}
                style={{ '--animation-delay': `${(index + 3) * 0.1}s` }}
              >
                <div
                  className="faqs-question"
                  onClick={() => toggleFAQ(faq.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFAQ(faq.id);
                    }
                  }}
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="faqs-question-content">
                    <div className="faqs-question-number">
                      <span className="faqs-number-text">{faq.id.toString().padStart(2, '0')}</span>
                    </div>
                    <h3 className="faqs-question-text">{faq.question}</h3>
                  </div>
                  <div className="faqs-toggle-icon">
                    {openFAQ === faq.id ? (
                      <IoRemove size={24} />
                    ) : (
                      <IoAdd size={24} />
                    )}
                  </div>
                </div>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faqs-answer ${openFAQ === faq.id ? 'expanded' : ''}`}
                  aria-hidden={openFAQ !== faq.id}
                >
                  <div className="faqs-answer-content">
                    <p className="faqs-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
