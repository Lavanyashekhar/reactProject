import React, { useMemo } from "react";

/**
 * Simple radial gauge based on mood.
 * You can replace this with a canvas/SVG chart later.
 */
export default function EmotionGauge({ mood }) {
  const value = useMemo(() => {
    if (mood === "Happy") return 85;
    if (mood === "Relaxed") return 65;
    if (mood === "Sad") return 40;
    if (mood === "Angry") return 70;
    return 0;
  }, [mood]);

  const label = mood ? `${mood} • ${value}%` : "No detection yet";

  return (
    <div style={{ display: "grid", placeItems: "center", paddingBottom: 10 }}>
      <div style={{
        width: 160, height: 160, borderRadius: "50%",
        background: "conic-gradient(#ff9800 " + value + "%, rgba(255,255,255,0.12) " + value + "%)",
        display: "grid", placeItems: "center",
        border: "1px solid rgba(255,255,255,0.18)"
      }}>
        <div style={{
          width: 120, height: 120, borderRadius: "50%",
          background: "rgba(0,0,0,0.35)",
          display: "grid", placeItems: "center",
          boxShadow: "inset 0 6px 20px rgba(0,0,0,0.35)"
        }}>
          <div style={{ fontWeight: 800 }}>{value}%</div>
        </div>
      </div>
      <div style={{ marginTop: 10, color: "var(--text-dim)" }}>{label}</div>
    </div>
  );
}

  
