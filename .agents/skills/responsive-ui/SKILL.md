# Responsive UI

Use this skill for layout, spacing, mobile navigation, and viewport-specific UI changes.

## Current Layout

- Desktop uses a fixed left sidebar and `md:pl-70` main content offset.
- Mobile uses a slide-in sidebar controlled by `initMobileMenu()`.
- Sections use constrained content widths, generous vertical spacing, and compact cards.
- The visual style is dark, compact, technical, and sidebar-oriented.

## Guidelines

- Preserve the sidebar-first layout and mobile drawer behavior.
- Check both mobile and desktop breakpoints when changing section width, spacing, or navigation.
- Keep text readable without overlap or clipping at narrow widths.
- Prefer stable dimensions for repeated cards, tags, buttons, and icon controls.
- Avoid layout shifts caused by hover states, dynamic labels, or reveal animations.
- Keep cards and panels visually restrained; do not introduce landing-page hero patterns unless requested.

## Verification

- Run `npm run build`.
- Visually check at least a narrow mobile viewport and a desktop viewport when layout changes are made.
