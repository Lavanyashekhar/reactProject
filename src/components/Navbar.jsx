import React from "react";

export default function Navbar() {
  return (
    <div className="header">
      <span style={{
        width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: 9, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.16)"
      }}>🎶</span>
      <div className="title">Emotion-Based Music Recommendation</div>
    </div>
  );
}
