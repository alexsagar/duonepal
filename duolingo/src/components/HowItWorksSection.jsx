import React from 'react';
import { FileText, Upload, Mail } from 'lucide-react';
import '../styles/HowItWorksSection.css';

const HowItWorksSection = ({ id }) => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Fill the form',
      description: 'Enter your personal details.',
      position: 'left'
    },
    {
      number: '02',
      icon: Upload,
      title: 'Upload Your Document',
      description: 'Upload a valid ID for verification.',
      position: 'right'
    },
    {
      number: '03',
      icon: Mail,
      title: 'Receive Confirmation Email',
      description: 'Get your account delivered instantly via email.',
      position: 'left'
    }
  ];

  // Sample profile pictures for the toast
  const profilePictures = [
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
  ];

  return (
    <section id={id} className="how-it-works-section">
      <div className="how-it-works-container">
        {/* Left Side - Steps */}
        <div className="steps-container">
          <div className="how-it-works-section-header">
            <h2 className="how-it-works-section-title">How It Works</h2>
          </div>

          <div className="steps-list">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className={`step-item ${step.position}`}
                  style={{ '--animation-delay': `${index * 0.2}s` }}
                >
                  {/* Step Number */}
                  <div className="how-it-works-step-number">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="step-content">
                    <div className="step-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="step-text">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Image with Toast */}
        <div className="image-container">
          <div className="main-image-wrapper">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
              alt="Professional working environment"
              className="main-image"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2';
              }}
            />

            {/* Toast Notification */}
            <div className="toast-notification">
              <div className="profile-pictures">
                {profilePictures.map((pic, index) => (
                  <div
                    key={index}
                    className="profile-pic"
                    style={{ '--index': index }}
                  >
                    <img
                      src={pic}
                      alt={`User ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.src = 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2';
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="toast-content">
                <span className="toast-number">10K+</span>
                <span className="toast-text">Test Takers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
