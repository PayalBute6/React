# 🌐 React Components & Router Sandbox (`myapp`)

A React application built with **Vite** and **React Router**, demonstrating foundational React architecture patterns including client-side routing, prop lifting, and stateful search filtering.

---

## ✨ Features

- **🌐 Client-Side Routing:** Powered by `react-router-dom` with routes for `/gallery` and `/products`.
- **🔍 Filterable Product Table (`/products`):**
  - Live search input filtering products by name in real-time.
  - Stock availability toggle checkbox ("Only show products in stock").
  - Dynamic categorization rows grouping products into categories (Fruits, Vegetables, Dairy).
  - Visual styling feedback for out-of-stock items (highlighted in red).
- **🖼️ Scientists Gallery (`/gallery`):** Reusable scientist profile cards displaying images, names, and accomplishment lists.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/)
- **Router:** [React Router 7](https://reactrouter.com/) (`BrowserRouter`, `Routes`, `Route`)
- **Build Tool:** [Vite](https://vite.dev/)
- **State Management:** React `useState` hooks for search filters and stock check states.

---

## 📂 Project Structure

```text
myapp/
├── src/
│   ├── pages/
│   │   ├── gallary.jsx     # Gallery showcase component displaying profile cards
│   │   └── products.jsx    # Searchable & filterable product table container & subcomponents
│   ├── App.css             # Page wrapper styling
│   ├── App.jsx             # React Router setup & route definitions
│   ├── index.css           # Global baseline styles
│   └── main.jsx            # Entry point mounting <App /> to DOM
├── package.json            # Project dependencies & script commands
└── vite.config.js          # Vite config
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation & Run

1. Navigate to the project folder:
   ```bash
   cd myapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Explore available routes in your browser:
   - `http://localhost:5173/gallery`
   - `http://localhost:5173/products`

---

## 📝 License

This project is open-source under the MIT License.
