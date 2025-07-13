import React from "react";

const SpeakingTestTips = () => (
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
      Speaking Test Tips
    </h2>
    <p style={{
      color: "#64748b", fontSize: "1.1rem", marginBottom: 24
    }}>
      Boost your confidence with real strategies and actionable do's and don'ts for the DET speaking section.
    </p>
    <ul style={{
      textAlign: "left", margin: "0 auto 24px auto", maxWidth: 400, color: "#1e293b"
    }}>
      <li>Speak clearly and confidently at a steady pace</li>
      <li>Use a range of vocabulary and sentence structures</li>
      <li>Answer all parts of the prompt, avoid very short or one-word answers</li>
      <li>Practice thinking out loud to organize your ideas quickly</li>
    </ul>
    <div style={{ color: "#8B5CF6", fontWeight: 500 }}>
      Tip: Use official sample questions and record yourself to improve!
    </div>
  </div>
);

export default SpeakingTestTips;
