# Design Guidelines

Current design tokens and rules. The tokens live in one place, `src/app/globals.css` (`@theme` block). When the new design system arrives, replace the values there; components use token names, not raw colors.

## Colors

| Token | Value | Tailwind class examples | Use |
|---|---|---|---|
| `brand` | `#BC0F29` | `bg-brand`, `text-brand` | Primary color (crimson red sampled from the logo): buttons, accents, active states |
| `brand-dark` | `#9A0C21` | `hover:bg-brand-dark` | Hover state; also text on `brand-soft` (contrast) |
| `brand-soft` | `#FDECEF` | `bg-brand-soft` | Light tint behind icons, badges, active nav item |
| `ink` | `#1A1A1A` | `text-ink` | Body text |
| `navy` | `#0E1D67` | `text-navy`, `bg-navy` | Brand navy: headings, footer background |
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

## Dark mode

A sun/moon button in the header switches themes. The choice is saved in the browser (`localStorage`, key `theme`); on the first visit the system setting (`prefers-color-scheme`) decides. The switch sets `<html data-theme="dark">`, and `globals.css` redefines the same token names for that case, so components need no dark-specific classes.

| Token | Light | Dark |
|---|---|---|
| `surface` (page) | `#F8FAFC` | `#0B1020` |
| `card` | `#FFFFFF` | `#131A30` |
| `line` | `#E2E8F0` | `#263052` |
| `ink` (body text) | `#1A1A1A` | `#E5E7EB` |
| `navy` (headings) | `#0E1D67` | `#E8ECFF` |
| `muted` | `#475569` | `#A3AEC7` |
| `brand` | `#BC0F29` | `#E8334D` (lighter so it stays readable on dark) |
| `brand-ink` (text on `brand-soft`) | `#9A0C21` | `#FF8A9A` |
| `footer` | `#0E1D67` | `#060914` |

Rules: use `bg-footer` for the always-dark footer, `text-brand-ink` for text on `bg-brand-soft`, and `bg-chip` for neutral badges. Do not use fixed colors such as `bg-white` or `text-slate-*` in components, or they will not follow the theme. The icons come from `lucide-react` (ISC), already listed in `LIBRARY.md`.

## Motion

Not added yet. Planned as a later step: animation references and design briefs will be reviewed first, then adapted.
