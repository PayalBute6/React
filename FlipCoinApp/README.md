# FlipCoinApp - Interactive React Coin Flip Simulator

An interactive, modern React application built with **Vite** that simulates a 3D coin flip and tracks real-time statistics (total flips, heads, and tails).

## 🚀 Features

* **3D Coin Flip Animation:** Features a smooth 3D spinning animation using CSS perspective and custom keyframes when flipping the coin.
* **Modern React architecture:** Built using **React Functional Components** and **React Hooks** (`useState`).
* **Real-time Statistics Tracker:** Dynamically tracks total flips, total heads, and total tails.
* **Reset Stats:** Reset the counts and visual state back to default at any time.
* **Premium Glassmorphic UI:** Styled with a responsive glassmorphic UI, color gradients, and micro-interactions.

---

## 🛠️ Tech Stack

* **Core:** React (Functional Components, Hooks)
* **Build Tool:** Vite
* **Styling:** Vanilla CSS with standard vendor-compatible properties

---

## 💻 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed on your machine.

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

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

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
└── package.json
```
