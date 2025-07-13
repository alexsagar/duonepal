import React from "react";

const PracticeQuestions = () => (
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
      Practice Questions
    </h2>
    <p style={{
      color: "#64748b", fontSize: "1.1rem", marginBottom: 24
    }}>
      Try real Duolingo-style questions for reading, writing, speaking, and listening.  
      Practicing with official questions will boost your confidence and performance.
    </p>
    <a
      href="https://englishtest.duolingo.com/practice"
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
      Go to Duolingo Practice →
    </a>
    <div style={{ color: "#8B5CF6", fontWeight: 500, marginTop: 16 }}>
      Tip: Practice with real questions for the best results!
    </div>
  </div>
);

export default PracticeQuestions;
