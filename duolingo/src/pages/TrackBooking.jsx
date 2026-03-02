import React, { useState } from 'react';
import { Search, MapPin, KeyRound, Loader2 } from 'lucide-react';
import '../styles/TrackBooking.css';

const TrackBooking = () => {
  const [formData, setFormData] = useState({ identifier: '', bookingId: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResult({
        success: false,
        message: 'No active booking found matching these details. Please verify your Tracking ID and Email/Phone.'
      });
    }, 1500);
  };

  return (
    <div className="track-page-wrapper">
      <div className="track-container">

        <div className="track-icon-wrapper">
          <MapPin size={36} />
        </div>

        <h1>Track Your Booking</h1>
        <p>Enter your tracking details below to instantly see the real-time status of your Duolingo English Test purchase.</p>

        <form className="track-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="identifier">Email or Phone Number</label>
            <div className="input-with-icon">
              <KeyRound size={20} className="input-icon" />
              <input
                type="text"
                id="identifier"
                placeholder="Ex. 98XXXXXXXX"
                value={formData.identifier}
                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="bookingId">Tracking ID</label>
            <div className="input-with-icon">
              <Search size={20} className="input-icon" />
              <input
                type="text"
                id="bookingId"
                placeholder="Ex. DUO-123456"
                value={formData.bookingId}
                onChange={(e) => setFormData({ ...formData, bookingId: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="track-submit-btn" disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={22} className="spinner" />
                Searching...
              </>
            ) : (
              'Track Status'
            )}
          </button>

          {result && (
            <div className={`tracking-result ${result.success ? 'success' : 'error'}`}>
              {result.message}
            </div>
          )}
        </form>

      </div>
    </div>
  );
};

export default TrackBooking;
