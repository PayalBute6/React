# ❌⭕ Interactive Tic-Tac-Toe with Time Travel

A clean, responsive React application built on Vite implementing the classic Tic-Tac-Toe game. It includes an interactive time-travel history board that allows players to review and jump back to previous moves in the game.

---

## ✨ Features

- **🎮 Dynamic Game Flow**:
  - Automatically alternates turns between `X` and `O` players.
  - Detects and displays the winner instantly upon a completing line of 3.
  - Warns or ignores clicking on already occupied squares or after a win has been achieved.
- **⏳ Time-Travel History**:
  - Logs every move made in the game.
  - Provides interactive navigation buttons allowing players to jump back in time to any previous state of the board.
- **🎨 Responsive Grid**:
  - Simple, robust layout centered on the screen with dynamic grid boundaries.

---

## 📂 Codebase Structure

```text
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
