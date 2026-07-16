# 🍅 Glassmorphic Pomodoro Timer

A beautiful, modern, and feature-rich Pomodoro Productivity Timer application built with **React**, **TypeScript**, and **Vite**. 

This app features a state-of-the-art dark-mode glassmorphic user interface that dynamically adapts its color theme based on whether you are in a **Focus Session** or taking a **Break**.

---

## ✨ Features

- **🍅 Dynamic Backgrounds:** Automatically transitions background gradients between a warm focus-red (`#ff6b6b`) and a relaxing rest-green (`#2ecc71`).
- **⭕ Circular Progress SVG Ring:** A sleek circular SVG indicator that shrinks smoothly in real-time as the countdown progresses.
- **🎵 Web Audio API Chime:** Plays a clean bell chime upon session expiry—synthesized completely programmatically in the browser without loading heavy audio assets.
- **⚙️ Customizable Durations:** Customize work and break durations inline. Inputs are safely locked while the timer is active to avoid accidental resets.
- **🔮 Pulsing Glow Effect:** Visual pulse notifications that animate behind the timer ring during active count-downs.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite
- **Styling:** Custom CSS3 with dynamic theme-variables and 3D transition layers.
- **Timer Engine:** Programmed using React `useState`, `useEffect`, and component refs (`useRef`) to guarantee drift-free tick accuracy.

---

## 📂 Project Structure

```bash
PomodoroTimerApp/
├── src/
│   ├── App.tsx          # Main component logic, timer loop, and Web Audio synthesis
│   ├── App.css          # Premium glassmorphic styles, keyframes, and buttons
│   ├── index.css        # Typography, dynamic color schemes, and root styling
│   └── main.tsx         # React bootstrap and entry point
├── package.json         # Scripts, configurations, and dependencies
└── tsconfig.json        # TypeScript configuration settings
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
Navigate to the project directory and run `npm install`:
```bash
cd PomodoroTimerApp
npm install
```

### 2. Launch the Development Server
Start Vite's fast HMR dev server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in your terminal (usually `http://localhost:5173` or the next available port).

### 3. Production Build
Verify typescript types and build the optimized production assets:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.
