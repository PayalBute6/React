# 🎨 Color Box App

An interactive, responsive grid of vibrant color boxes built with **React**, **TypeScript**, and **Vite**. Clicking on any color box randomly changes its color without affecting the other boxes in the grid.

---

## ✨ Features

- **🎨 Interactive Grid:** Renders a grid of 18 vibrant color boxes by default.
- **⚡ Independent State Updates:** Clicking any individual box recalculates and transitions its RGB color state independently.
- **🎲 Random RGB Generation:** Uses helper utilities to generate distinct `rgb(r, g, b)` colors while ensuring consecutive click changes generate a brand new color.
- **📐 Responsive Flexbox/Grid Layout:** Centers boxes dynamically across desktop and mobile screens.
- **🛡️ Strict TypeScript Typing:** Interfaces for component props (`BoxProps`, `BoxContainerProps`) and state management.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/) (Class Components & TypeScript)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Custom Vanilla CSS with Flexbox container layouts

---

## 📂 Codebase Structure

```text
ColorBoxApp/
├── src/
│   ├── components/
│   │   ├── Box.tsx            # Individual color box component handling click events
│   │   ├── BoxContainer.tsx   # Parent container managing the color state array
│   │   ├── BoxContainer.css   # Grid container layout & sizing styles
│   │   └── helper.tsx         # Random RGB generator utilities
│   ├── App.css                # Application wrapper styling
│   ├── App.tsx                # Root layout component
│   ├── index.css              # Global styles and layout resetting
│   └── main.tsx               # Application bootstrap & DOM entry point
├── package.json               # Project dependencies and script runner
├── tsconfig.json              # TypeScript compiler settings
└── vite.config.ts             # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation & Execution

1. Navigate to the `ColorBoxApp` directory:
   ```bash
   cd ColorBoxApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📝 License

This project is open-source and available under the MIT License.
