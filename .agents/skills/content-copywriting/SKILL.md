# Content Copywriting

Use this skill for portfolio biography, experience bullets, project descriptions, skills, education, and sidebar copy.

## Content Locations

- Main about copy: `src/pages/index.astro`
- Experience entries: `src/data/experience.ts`
- Project entries: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Sidebar identity and links: `src/components/Sidebar.astro`

## Guidelines

- Keep copy concise, concrete, and credible.
- Prefer specific outcomes, systems, technologies, and responsibilities over vague claims.
- Keep tense consistent: current role in present tense, past roles in past tense.
- Keep bullet lists parallel and scannable.
- Avoid overstating seniority, ownership, scale, or impact beyond the provided facts.
- Preserve the professional engineering tone already used by the portfolio.
- Keep labels short enough for cards, tags, and mobile layouts.

## Verification

- Run `npm run build` after content edits.
- Visually check long labels, bullets, and project descriptions on mobile.
