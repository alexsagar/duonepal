import React from "react";

const PreparationGuide = () => (
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
      Free Preparation Guide
    </h2>
    <p style={{
      color: "#64748b", fontSize: "1.1rem", marginBottom: 24
    }}>
      Learn the test format and key sections with our comprehensive downloadable guide. Covers all question types, timing, scoring, and top tips for each part of the DET.
    </p>
    <a
      href="/duolingo.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginTop: 12,
        background: "linear-gradient(90deg,#8B5CF6,#6366F1)",
        color: "#fff",
        borderRadius: 24,
        fontWeight: 600,
        padding: "0.85rem 2rem",
        textDecoration: "none",
        fontSize: "1rem",
        boxShadow: "0 4px 16px rgba(139,92,246,0.07)"
      }}
    >
      Download PDF →
    </a>
  </div>
);

export default PreparationGuide;
