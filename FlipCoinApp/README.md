# 🪙 FlipCoinApp - Interactive Coin Flip Simulator

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

An interactive, modern React application built with **Vite** that simulates a 3D coin flip and tracks real-time statistics (total flips, heads, and tails).

---

## ✨ Features

- **🪙 3D Coin Flip Animation:** Features a smooth 3D spinning animation using CSS perspective and custom keyframes when flipping the coin.
- **⚛️ Modern React Architecture:** Built using React Functional Components and standard Hooks (`useState`).
- **📊 Real-time Statistics Tracker:** Dynamically tracks total flips, total heads, and total tails.
- **🔄 Reset Stats:** Reset counts and visual coin state back to default at any time.
- **💎 Premium Glassmorphic UI:** Styled with responsive glassmorphism, color gradients, and hover micro-interactions.

---

## 🛠️ Tech Stack

- **Core:** [React 19](https://react.dev/) (Functional Components, Hooks)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** Vanilla CSS with custom 3D transform keyframe animations

---

## 📂 Project Structure

```text
FlipCoinApp/
├── src/
│   ├── Components/
│   │   ├── Coin.jsx       # Component representing the visual coin faces
│   │   └── FlipCoin.jsx   # Core logic, state tracker, and controls
│   ├── App.jsx            # Main app container
│   ├── App.css            # Styles, glassmorphic layout, and 3D spin keyframes
│   ├── index.css          # Core CSS variables and global theme settings
│   └── main.jsx           # App entry point
├── package.json           # Scripts and dependencies
└── vite.config.js          # Vite config
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### Installation & Run

1. Navigate to the project directory:
   ```bash
   cd FlipCoinApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 License

This project is open-source under the MIT License.
