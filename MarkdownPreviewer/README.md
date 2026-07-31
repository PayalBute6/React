# 📝 Markdown Previewer

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

A real-time, side-by-side Markdown editor and preview application built with **React**, **TypeScript**, and **Vite**. This application features secure markdown rendering with custom styling and document templating support.

---

## ✨ Features

- **⚡ Real-Time Preview**: Type markdown on the left pane and see the rendered HTML update instantly on the right.
- **🔒 Secure Rendering**: Built-in HTML sanitization via `DOMPurify` to protect against Cross-Site Scripting (XSS) attacks.
- **📜 Predefined Templates**: Jumpstart your documents with ready-to-use template guides (e.g., GitHub README template).
- **🛡️ TypeScript Support**: Full type safety across components, utilities, and custom hooks.
- **⚡ Fast Build Times**: Powered by Vite and Oxlint for high-performance development and linting.

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
│   │   ├── Editor.tsx     # Markdown editor input area
│   │   ├── Preview.tsx    # Sanitized HTML preview pane
│   │   └── Toolbar.tsx    # Action bar (copy, templates)
│   ├── hooks/             # Custom React hooks
│   │   └── useMarkdown.ts # Editor state hook
│   ├── styles/            # CSS styles per component
│   ├── types/             # Shared TypeScript types
│   ├── utils/             # Helper utilities
│   │   ├── parser.ts      # Markdown parsing & DOMPurify sanitization
│   │   └── templates.ts   # Defined markdown document templates
│   ├── App.tsx            # Main application layout
│   └── main.tsx           # Application entry point
├── package.json           # Project dependencies & scripts
├── tsconfig.json          # TypeScript configurations
└── vite.config.ts         # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js (v18 or higher recommended)](https://nodejs.org/)

### Installation & Run

1. Navigate to the `MarkdownPreviewer` directory:
   ```bash
   cd MarkdownPreviewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```
   Starts Vite dev server at `http://localhost:5173`.

### Development Scripts

- **Start Dev Server:** `npm run dev`
- **Build Production Bundle:** `npm run build`
- **Run Linter:** `npm run lint`
- **Preview Production Build:** `npm run preview`

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

## 📝 License

This project is open-source under the MIT License.
