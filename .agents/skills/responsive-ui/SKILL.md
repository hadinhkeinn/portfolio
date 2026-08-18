# Responsive UI

Use this skill for layout, spacing, mobile navigation, and viewport-specific UI changes.

## Current Layout

- A sticky top nav sits above a single content column capped at `--container` (1024px) by the `.shell` class.
- Below 860px the nav links collapse into a dropdown toggled by `initNavMenu()`.
- Sections use border separators, generous vertical spacing, and bordered cards.
- The visual style is shadcn/zinc: neutral, bordered, restrained, and theme-aware in light and dark.

## Guidelines

- Preserve the sticky-nav layout and the mobile dropdown behavior.
- Check both mobile and desktop breakpoints when changing section width, spacing, or navigation.
- Keep text readable without overlap or clipping at narrow widths.
- Prefer stable dimensions for repeated cards, tags, buttons, and icon controls.
- Avoid layout shifts caused by hover states, dynamic labels, or reveal animations.
- Keep cards and panels visually restrained; do not introduce landing-page hero patterns unless requested.

## Verification

- Run `npm run build`.
- Visually check at least a narrow mobile viewport and a desktop viewport when layout changes are made.
