import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import '../styles/Contact.css';
import { postJson } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await postJson('/api/inquiries', {
        type: 'contact',
        payload: formData,
      });
      setLoading(false);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setLoading(false);
      toast.error(error?.message || 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-split-container">

        {/* Left Panel: Contact Info */}
        <div className="contact-info-panel">
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions about booking your Duolingo English Test? Our support team is here to help you navigate the process.
          </p>

          <div className="contact-methods">
            <div className="method-item">
              <div className="method-icon">
                <MapPin size={24} />
              </div>
              <div className="method-details">
                <h3>Our Office</h3>
                <p>Koteshwor<br />Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="method-item">
              <div className="method-icon">
                <Phone size={24} />
              </div>
              <div className="method-details">
                <h3>Phone & WhatsApp</h3>
                <p>9705920108<br />Sun - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="method-item">
              <div className="method-icon">
                <Mail size={24} />
              </div>
              <div className="method-details">
                <h3>Email Support</h3>
                <p>getduolingo@gmail.com<br />24/7 Online Support</p>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel: The Form */}
        <div className="contact-form-panel">
          <form className="premium-contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            <div className="form-grid-2">
              <div className="input-field-wrapper">
                <label htmlFor="name">Your Name</label>
                <div className="input-with-icon">
                  <User size={18} className="field-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ram Bahadur Karki"
                    required
                  />
                </div>
              </div>

              <div className="input-field-wrapper">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ram@example.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="input-field-wrapper" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="subject">Subject</label>
              <div className="input-with-icon">
                <MessageSquare size={18} className="field-icon" />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>
            </div>

            <div className="input-field-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="message">Your Message</label>
              <div className="input-with-icon" style={{ flex: 1 }}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us everything we need to know..."
                  required
                  style={{ paddingLeft: '1.2rem' }} // No icon for textarea usually, or adjust padding
                />
              </div>
            </div>

            <div className="submit-action-wrapper">
              <button
                type="submit"
                className="premium-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="spinner"></div> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
