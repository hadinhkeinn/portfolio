# Performance

Use this skill for bundle size, rendering cost, static output, animation, fonts, and dependency decisions.

## Guidelines

- Keep the site mostly static and avoid unnecessary client-side hydration.
- Do not add a framework runtime unless the feature clearly needs it.
- Keep scripts in `src/scripts` small and event-driven.
- Reuse existing font imports from `@fontsource/inter`; avoid adding extra font families casually.
- Keep animations subtle and inexpensive; avoid expensive effects on large scrolling surfaces.
- Avoid new dependencies for simple UI or content changes.
- Keep assets in `public` optimized for their display size.
- Treat `dist`, `.astro`, `.wrangler`, and `node_modules` as generated output.

## Verification

- Run `npm run build`.
- For deploy-like validation, use `npm run preview` when Cloudflare/Wrangler behavior matters.
