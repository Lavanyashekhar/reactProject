import React, { useState } from "react";

export default function UploadAudio({ onUpload }) {
  const [fileName, setFileName] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    onUpload?.(file); // simulate detection (replace with real API call)
  };

  return (
    <div>
      <p style={{ marginTop: 0, color: "var(--text-dim)" }}>
        Upload an audio clip (mp3/wav). The system will analyze MFCC/spectrogram to classify emotion.
      </p>
      <label className="btn" htmlFor="audio-input">Choose Audio</label>
      <input
        id="audio-input"
        type="file"
        accept="audio/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {fileName && (
        <div style={{ marginTop: 12 }}>
          <span className="badge">📂 Uploaded: {fileName}</span>
        </div>
      )}
    </div>
  );
}
