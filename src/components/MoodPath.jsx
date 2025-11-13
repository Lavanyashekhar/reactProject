import React from "react";

const moods = ["Happy", "Sad", "Angry", "Relaxed"];

export default function MoodPath({ detected, target, onSelectTarget }) {
  return (
    <div>
      <p style={{ marginTop: 0, color: "var(--text-dim)" }}>
        Choose a <strong>target mood</strong> to nudge the playlist using reinforcement signals over time.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Badge label="Detected" value={detected || "—"} />
        <span style={{ opacity: 0.6 }}>→</span>
        <Badge label="Target" value={target || "Not set"} />
      </div>

      <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        {moods.map((m) => (
          <button
            key={m}
            className="btn secondary"
            onClick={() => onSelectTarget?.(m)}
            title={`Shift playlist towards ${m}`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

function Badge({ label, value }) {
  return (
    <div className="badge">
      <strong>{label}:</strong> {value}
    </div>
  );
}
  
