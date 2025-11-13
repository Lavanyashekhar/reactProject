import React, { useState } from "react";

/**
 * Simple, mock player list. Replace with Spotify/YouTube/Apple Music API integration.
 */
export default function MusicPlayer({ mood, songs = [], emptyMessage = "No songs." }) {
  const [current, setCurrent] = useState(null);

  return (
    <div>
      <p style={{ marginTop: 0, color: "var(--text-dim)" }}>
        {mood ? `Mood context: ${mood}` : "No mood selected yet"}
      </p>

      {songs.length === 0 ? (
        <p style={{ opacity: 0.8 }}>{emptyMessage}</p>
      ) : (
        <ul className="list">
          {songs.map((s, idx) => (
            <li key={idx} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <span>{s}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn" onClick={() => setCurrent(s)}>Play</button>
                <button className="btn secondary" onClick={() => alert("Feedback saved! 👍")}>
                  👍
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {current && (
        <div style={{ marginTop: 16 }}>
          <div className="badge">▶️ Now Playing: {current}</div>
        </div>
      )}
    </div>
  );
}
