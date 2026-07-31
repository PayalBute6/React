# 📝 React & Bootstrap Todo Task Manager

A responsive, feature-rich Task Management application built with **React**, **TypeScript**, **Vite**, and styled with **React Bootstrap**.

---

## ✨ Features

- **➕ Add Tasks:** Enter and submit new task entries into your checklist with validation checks.
- **✏️ Edit Tasks:** Update existing task descriptions inline using modal prompts.
- **🗑️ Delete Tasks:** Remove completed or obsolete items from the state array by item ID.
- **📱 Responsive Layout:** Styled with React Bootstrap components (`Container`, `Row`, `Col`, `InputGroup`, `ListGroup`).
- **🛡️ Strict TypeScript Typing:** Type safety enforced via `TodoItem` and `AppState` interfaces.
- **⚡ Immutable State Updates:** Uses pure functional state updates (`map`, `filter`, spread syntax) for predictable React component rendering.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/) (Class Components & TypeScript)
- **UI Framework:** [Bootstrap 5](https://getbootstrap.com/) & [React Bootstrap](https://react-bootstrap.github.io/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
ToDoApp/
├── src/
│   ├── App.tsx          # Main class component handling task state, CRUD operations & layout
│   ├── App.css          # App-specific styling overrides
│   ├── index.css        # Global CSS baseline
│   └── main.tsx         # DOM entry point mounting <App />
├── package.json         # Project dependencies & npm scripts
├── tsconfig.json        # TypeScript configuration settings
└── vite.config.ts       # Vite bundler setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation & Execution

1. Navigate to the project directory:
   ```bash
   cd ToDoApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📝 License

This project is open-source under the MIT License.
