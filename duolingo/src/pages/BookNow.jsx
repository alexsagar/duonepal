import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  UploadCloud,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  FileText,
  Calendar
} from "lucide-react";
import "../styles/BookNow.css";
import { apiUrl } from "../utils/api";

const esewaQR = {
  label: "eSewa",
  img: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1751799253/Screenshot_2025-07-06_163854_sikynx.png",
  alt: "eSewa QR"
};

const BookNow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    receipt: null,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [modal, setModal] = useState({ open: false, img: "", alt: "" });

  const handleChange = (e) => {
    if (e.target.name === "receipt") {
      setForm({ ...form, receipt: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Full name is required!");
      return false;
    }
    if (!form.email.trim()) {
      toast.error("Email is required!");
      return false;
    }
    if (!form.phone.trim()) {
      toast.error("Phone is required!");
      return false;
    }
    if (!form.receipt) {
      toast.error("Payment receipt is required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    // Include package info
    formData.append('tier', 'standard');
    formData.append('price', '8500');

    try {
      const response = await fetch(apiUrl("/api/book"), {
        method: "POST",
        cache: "no-store",
        referrerPolicy: "no-referrer",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.message || data?.error || "Booking request failed");
      }

      setResult({ success: data.success, message: data.message });
      setLoading(false);

      if (data.success) {
        toast.success("Booking successful! We will contact you soon.");
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          receipt: null,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.message || "Failed to book. Try again.");
    }
  };

  return (
    <div className="booknow-page-wrapper">

      <div className="booknow-split-container">

        {/* Left Panel: Information & Payment */}
        <div className="booknow-info-panel">
          <div className="info-header">
            <div className="pulse-badge">
              <ShieldCheck size={16} />
              <span>Secure Official Booking</span>
            </div>
            <h1>Complete Your Booking</h1>
            <p className="info-subtitle">Pay securely using local wallets and upload the receipt to verify your account.</p>
          </div>

          <div className="price-overview-card">
            <span className="overview-label">Current Price</span>
            <div className="price-tag">
              <span className="currency">NPR</span>
              <span className="amount">8,500</span>
            </div>
          </div>

          <div className="payment-instructions-card">
            <div className="card-header-flex">
              <CreditCard size={20} className="indigo-icon" />
              <h3>Scan to Pay</h3>
            </div>
            <p>Use your eSewa app to scan the QR code below. Please save the successful transaction screenshot.</p>

            <div className="qr-box-premium">
              <img
                src={esewaQR.img}
                alt={esewaQR.alt}
                className="qr-image-clickable"
                loading="lazy"
                decoding="async"
                onClick={() => setModal({ open: true, img: esewaQR.img, alt: esewaQR.alt })}
              />
              <span className="click-to-enlarge">Click to enlarge</span>
            </div>
          </div>

          <ul className="booking-perks-list">
            <li><CheckCircle2 size={18} className="success-icon" /> Fast confirmation within 24 hours</li>
            <li><CheckCircle2 size={18} className="success-icon" /> 21 days test activation validity</li>
            <li><CheckCircle2 size={18} className="success-icon" /> Priority support during the process</li>
          </ul>
        </div>

        {/* Right Panel: The Form */}
        <div className="booknow-form-panel">
          <form
            className="premium-booking-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            <div className="form-legend">
              <FileText size={20} className="indigo-icon" />
              <div className="legend-text">
                <h3>Student Details</h3>
                <p>Ensure these perfectly match your legal ID.</p>
              </div>
            </div>

            <div className="input-group-grid">

              <div className="input-field-wrapper">
                <label htmlFor="name">Full Legal Name</label>
                <div className="input-with-icon">
                  <User size={18} className="field-icon" />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="E.g., Ram Bahadur Karki"
                    required
                  />
                </div>
              </div>

              <div className="input-field-wrapper">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="field-icon" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter an active email"
                    required
                  />
                </div>
              </div>

              <div className="input-field-wrapper">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <div className="input-with-icon">
                  <Phone size={18} className="field-icon" />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98XXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div className="input-field-wrapper">
                <label htmlFor="date">Preferred Test Date</label>
                <div className="input-with-icon">
                  <Calendar size={18} className="field-icon" />
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    onClick={(e) => e.target.showPicker?.()}
                    min={new Date().toISOString().split('T')[0]}
                    placeholder="Select a date"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>

            </div>

            <div className="receipt-upload-wrapper">
              <label htmlFor="receipt">Upload Payment Receipt</label>
              <div className={`file-drop-zone ${form.receipt ? 'has-file' : ''}`}>
                <input
                  id="receipt"
                  type="file"
                  name="receipt"
                  accept="image/*,application/pdf"
                  onChange={handleChange}
                  className="hidden-file-input"
                  required
                />

                {form.receipt ? (
                  <div className="file-selected-state">
                    <CheckCircle2 size={28} className="success-icon" />
                    <span className="selected-filename">{form.receipt.name}</span>
                    <span className="file-change-hint">Click to change file</span>
                  </div>
                ) : (
                  <div className="file-empty-state">
                    <div className="icon-circle">
                      <UploadCloud size={24} className="indigo-icon" />
                    </div>
                    <span className="upload-cta">Click to browse your device</span>
                    <span className="upload-hint">Upload a screenshot or PDF (Max 5MB)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="submit-action-wrapper">
              <button
                type="submit"
                className={`premium-submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="btn-content">
                    <div className="spinner"></div> Processing...
                  </span>
                ) : (
                  <span className="btn-content">Secure Booking Now</span>
                )}
              </button>

              {result && (
                <div className={`form-status-msg ${result.success ? "success" : "error"}`}>
                  {result.message}
                </div>
              )}
            </div>

          </form>
        </div>
      </div>

      {/* QR Modal Enlarge */}
      {modal.open && (
        <div className="qr-modal-overlay" onClick={() => setModal({ open: false, img: "", alt: "" })}>
          <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modal.img} alt={modal.alt} className="qr-modal-img" loading="lazy" decoding="async" />
            <button className="close-modal-btn" onClick={() => setModal({ open: false, img: "", alt: "" })}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default BookNow;
