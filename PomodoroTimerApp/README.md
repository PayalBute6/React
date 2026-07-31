# Glassmorphic Pomodoro Timer

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

A beautiful, modern, and feature-rich Pomodoro Productivity Timer application built with **React**, **TypeScript**, and **Vite**. 

This app features a state-of-the-art dark-mode glassmorphic user interface that dynamically adapts its color theme based on whether you are in a **Focus Session** or taking a **Break**.

---

## Features

- **Dynamic Backgrounds:** Automatically transitions background gradients between a warm focus-red (`#ff6b6b`) and a relaxing rest-green (`#2ecc71`).
- **Circular Progress SVG Ring:** A sleek circular SVG indicator that shrinks smoothly in real-time as the countdown progresses.
- **Web Audio API Chime:** Plays a clean bell chime upon session expiry—synthesized programmatically in the browser without loading audio files.
- **Customizable Durations:** Customize work and break durations inline. Inputs are safely locked while the timer is active to avoid accidental resets.
- **Pulsing Glow Effect:** Visual pulse notifications that animate behind the timer ring during active countdowns.

---

## Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/) (TypeScript)
- **Bundler:** [Vite](https://vite.dev/)
- **Styling:** Custom CSS3 with dynamic theme-variables and 3D transition layers.
- **Timer Engine:** Programmed using React `useState`, `useEffect`, and component refs (`useRef`) to guarantee drift-free tick accuracy.

---

## Project Structure

```text
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

## How to Run Locally

### 1. Install Dependencies
Navigate to the project directory and run `npm install`:
```bash
cd PomodoroTimerApp
npm install
```

### 2. Launch Development Server
Start Vite's dev server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Production Build
Verify TypeScript types and build the production assets:
```bash
npm run build
```

---

## License

This project is open-source under the MIT License.
