# Frontend Development

Use this skill for Astro component, layout, styling, and client-side interaction changes.

## Project Context

- Astro static portfolio site with `output: "static"`.
- TypeScript is strict via `astro/tsconfigs/strict`.
- Tailwind CSS 4 is loaded through `@tailwindcss/vite`.
- Icons come from `lucide-astro`.
- Main content is in `src/pages/index.astro`.
- Shared shell lives in `src/layouts/BaseLayout.astro`.
- Sidebar navigation lives in `src/components/Sidebar.astro`.
- Portfolio data lives in `src/data/*.ts`.
- Client behavior lives in `src/scripts/scrollReveal.ts`.
- Global tokens and custom CSS live in `src/styles/global.css`.

## Guidelines

- Prefer Astro components and typed data modules over adding new runtime frameworks.
- Keep portfolio sections data-driven when repeated content already comes from `src/data`.
- Reuse existing CSS variables such as `--accent`, `--bg`, `--text`, `--muted`, and `--border`.
- Use `lucide-astro` for icons when an icon is needed.
- Keep client JavaScript small and scoped to progressive behavior.
- Do not add backend, database, auth, or API patterns unless the repo actually gains those features.

## Verification

- Run `npm run build` after code or content changes that can affect rendering.
- Use `npm run dev` for local visual checks.
