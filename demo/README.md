# Next.js App Router Playground (`demo`)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

A modern web application environment built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4** utilizing the App Router architecture.

---

## Key Technical Highlights

- **Next.js App Router Architecture:** Organized using file-system routing inside the `app/` directory (`layout.tsx`, `page.tsx`).
- **Tailwind CSS v4:** Modern styling setup with `@tailwindcss/postcss` and dynamic utility classes.
- **Geist Font Optimization:** Automated font loading and layout shift optimization via `next/font`.
- **Strict TypeScript Integration:** Full type safety across Next.js layouts, pages, and components.
- **ESLint Code Quality:** Integrated Next.js linting rules (`eslint-config-next`).

---

## Project Architecture

```text
demo/
├── app/
│   ├── favicon.ico        # Next.js app favicon
│   ├── globals.css        # Global CSS imports & Tailwind directives
│   ├── layout.tsx         # Root HTML structure and font configuration
│   └── page.tsx           # Home page component
├── public/                # Static assets (SVG logos, images)
├── eslint.config.mjs      # Flat ESLint configuration
├── next.config.ts         # Next.js runtime configuration
├── package.json           # Scripts & dependency definitions
├── postcss.config.mjs     # PostCSS configuration for Tailwind CSS
└── tsconfig.json          # TypeScript settings
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.17+ or higher) installed.

### Installation & Execution

1. Navigate to the `demo` directory:
   ```bash
   cd demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the Next.js development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

- `npm run dev`: Start Next.js development server.
- `npm run build`: Compile and build optimized production bundle.
- `npm run start`: Launch Next.js production server.
- `npm run lint`: Run ESLint analysis across the project.

---

## License

This project is open-source under the MIT License.
