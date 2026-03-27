# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR (http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Serve the dist/ build locally
npm run lint       # ESLint across all .js/.jsx files
```

There is no test framework configured in this project.

## Architecture

This is a single-page portfolio site built with **React 19** and **Vite 8**. There is no client-side router — the entire site lives in one page (`index.html → src/main.jsx → src/App.jsx`) and navigation is handled via anchor links (`#hero`, `#about`, `#skills`, `#projects`, `#contact`).

### Layout

`App.jsx` composes the page in order: `Navbar → HeroSection → AboutSection → SkillsSection → ProjectsSection → ContactSection → Footer`. The `Navbar` is `position: fixed` and uses anchor links to scroll between sections.

`Container` (`src/components/layout/Container.jsx`) is a thin wrapper that enforces consistent `max-w-5xl` width and horizontal padding. Every section's inner content is wrapped with it.

### Sections

Each section file in `src/components/sections/` owns its own data as top-level `const` arrays (e.g. `PROJECTS`, `CATEGORIES`, `SOCIAL`). To add or update portfolio content — projects, skills, social links, etc. — edit those arrays directly in the relevant section file; no separate data layer exists.

The `ContactSection` form is UI-only: submitting sets a local `sent` state flag to show a success message. No email service or backend is wired up.

### Styling

Tailwind CSS v4 is loaded as a **Vite plugin** (`@tailwindcss/vite`), not via PostCSS. There is no `tailwind.config.js`. The single global stylesheet is `src/index.css`, which uses `@import "tailwindcss"` (v4 syntax — not the older `@tailwind` directives).

### Animation

`framer-motion` is installed as a dependency but is not yet used anywhere in the codebase. It is available to add animations to any component.

### ESLint

The `no-unused-vars` rule is configured to ignore names matching `^[A-Z_]`, which allows inline SVG icon components (e.g. `IconGitHub`, `IconExternalLink`) defined as consts to be used without triggering the rule.
