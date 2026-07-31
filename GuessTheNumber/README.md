# Guess the Number Game

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

A sleek, lightweight web-based guessing game built with **React** and **Vite**. The game generates a random number between 1 and 20, and provides real-time hints ("Higher" or "Lower") to guide the player to the correct answer.

---

## Features

- **Dynamic Secret Number Generation**: Automatically selects a random secret integer between 1 and 20 upon initialization.
- **Interactive User Input**: Responsive input field with visual hover and focus effects.
- **Real-Time Feedback**: Immediate logic processing to display hints:
  - **Higher**: If the secret number is greater than your guess.
  - **Lower**: If the secret number is less than your guess.
  - **Yuppiee Correct!!**: When your guess matches the secret number perfectly.
  - **Enter Valid Input**: For non-numeric or invalid entries.

---

## Tech Stack & Architecture

- **Frontend Library**: [React 19](https://react.dev/) (Class-based container component, functional presentation component)
- **Build Tool**: [Vite](https://vite.dev/) (High-performance HMR and bundling)
- **Linter**: [Oxlint](https://github.com/oxc-project/oxc) (Ultra-fast JavaScript/JSX linting)
- **Styling**: Vanilla CSS with modern flexbox layouts and responsive states.

### Key Components

- **`App.jsx`**: Main class-based component managing input state and secret number generation.
- **`Result.jsx`**: Functional component responsible for evaluating game logic and outputting hints.

---

## Project Structure

```text
GuessTheNumber/
├── src/
│   ├── App.jsx             # Main container component holding game state
│   ├── Result.jsx          # Output hint rendering component
│   ├── App.css             # Component layout and feedback styling
│   ├── index.css           # Global typography and base rules
│   └── main.jsx            # Application entry point
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite config
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation & Run

1. Navigate to the project directory:
   ```bash
   cd GuessTheNumber
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## License

This project is open-source under the MIT License.
