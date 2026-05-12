# Accessibility

Use this skill for semantic markup, keyboard behavior, motion, color contrast, and interactive elements.

## Guidelines

- Keep sections identifiable with stable `id` values and `data-section` attributes when used by scroll spy.
- Ensure buttons have accessible names through visible text or `aria-label`.
- Keep navigation links meaningful and pointing to existing section IDs.
- Preserve `rel="noopener noreferrer"` on external links opened in a new tab.
- Maintain visible focus states for links, buttons, and other controls.
- Avoid interactions that require hover only.
- Consider `prefers-reduced-motion` when adding new animations.
- Keep decorative elements hidden from assistive tech with `aria-hidden="true"` when appropriate.

## Verification

- Run `npm run build`.
- Check keyboard access for navigation and mobile menu changes.
