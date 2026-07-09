# Guess the Number Game 🎲

A sleek, lightweight web-based guessing game built with **React** and **Vite**. The game generates a random number between 1 and 20, and provides real-time hints ("Higher" or "Lower") to guide the player to the correct answer.

---

## 🚀 Features

- **Dynamic Secret Number Generation**: Automatically selects a random secret integer between 1 and 20 upon initialization.
- **Interactive User Input**: Responsive input field with visual hover and focus effects.
- **Real-Time Feedback**: Immediate logic processing to display hints:
  - 📈 **Higher**: If the secret number is greater than your guess.
  - 📉 **Lower**: If the secret number is less than your guess.
  - 🎉 **Yuppiee Correct!!**: When your guess matches the secret number perfectly.
  - ⚠️ **Enter Valid Input**: For non-numeric or invalid entries.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Library**: [React 19](https://react.dev/) (Class-based container component, functional presentation component)
- **Build Tool**: [Vite](https://vite.dev/) (High-performance HMR and bundling)
- **Linter**: [Oxlint](https://github.com/oxc-project/oxc) (Ultra-fast JavaScript/JSX linting)
- **Styling**: Vanilla CSS with modern flexbox layouts and responsive states.

### Key Components

- **`App.jsx`**: The main class-based component managing the input state and holding the randomly generated secret number.
- **`Result.jsx`**: A functional component responsible for executing game logic and outputting conditional hints.

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Navigate to the project directory:
   ```bash
   cd GuessTheNumber
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Scripts

Run the following commands using npm:

- **Start Development Server**:
  ```bash
  npm run dev
  ```
  Runs the app in development mode with hot-reloading active.

- **Build for Production**:
  ```bash
  npm run build
  ```
  Builds the application into the `dist/` folder for production hosting.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```
  Starts a local server to preview the built application.

- **Lint Codebase**:
  ```bash
  npm run lint
  ```
  Performs rapid linting checks using `oxlint`.

