# Modern Glassmorphic Calculator App

A beautiful, high-performance, and feature-rich Calculator web application built with **React**, **TypeScript**, and **Vite**. Featuring a premium glassmorphic UI design, fully persistent theme controls, a slide-out calculation history drawer, and comprehensive keyboard support.

---

## ✨ Features

- **Premium Glassmorphic Design:** Sleek translucent panels with blur filters, subtle shadows, harmonious color schemes, and fluid hover animations.
- **Persistent Theme Toggle:** Toggle between Light and Dark mode. Includes automatic detection of OS/system defaults (`prefers-color-scheme`) and persistence across page refreshes via `localStorage`.
- **Keyboard Support:** Full mapping of standard keyboard keys for operations:
  - Numbers and decimal points.
  - Operators (`+`, `-`, `*` mapped to `×`, `/` mapped to `÷`).
  - Actions (`Enter` / `=` to evaluate, `Backspace` to delete, `Escape` / `C` to clear).
- **Slide-out History Drawer:** Access past calculations instantly via a sidebar slide-in drawer. Includes options to inspect past entries or completely clear the log.
- **Robust Math Evaluator:** Safe calculation parser that elegantly handles division by zero (`Cannot divide by zero` message), removes trailing operators before computation, and prevents invalid inputs like consecutive decimals (`5.5.5`).

---

## 🛠️ Tech Stack

* **Frontend Library:** [React 19](https://react.dev/)
* **Type System:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vite.dev/)
* **Styling:** Custom CSS with CSS Variables for theme switching.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Button.tsx          # Individual calculator button component
│   ├── Calculator.tsx      # Main application orchestrator & layout
│   ├── Display.tsx         # Calculation output and formula display screen
│   ├── HistoryDrawer.tsx   # Slide-over panel containing calculation logs
│   ├── Keypad.tsx          # Button grid wrapper component
│   └── ThemeToggle.tsx     # Light/Dark mode toggler button
├── hooks/
│   ├── useCalculator.ts    # Calculator calculation state hook
│   ├── useKeyboard.ts      # Keydown listeners and shortcut mapping hook
│   └── useTheme.ts         # LocalStorage and theme synchronizer hook
├── styles/
│   ├── animations.css      # Custom animations (slide-ins, button presses)
│   ├── calculator.css      # Core component layout styles
│   └── variables.css       # Theme colors, gradients, and font tokens
├── types/
│   ├── calculator.ts       # Shared TypeScript types
│   └── history.ts          # History item data contracts
├── utils/
│   ├── evaluateExpression.ts # Order-of-operations expression evaluator
│   └── operators.ts        # Arithmetic operation handlers
└── main.tsx                # App entrypoint
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your computer.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or above recommended).

### Installation

1. Navigate to the project root directory:
   ```bash
   cd CalculatorApp
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local URL displayed in the console (usually `http://localhost:5173`).

### Commands

- **Start Dev Server:** `npm run dev`
- **Build Production Bundle:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint Codebase:** `npm run lint`

---

## 📝 License

This project is open-source and available under the MIT License.
