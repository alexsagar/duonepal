import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Layers } from 'lucide-react';
import '../styles/Partner.css'; // Reusing B2B styles
import { postJson } from '../utils/api';

const BulkBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    consultancy: '',
    email: '',
    phone: '',
    quantity: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postJson('/api/inquiries', {
        type: 'bulk_booking',
        payload: formData,
      });
      setLoading(false);
      toast.success('Bulk booking request received! We will send you an invoice shortly.');
      setFormData({ name: '', consultancy: '', email: '', phone: '', quantity: '' });
    } catch (error) {
      setLoading(false);
      toast.error(error?.message || 'Failed to submit bulk request.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="partner-page-wrapper">

      <div className="partner-hero">
        <div className="b2b-badge">
          <Layers size={16} />
          <span>Volume Purchases</span>
        </div>
        <h1>Bulk Booking Information</h1>
        <p>
          Save money and simplify logistics by purchasing Duolingo English Test vouchers in bulk. Ideal for consultancies, schools, and preparation centers.
        </p>
      </div>

      <div className="bulk-table-container">
        <table className="bulk-pricing-table">
          <thead>
            <tr>
              <th>Volume Tier</th>
              <th>Price per Test (NPR)</th>
              <th>Total Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 - 9 Tests</td>
              <td>8,500</td>
              <td>Standard Pricing</td>
            </tr>
            <tr>
              <td>10 - 49 Tests</td>
              <td>8,200</td>
              <td>Save NPR 300 / test</td>
            </tr>
            <tr>
              <td>50 - 99 Tests</td>
              <td>8,000</td>
              <td>Save NPR 500 / test</td>
            </tr>
            <tr>
              <td>100+ Tests</td>
              <td>7,800</td>
              <td>Save NPR 700 / test</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="partner-form-section">
        <div className="b2b-form-card">
          <h2>Request Bulk Vouchers</h2>
          <p className="form-subtitle">Need to buy tests right now? Enter your details and quantity to get an instant quote.</p>

          <form className="b2b-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="partner-input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="partner-input-group">
                <label htmlFor="consultancy">Organization Name</label>
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
              <label htmlFor="quantity">Number of Tests Needed</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="10"
                placeholder="Minimum 10 for bulk pricing"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="b2b-submit-btn" disabled={loading}>
              {loading ? 'Processing...' : 'Request Quote & Invoice'}
            </button>
          </form>

        </div>
      </div>

    </div>
  );
};

export default BulkBooking;
