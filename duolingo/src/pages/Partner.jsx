import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Briefcase, Zap, Headset, Banknote, Building2 } from 'lucide-react';
import '../styles/Partner.css';
import { postJson } from '../utils/api';

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '',
    consultancy: '',
    email: '',
    phone: '',
    volume: '10-50',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postJson('/api/inquiries', {
        type: 'partner',
        payload: formData,
      });
      setLoading(false);
      toast.success('Partnership request submitted! Our B2B team will contact you shortly.');
      setFormData({ name: '', consultancy: '', email: '', phone: '', volume: '10-50', message: '' });
    } catch (error) {
      setLoading(false);
      toast.error(error?.message || 'Failed to submit partnership request.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="partner-page-wrapper">

      <div className="partner-hero">
        <div className="b2b-badge">
          <Building2 size={16} />
          <span>Educational Consultancies</span>
        </div>
        <h1>Partner with DuoNepal</h1>
        <p>
          Join Nepal's leading Duolingo English Test booking platform. Offer your students seamless test booking experiences while unlocking exclusive volume discounts and priority support for your consultancy.
        </p>
      </div>

      <div className="benefits-container">

        <div className="partner-benefit-card">
          <div className="partner-benefit-icon">
            <Banknote size={32} />
          </div>
          <h3>Volume Discounts</h3>
          <p>Maximize your margins. Get exclusive B2B pricing tiers when you book tests in bulk for your students.</p>
        </div>

        <div className="partner-benefit-card">
          <div className="partner-benefit-icon">
            <Zap size={32} />
          </div>
          <h3>Streamlined Booking</h3>
          <p>Skip the individual payment hassle. Use a centralized partner dashboard or direct rapid-booking links.</p>
        </div>

        <div className="partner-benefit-card">
          <div className="partner-benefit-icon">
            <Headset size={32} />
          </div>
          <h3>Priority Support</h3>
          <p>Get a dedicated account manager to resolve any student test-related queries and fast-track verifications.</p>
        </div>

      </div>

      <div className="partner-form-section">
        <div className="b2b-form-card">
          <h2>Become a Partner</h2>
          <p className="form-subtitle">Fill out the form below to discuss partnership opportunities.</p>

          <form className="b2b-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="partner-input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="partner-input-group">
                <label htmlFor="consultancy">Consultancy Name</label>
                <input type="text" id="consultancy" name="consultancy" value={formData.consultancy} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="partner-input-group">
                <label htmlFor="email">Business Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="partner-input-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="partner-input-group">
              <label htmlFor="volume">Estimated Monthly Students</label>
              <select id="volume" name="volume" value={formData.volume} onChange={handleChange}>
                <option value="1-10">1 - 10 Students</option>
                <option value="10-50">10 - 50 Students</option>
                <option value="50-100">50 - 100 Students</option>
                <option value="100+">100+ Students</option>
              </select>
            </div>

            <div className="partner-input-group">
              <label htmlFor="message">Additional Message (Optional)</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            </div>

            <button type="submit" className="b2b-submit-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>

        </div>
      </div>

    </div>
  );
};

export default Partner;
