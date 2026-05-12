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
- Preserve the current dark, compact, sidebar-based portfolio design.
- Use the relevant skill in `.agents/skills/` for domain-specific guidance.
