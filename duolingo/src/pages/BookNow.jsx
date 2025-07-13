import React, { useState } from "react";
import toast from "react-hot-toast";
import "../styles/BookNow.css";

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

  // Validate form fields and show toast
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

    try {
      const response = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult({ success: data.success, message: data.message });
      setLoading(false);
      if (data.success) {
        toast.success("Booking successful! We will contact you soon.");
        setForm({
          name: "",
          email: "",
          phone: "",
          receipt: null,
        });
      }
    } catch (err) {
      setLoading(false);
      toast.error("Failed to book. Try again.");
    }
  };

  return (
    <div className="booknow-form-outer">
      <div className="booknow-form-wrapper">
        <h2>Book Your Duolingo Test</h2>
        <form
          className="booknow-form-grid"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {/* Column 1 */}
          <div className="form-col">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="As per your passport"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="This email will be used to book your test"
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* Column 2 */}
          <div className="form-col">
            <div className="payment-section">
              <div className="qr-title">Pay with eSewa</div>
              <div className="qr-row-single">
                <div className="qr-method" style={{ alignItems: "center" }}>
                  <img
                    src={esewaQR.img}
                    alt={esewaQR.alt}
                    className="qr-image-large"
                    onClick={() => setModal({ open: true, img: esewaQR.img, alt: esewaQR.alt })}
                  />
                </div>
              </div>
              <small className="qr-hint">Scan the QR above to pay and upload your payment receipt below.</small>
            </div>
            <label htmlFor="receipt">Payment Receipt</label>
            <div className="custom-file-input">
              <label className="upload-btn">
                Upload
                <input
                  id="receipt"
                  type="file"
                  name="receipt"
                  accept="image/*,application/pdf"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </label>
              <span className="file-name">{form.receipt ? form.receipt.name : "No file chosen"}</span>
            </div>
          </div>

          {/* Full width button row */}
          <div className="form-row-full">
            <button type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Now"}
            </button>
            {result && (
              <div className={result.success ? "success-msg" : "error-msg"}>
                {result.message}
              </div>
            )}
          </div>
        </form>

        {/* Modal for QR image enlarge */}
        {modal.open && (
          <div className="qr-modal" onClick={() => setModal({ open: false, img: "", alt: "" })}>
            <img src={modal.img} alt={modal.alt} className="qr-modal-img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookNow;
