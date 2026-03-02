import React, { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import '../styles/TestimonialsSection.css';
import image1 from '../../public/image1.png'
import image2 from '../../public/image2.png';
import image3 from '../../public/image3.png';
import image4 from '../../public/image4.png';
import image5 from '../../public/image5.png';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Anisha Karki',
      role: 'Student, Kathmandu',
      quote: 'Booking my Duolingo test from Nepal was so easy through this platform. The process was smooth, and I got all the details on time. Perfect for students applying abroad!',
      image: image1,
      company: ''
    },
    {
      id: 2,
      name: 'Sujan Bhandari',
      role: 'Test Taker',
      quote: 'I couldn’t find Duolingo test booking support locally, but this website solved everything in minutes. Super helpful and trustworthy!',
      image: image2,
      company: ''
    },
    {
      id: 3,
      name: 'Pooja Thapa',
      role: 'Aspiring Student, Chitwan',
      quote: 'Great customer service and very fast response! They even helped me pick the best date for my Duolingo test. Highly recommend for Nepali students.',
      image: image5,
      company: ''
    },
    {
      id: 4,
      name: 'Bikash Sharma',
      role: 'Counseling Center Partner, Biratnagar',
      quote: 'We recommend this platform to all our students. It’s reliable, Nepali-friendly, and saves us a lot of time during the application season.',
      image: image3,
      company: ''
    },
    {
      id: 5,
      name: 'Rajan Adhikari',
      role: 'Student, Dharan',
      quote: 'I helped my daughter book her test through this site. As a parent, I found it very easy to understand, and the team was responsive even on weekends.',
      image: image4,
      company: ''
    }
  ];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title1">What our clients say</h2>
        </div>

        {/* Main Content - Two Boxes */}
        <div className="testimonials-content">
          {/* Left Box - Text Content */}
          <div className="testimonial-text-box">
            <div className="testimonial-content">
              <div className="client-info">
                <span className="client-name">{currentTestimonial.name}</span>
                <span className="client-role">{currentTestimonial.role}</span>
              </div>
              
              <blockquote className="testimonial-quote">
                "{currentTestimonial.quote}"
              </blockquote>
              
              {/* Navigation Controls */}
              <div className="testimonial-controls">
                <button 
                  className="control-btn prev-btn"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <IoChevronBack size={20} />
                </button>
                
                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  className="control-btn next-btn"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <IoChevronForward size={28} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Box - Client Photo */}
          <div className="testimonial-image-box">
            <div className="image-wrapper">
              <img 
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="client-image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2';
                }}
              />
              
              {/* Company Badge */}
              <div className="company-badge">
                <span className="company-name">{currentTestimonial.company}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (visible only on mobile) */}
        <div className="mobile-navigation">
          <button 
            className="mobile-nav-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <IoChevronBack size={28} />
          </button>
          
          <div className="mobile-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mobile-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="mobile-nav-btn next-btn"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <IoChevronForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
