# ❌⭕ Interactive Tic-Tac-Toe with Time Travel

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

A clean, responsive React application built on **Vite** implementing the classic Tic-Tac-Toe game. It includes an interactive time-travel history board that allows players to review and jump back to previous moves in the game.

---

## ✨ Features

- **🎮 Dynamic Game Flow**:
  - Alternates turns automatically between `X` and `O` players.
  - Detects and displays the winner instantly upon completing a 3-in-a-row line.
  - Prevents clicks on occupied squares or after a player has won.
- **⏳ Time-Travel History**:
  - Logs every move made during the game.
  - Provides interactive navigation buttons allowing players to jump back in time to any previous state of the board.
- **📐 Responsive Grid**:
  - Simple, robust layout centered on screen with dynamic grid boundaries.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** Vanilla CSS Grid & Flexbox

---

## 📂 Codebase Structure

```text
TicTacToe/
├── public/                 # Static assets
├── src/                    # Application source code
│   ├── App.jsx             # Main game logic, state, and UI components (Square, Board, Game)
│   ├── index.css           # Grid layouts, square sizing, and baseline styling
│   └── main.jsx            # Entry point mounting <Game /> to the DOM
├── index.html              # Main index page structure
├── vite.config.js          # Vite config
└── package.json            # Project configuration and script commands
```

---

## 🚀 Running the App

### 1. Install Dependencies
```bash
cd TicTacToe
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📝 License

This project is open-source under the MIT License.
