import React from "react";

const TestDayChecklist = () => (
  <div style={{
    background: "#fff",
    borderRadius: 32,
    padding: "2.5rem 2rem",
    boxShadow: "0 12px 40px rgba(139,92,246,0.07)",
    maxWidth: 480,
    width: "100%",
    margin: "0 auto",
    textAlign: "center"
  }}>
    <h2 style={{
      fontWeight: 800, fontSize: "2rem", marginBottom: 16, color: "#1e293b"
    }}>
      Test Day Checklist
    </h2>
    <p style={{
      color: "#64748b", fontSize: "1.1rem", marginBottom: 24
    }}>
      Everything to prepare on test day—ID, internet, camera setup, and more.
    </p>
    <ul style={{
      textAlign: "left", margin: "0 auto 24px auto", maxWidth: 400, color: "#1e293b"
    }}>
      <li>Valid government-issued photo ID</li>
      <li>Quiet, well-lit room with no distractions</li>
      <li>Reliable internet connection</li>
      <li>Computer with working camera, mic, and speakers</li>
      <li>Remove study materials and devices from your desk</li>
    </ul>
    <div style={{ color: "#8B5CF6", fontWeight: 500 }}>
      Tip: Log in 30 minutes early and double-check your setup!
    </div>
  </div>
);

export default TestDayChecklist;
