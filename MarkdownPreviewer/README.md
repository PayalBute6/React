# 📝 Markdown Previewer

A real-time, side-by-side Markdown editor and preview application built with **React**, **TypeScript**, and **Vite**. This application features secure markdown rendering with custom styling and document templating support.

---

## ✨ Features

- **Real-Time Preview**: Type in markdown on the left pane and see the rendered HTML update instantly on the right.
- **Secure Rendering**: Built-in HTML sanitization via `dompurify` to protect against Cross-Site Scripting (XSS) attacks.
- **Predefined Templates**: Jumpstart your documents with ready-to-use template guides (e.g., GitHub README template).
- **TypeScript Support**: Full type safety across components, utilities, and hooks.
- **Fast Build Times**: Powered by Vite and Oxlint for high-performance development and linting.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Markdown Compiler**: [Marked](https://marked.js.org/)
- **HTML Sanitization**: [DOMPurify](https://github.com/cure53/DOMPurify)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📂 Project Structure

```text
MarkdownPreviewer/
├── src/
│   ├── assets/            # Static assets
│   ├── components/        # UI components
│   │   ├── Editor.tsx     # Markdown editor textarea input
│   │   ├── Preview.tsx    # Sanitized preview container
│   │   ├── Toolbar.tsx    # Actions toolbar (copy, templates)
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   └── useMarkdown.ts # Manage editor state
│   ├── styles/            # CSS styles per component
│   ├── types/             # TypeScript types and interfaces
│   ├── utils/             # Helper utilities (parsing, templates)
│   │   ├── parser.ts      # Markdown parsing & sanitization logic
│   │   └── templates.ts   # Defined markdown templates
│   ├── App.tsx            # Main application layout
│   └── main.tsx           # Entry point
├── package.json           # Project dependencies & scripts
├── tsconfig.json          # TypeScript configurations
└── vite.config.ts         # Vite configuration
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have Node.js installed on your machine.
- [Node.js (v18 or higher recommended)](https://nodejs.org/)

### Installation

1. Navigate to the Markdown Previewer directory:
   ```bash
   cd MarkdownPreviewer
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Scripts

In the project directory, you can run:

#### Run Development Server
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:5173`. Opens in the browser and updates in real-time as you modify the code.

#### Build for Production
```bash
npm run build
```
Compiles and bundles the application for production inside the `dist` folder.

#### Run Linter
```bash
npm run lint
```
Lints the codebase using Oxlint for fast static analysis.

#### Preview Production Build
```bash
npm run preview
```
Runs a local server to preview the production-ready build.

---

## 🔒 Security First

All parsed markdown is sanitized on the fly using `DOMPurify`. This removes dangerous HTML tags and attributes (such as `<script>`, `onerror`, etc.), ensuring it is completely safe to display user-provided markdown content:

```typescript
import { marked } from "marked";
import DOMPurify from "dompurify";

export function parseMarkdown(markdown: string): string {
    const html = marked.parse(markdown) as string;
    return DOMPurify.sanitize(html);
}
```

---

## 📄 License

This project is open-source and available under the MIT License.

