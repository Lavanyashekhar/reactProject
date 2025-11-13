import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar.jsx";
import UploadAudio from "./components/UploadAudio.jsx";
import EmotionGauge from "./components/EmotionGauge.jsx";
import MoodPath from "./components/MoodPath.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

export default function App() {
  const [detectedMood, setDetectedMood] = useState(null);
  const [targetMood, setTargetMood] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  // Demo playlists — replace with your DB/API later
  const samplePlaylists = useMemo(
    () => ({
      Happy: ["Good Vibes - Luna", "Sunshine Drive - Nea", "Sky Dance - Kiro"],
      Sad: ["Faded Echoes - Mira", "Blue Rain - Alden", "Paper Boats - Ry"],
      Angry: ["Voltage - Prysm", "Break Walls - Kade", "No Mercy - Omen"],
      Relaxed: ["Ocean Air - Cove", "Night Breeze - Noor", "Soft Lanterns - Aki"]
    }),
    []
  );

  // Called when file is selected — (simulate detection now)
  const handleAudioUpload = (file) => {
    // TODO: send `file` to backend for MFCC/spectrogram + inference
    const moods = ["Happy", "Sad", "Angry", "Relaxed"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setDetectedMood(randomMood);
    setTargetMood(null);
    setPlaylist(samplePlaylists[randomMood] || []);
  };

  const handleSelectTarget = (mood) => {
    setTargetMood(mood);
    setPlaylist(samplePlaylists[mood] || []);
  };

  return (
    <div className="container">
      <Navbar />

      <p className="subtitle">
        Detect your emotion from voice or choose a target mood. We’ll curate a playlist that
        <strong> matches</strong> your state or <strong>guides</strong> you toward how you want to feel.
      </p>

      <div className="grid">
        {/* Left column: input + gauge + path */}
        <div className="grid-col">
          <div className="card" style={{ marginBottom: 16 }}>
            <h3 className="section-title">🎙️ Detect Mood From Audio</h3>
            <UploadAudio onUpload={handleAudioUpload} />
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h3 className="section-title">🎚️ Emotion Gauge</h3>
            <EmotionGauge mood={detectedMood} />
          </div>

          <div className="card">
            <h3 className="section-title">🧭 Mood Path (Detected → Target)</h3>
            <MoodPath
              detected={detectedMood}
              target={targetMood}
              onSelectTarget={handleSelectTarget}
            />
          </div>
        </div>

        {/* Right column: playlist */}
        <div className="grid-col">
          <div className="card">
            <h3 className="section-title">🎵 Recommended Playlist</h3>
            <MusicPlayer
              mood={targetMood || detectedMood}
              songs={playlist}
              emptyMessage="Upload audio or pick a target mood to see recommendations."
            />
          </div>
        </div>
      </div>
    </div>
  );
}



