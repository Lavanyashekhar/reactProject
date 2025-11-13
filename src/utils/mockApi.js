// Simulated backend: emotion detection, playlist creation, RL feedback
const EMOTIONS = [
    "Happy","Calm","Energetic","Sad","Angry","Nostalgic","Romantic","Focus","Anxious"
  ];
  
  const GENRES = ["Pop","Indie","Lo-fi","EDM","Hip-hop","Classical","Jazz","Ambient","Rock"];
  
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const id = () => Math.random().toString(36).slice(2, 9);
  
  export function detectEmotionFromAudio(fileOrStream) {
    return new Promise((res) => {
      setTimeout(() => {
        const mood = pick(EMOTIONS);
        const confidence = 0.72 + Math.random() * 0.25;
        const arousal = Math.random(); // 0–1
        const valence = Math.random(); // 0–1
        res({ mood, confidence, arousal, valence, features: { mfcc: true, spectrogram: true }});
      }, 700);
    });
  }
  
  export function createPlaylist({ currentMood, targetMood, strategy }) {
    const len = 10;
    const list = Array.from({ length: len }).map((_, i) => {
      const step = i / (len - 1);
      const blend = strategy === 'shift' && targetMood
        ? `${currentMood} → ${targetMood}`
        : currentMood;
      const title = strategy === 'shift' && targetMood
        ? `${targetMood} • Phase ${Math.ceil(step * 4)}`
        : `${currentMood} • Vibe ${i+1}`;
      return {
        id: id(),
        title: `${title}`,
        artist: pick(["Nova","Aurum","Lumen","Echoes","Solace","Pulse","Drift","Mira"]),
        mood: blend,
        genre: pick(GENRES),
        energy: Math.round(40 + step*50 + Math.random()*10),
        valence: Math.round(30 + step*50 + Math.random()*10),
        duration: 120 + Math.floor(Math.random()*180),
      };
    });
    return Promise.resolve(list);
  }
  
  export function thumbsFeedback({ trackId, up }) {
    // Simulate RL signal ack
    return new Promise((res) => setTimeout(() => res({ ok: true }), 250));
  }
  
  export function searchByQuery(q) {
    return Promise.resolve(
      Array.from({ length: 6 }).map(() => ({
        id: id(),
        title: `${q} — ${pick(["Remix","Edit","Acoustic","Chill","Extended"])}`,
        artist: pick(["Nova","Lumen","Pulse","Drift","Aurum"]),
        duration: 150 + Math.floor(Math.random()*220),
        mood: pick(EMOTIONS),
        genre: pick(GENRES),
      }))
    );
  }
  
  export const EMOTION_LIST = EMOTIONS;
  