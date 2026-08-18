# AGENTS.md

This is an Astro static portfolio site using TypeScript, Tailwind CSS 4, lucide-astro, and Cloudflare/Wrangler for preview/deploy.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Build: `npm run build`
- Preview production build: `npm run preview`
- Generate Cloudflare types: `npm run generate-types`
- Deploy: `npm run deploy`

## Working Rules

- Keep this project frontend-only unless the repository adds real backend code.
- Prefer Astro components, typed data files in `src/data`, and existing CSS tokens in `src/styles/global.css`.
- Keep content updates data-driven when possible.
- Preserve the current shadcn-style design: single-column app shell with a sticky top nav, a 1024px content column, light/dark themes driven by the `.dark` class on `<html>`, and the zinc token set in `src/styles/global.css` (`--bg`, `--fg`, `--muted`, `--border`, `--card`, `--accent`, `--btn-bg`).
- Type is Geist Sans with Geist Mono for dates, eyebrows, and chips; keep borders and neutral fills as the only separators — no glows or accent colors.
- Use the relevant skill in `.agents/skills/` for domain-specific guidance.
