# Astro Portfolio

A minimal, fast portfolio site built with Astro, Tailwind CSS, and a clean sidebar layout.

## Features

- Data-driven sections for experience, projects, skills, and education
- Sticky sidebar navigation with section highlighting
- Subtle background effects (dot grid + cursor glow)
- Responsive layout optimized for desktop and mobile

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- lucide-astro icons

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/        # UI components (sidebar, etc.)
│   ├── data/              # Content data (experience, projects, skills)
│   ├── layouts/           # Base layout
│   ├── pages/             # Routes
│   ├── scripts/           # Client-side scripts
│   └── styles/            # Global styles
└── package.json
```

## Getting Started

Install dependencies and run the dev server:

```sh
npm install
npm run dev
```

Build and preview locally:

```sh
npm run build
npm run preview
```

## Customize Content

- Update sections in `src/pages/index.astro`
- Edit sidebar details and social links in `src/components/Sidebar.astro`
- Update data sources in `src/data/*.ts`
- Adjust theme tokens and global styles in `src/styles/global.css`

## Scripts

- `npm run dev` - Start the local dev server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build
- `npm run astro` - Run Astro CLI commands

## Deployment

This project builds to a static site (default `dist/`). Deploy the build output to any static hosting provider.

