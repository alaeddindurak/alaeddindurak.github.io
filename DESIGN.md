# Design Guidelines

Current design tokens and rules. The tokens live in one place, `src/app/globals.css` (`@theme` block). When the new design system arrives, replace the values there; components use token names, not raw colors.

## Colors

| Token | Value | Tailwind class examples | Use |
|---|---|---|---|
| `brand` | `#FF5B00` | `bg-brand`, `text-brand` | Primary color: buttons, accents, active states |
| `brand-dark` | `#E04F00` | `hover:bg-brand-dark` | Hover state; also text on `brand-soft` (contrast) |
| `brand-soft` | `#FFF1E8` | `bg-brand-soft` | Light tint behind icons, badges, active nav item |
| `ink` | `#1A1A1A` | `text-ink` | Body text |
| `navy` | `#0F172A` | `text-navy`, `bg-navy` | Headings, footer background |
| `surface` | `#F8FAFC` | `bg-surface` | Page background |
| `card` | `#FFFFFF` | `bg-card` | Card background |
| `line` | `#E2E8F0` | `border-line` | Borders and dividers |
| `muted` | `#475569` | `text-muted` | Secondary text |

## Style

Modern, minimal, corporate. Plenty of white space, soft borders, rounded cards (`rounded-card`), one accent color. Font: Geist (loaded in `src/app/layout.tsx`).

## Layout and responsiveness

- Mobile-first. Breakpoints: `sm` 640px, `md` 768px (navigation switches from hamburger to inline links), `lg` 1024px.
- Page width is capped by `Container` (`max-w-6xl`).
- Project grid: 1 column, then 2 (`sm`), then 3 (`lg`).

## Components

- `ui/`: `Container`, `Card`, `Badge`, `Button` (a styled link), `SectionTitle`, `SocialIcon`.
- `layout/`: `Header` (with mobile menu), `Footer`.
- `sections/`: `Hero`, `About`, `ProjectCard`, `SocialLinks`, `ContactCards`.

## Accessibility

Visible focus ring on all interactive elements, `aria-label` and `aria-expanded` on the hamburger button, `aria-current="page"` on the active link, decorative icons hidden from screen readers, reduced-motion respected for smooth scrolling.

## Motion

Not added yet. Planned as a later step: animation references and design briefs will be reviewed first, then adapted.
