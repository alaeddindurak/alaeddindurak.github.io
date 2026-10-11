# Portfolio Website

Personal portfolio site built with Next.js (App Router), React, TypeScript and Tailwind CSS. Exported as a static site (suitable for GitHub Pages).

## Pages

| Route | Content |
|---|---|
| `/` | Hero and about me |
| `/projects` | Project cards |
| `/social` | Instagram and LinkedIn |
| `/contact` | Phone and e-mail |

## Edit your content

You normally only edit these files; components just render them:

- `src/data/site.ts`: name, headline, biography, phone, e-mail, social links
- `src/data/projects.ts`: project list
- `src/data/navigation.ts`: menu items

Items marked `TODO` are placeholders to replace.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server at http://localhost:3000 |
| `npm run build` | Build the static site into `out/` |
| `npm run lint` | Check code style and common bugs |
| `npm run typecheck` | Check TypeScript types |
| `npm test` | Run unit tests |
| `npm run format` | Format all files with Prettier |

## Project structure

```
src/
  app/          routes (layout.tsx, page.tsx, projects/, social/, contact/) and globals.css (design tokens)
  components/   ui/ (primitives), layout/ (header, footer), sections/ (page blocks)
  data/         editable content
  lib/          small helpers (cn)
  types/        shared TypeScript types
```

## More documents

- `LIBRARY.md`: every library, its purpose, version and security notes (keep it updated)
- `DESIGN.md`: design tokens and guidelines

## Conventions

Code, identifiers and comments are in English. Only visitor-facing text is Turkish.
