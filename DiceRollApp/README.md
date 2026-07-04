# 🎲 Interactive Dice Roll Dashboard

An interactive, premium, and feature-rich React application built on Vite. It elevates the classic dice-rolling app into a beautiful dashboard with adjustable dice counts, multiple color themes, built-in mini-games, real-time statistics tracking, and custom sound synthesis.

---

## ✨ Features

- **🎮 Dynamic Game Modes**:
  - **Free Play**: Casual roll to see your score, update stats, and view your rolling average.
  - **Double Chase**: A challenge mode where you roll until all selected dice land on the same face. Tracks your attempts!
  - **Dice Duel (VS AI)**: A turn-based match against an AI opponent. Roll in alternating turns and find out who gets the highest score in a best-of-5 rounds setup.
- **🎨 Visual Themes**:
  - Instantly customize your dice look with premium color themes: Neon Purple, Ruby Red, Emerald Green, Electric Blue, and Amber Yellow.
- **🎛️ Custom Dice Counts**:
  - Roll anywhere from 1 to 5 dice simultaneously. The dashboard automatically calculates the sum and adjusts the layout beautifully.
- **📈 Real-Time Statistics**:
  - Track **Total Rolls**, **High Score**, **Average Score**, and **Double Streaks** in a dedicated statistics panel.
- **⚡ Physical 3D Roll & Shake**:
  - Highly polished CSS keyframe animations that mimic a real dice roll, including 3D rotations, bounces, and interactive shadow scale effects.
- **🔊 Synthesized Web Audio Clatter**:
  - Robust, self-contained sound effects generated programmatically using the browser's Web Audio API. No external audio files or downloads required.
- **🎉 Confetti Celebrations**:
  - Triggers interactive particle bursts and canvas celebrations whenever you roll a double (or match all dice) or win a Duel.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19, JavaScript (JSX)
- **Bundler/Dev Server**: Vite 8, Rolldown
- **Icons**: FontAwesome React (`@fortawesome/react-fontawesome`)
- **Audio**: Web Audio API (custom synth envelope)
- **Styling**: Vanilla CSS (Responsive Flexbox/Grid, Glassmorphic panels, keyframe animations)

---

## 📂 Codebase Structure

```text
├── public/                 # Static assets
├── src/                    # Application source code
│   ├── components/         # React components & styles
│   │   ├── Die.jsx         # Renders a single die using FontAwesome icons
│   │   ├── Die.css         # Physics wobble animations & styling for Die
│   │   ├── RollDice.jsx    # Dashboard container managing games, stats & controls
│   │   └── RollDice.css    # Dashboard layout & glassmorphic styles
│   ├── utils/              # Helper utilities
│   │   └── audio.js        # Web Audio sound synthesiser for dice rolling sound
│   ├── App.jsx             # Root layout & FontAwesome setup
│   ├── index.css           # Global theme variables (light/dark mode) and base styles
│   └── main.jsx            # Application mount point
├── vite.config.js          # Vite bundler and esbuild configuration
└── package.json            # Project dependencies & script commands
```

---

## 🚀 Running the App

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview the Production Build
```bash
npm run preview
```
