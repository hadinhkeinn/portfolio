# SEO

Use this skill for metadata, document structure, share previews, headings, and portfolio discoverability.

## Current Context

- `BaseLayout.astro` owns the document shell, title, description, viewport, favicon, and generator meta.
- `src/pages/index.astro` provides the portfolio content and section hierarchy.
- The site is a static personal portfolio.

## Guidelines

- Keep each page title specific and human-readable.
- Keep meta descriptions concise, accurate, and aligned with visible portfolio content.
- Preserve a single primary `h1` for the person/site identity.
- Use section headings in a logical order.
- Add Open Graph or social metadata in `BaseLayout.astro` only when useful and backed by real content/assets.
- Keep canonical URLs and absolute social image URLs consistent if site URL configuration is introduced.
- Do not add SEO boilerplate that does not match the actual page content.

## Verification

- Run `npm run build`.
- Inspect the generated page head when metadata changes.
