import React from "react";

const ScoringExplained = () => (
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
      Scoring Explained
    </h2>
    <p style={{
      color: "#64748b", fontSize: "1.1rem", marginBottom: 24
    }}>
      Understand how the Duolingo English Test is scored and what your score means for universities.
    </p>
    <ul style={{
      textAlign: "left", margin: "0 auto 24px auto", maxWidth: 400, color: "#1e293b"
    }}>
      <li>DET is scored from 10 to 160 in 5-point increments.</li>
      <li>Your score reflects reading, writing, speaking, and listening skills.</li>
      <li>Most universities require 105–120+ for undergraduate admission.</li>
      <li>Practice and review official materials to target your goal score.</li>
    </ul>
    <div style={{ color: "#8B5CF6", fontWeight: 500 }}>
      Tip: Check your university requirements and set your score target!
    </div>
  </div>
);

export default ScoringExplained;
