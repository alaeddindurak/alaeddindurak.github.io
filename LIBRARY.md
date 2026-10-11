# Library Registry

Every third-party package used by this project, why it is here, and its security / compatibility status.

> **Rule:** whenever a package is added, upgraded or removed, update this file in the same change and bump the "Last updated" line.

**Last updated:** 2026-10-12 · **Node.js:** 24 LTS (Next.js requires >= 20.9) · **Package manager:** npm

## Licensing policy (decided by the owner, 2026-10-12)

This applies to **fonts, icons, animations and animation libraries**, and in general to everything shipped to visitors.

1. **Only free and open-source licenses.** Allowed: MIT, ISC, Apache-2.0, BSD-2/3-Clause, 0BSD, CC0-1.0, SIL OFL 1.1 (fonts), Unlicense. Fonts, icons and animations may also be public domain.
2. **No paid, trial or "free for personal use only" assets**, no unlicensed images or fonts found online.
3. **Needs a closer look before use:** licenses that require attribution (e.g. CC-BY: the credit must be shown on the site) and copyleft licenses (GPL, LGPL, AGPL, MPL), because they can place obligations on our own code.
4. **Owner approval first.** Before installing or adding any font, icon set, animation or animation library, Claude presents it with name, purpose, license, version and a security / compatibility check, and waits for the owner's explicit approval. Nothing in these categories is added without that approval.
5. **Record it here.** Every approved addition gets an entry in the tables below, including its license, in the same change.

### Current status of these categories

| Category | In use | License | Notes |
|---|---|---|---|
| Font | Geist (via `next/font/google`) | SIL OFL 1.1 | Downloaded at build time and served from our own site, no request to Google by visitors |
| Icons | `lucide-react` (menu, phone, mail, arrows) | ISC | |
| Icons | Instagram and LinkedIn glyphs in `SocialIcon.tsx` | Own simple line drawings | No brand artwork copied; the logos themselves are trademarks of their owners |
| Animation | None | n/a | `motion` is only a candidate (see "Planned") and needs approval first |
| Brand logo | None used | n/a | Only the brand colors were taken from the Uyumsoft image; its logo is **not** used on the site |

### License overview of installed packages (checked 2026-10-12)

All 22 direct dependencies are MIT, except `lucide-react` (ISC) and `typescript` (Apache-2.0). Of roughly 400 installed packages, almost all are MIT, ISC, Apache-2.0 or BSD. Exceptions, all build-time tools that are **not** part of the published site code:

| Package | License | Why it is acceptable |
|---|---|---|
| `lightningcss` (CSS compiler used by Tailwind) | MPL-2.0 | Used only to build; we do not modify or redistribute it |
| `axe-core` (accessibility checks in the lint setup) | MPL-2.0 | Dev-only, not shipped |
| `@img/sharp-win32-x64` (optional image tool of Next.js) | Apache-2.0 AND LGPL-3.0-or-later | Dev-machine build tool; the site uses unoptimized images, and none of it ends up in `out/` |
| `caniuse-lite` (browser support data) | CC-BY-4.0 | Data used at build time; not shipped to visitors |
| `argparse` | Python-2.0 | Permissive, dev-only |

## Runtime dependencies (shipped to visitors)

| Package | Version | Purpose | Added | Checks |
|---|---|---|---|---|
| `next` | 16.4.0 | App framework: file-based routing, build, static export for GitHub Pages | 2026-10-11 | Pinned by `create-next-app`; peer deps (React 19) satisfied; build passes |
| `react` | 19.3.0 | UI library | 2026-10-11 | Version required by Next 16.4 |
| `react-dom` | 19.3.0 | Renders React in the browser | 2026-10-11 | Same version as `react` |
| `lucide-react` | ^1.55.0 | Simple UI icons (menu, phone, mail, arrow). Brand logos are NOT included, so Instagram/LinkedIn are inline SVGs in `SocialIcon.tsx` | 2026-10-11 | Peer: React 16.5 to 19 |
| `clsx` | ^2.1.1 | Builds class-name strings conditionally | 2026-10-11 | No dependencies |
| `tailwind-merge` | ^3.7.0 | Resolves conflicting Tailwind classes (used inside `cn()` in `src/lib/cn.ts`) | 2026-10-11 | Version 3.x is the line that supports Tailwind 4 |

## Development dependencies (never shipped)

| Package | Version | Purpose | Added | Checks |
|---|---|---|---|---|
| `typescript` | ^5 (5.9.3) | Type checking (`npm run typecheck`) | 2026-10-11 | Kept on 5.x on purpose: the latest major (7.x) was not verified against Next 16.4 / typescript-eslint 8; revisit later |
| `tailwindcss` | ^4 (4.3.3) | Utility-first CSS | 2026-10-11 | Same version as the Turbopack loader |
| `@tailwindcss/turbopack` | ^4 (4.3.3) | Tailwind loader for Next's Turbopack bundler (added by `create-next-app`) | 2026-10-11 | Configured in `next.config.ts` |
| `eslint` | ^9 (9.39.5) | Finds bugs and style problems (`npm run lint`) | 2026-10-11 | npm reports 9.x as deprecated in favor of 10.x; kept because `eslint-config-next` 16.4 targets 9 |
| `eslint-config-next` | 16.4.0 | Next.js lint rules | 2026-10-11 | Must match the `next` version |
| `prettier` | ^3.9.10 | Code formatter (`npm run format`) | 2026-10-11 | Config in `.prettierrc.json` |
| `prettier-plugin-tailwindcss` | ^0.8.1 | Sorts Tailwind classes in a consistent order | 2026-10-11 | Peer: Prettier 3 |
| `vitest` | ^5.0.3 | Unit test runner (`npm test`) | 2026-10-11 | Needs Node 22.12+/24 and `@types/node` 24 (both satisfied) |
| `jsdom` | ^30.1.2 | Simulated browser for component tests | 2026-10-11 | Used by `vitest.config.mts` |
| `@vitejs/plugin-react` | ^6.1.2 | Compiles JSX inside Vitest | 2026-10-11 | |
| `@testing-library/react` | ^16.3.3 | Renders components in tests | 2026-10-11 | Works with React 19 |
| `@testing-library/jest-dom` | ^7.0.1 | Readable DOM assertions (`toBeInTheDocument`) | 2026-10-11 | |
| `@testing-library/user-event` | ^14.6.7 | Simulates real user clicks and typing | 2026-10-11 | |
| `@types/node` | ^24.19.2 | Node.js type definitions | 2026-10-11 | Matches installed Node 24 |
| `@types/react`, `@types/react-dom` | ^19 | React type definitions | 2026-10-11 | Match React 19 |

## CI / deployment actions (`.github/workflows/deploy.yml`)

Not npm packages, but third-party code that runs in our pipeline. All are official GitHub actions, pinned to a major version.

| Action | Version | Purpose | Added |
|---|---|---|---|
| `actions/checkout` | v4 | Downloads the repository code | 2026-10-11 |
| `actions/setup-node` | v4 | Installs Node.js 24 and caches npm downloads | 2026-10-11 |
| `actions/configure-pages` | v5 | Prepares the GitHub Pages environment | 2026-10-11 |
| `actions/upload-pages-artifact` | v3 | Packages the `out/` folder | 2026-10-11 |
| `actions/deploy-pages` | v4 | Publishes the package to GitHub Pages | 2026-10-11 |

## Security audit log

| Date | Command | Result | Decision |
|---|---|---|---|
| 2026-10-11 | `npm audit` | 5 "high" findings, all one chain: `eslint-config-next` -> `@next/eslint-plugin-next` -> `fast-glob` -> `micromatch` -> `braces` (advisory GHSA-vfj7-8cjw-p6xm, denial of service via deeply nested glob patterns) | **Accepted.** The chain is used only by the linter on our own source files during development; it is not part of the built site and never sees visitor input. No patched `braces` release exists yet (latest is 3.0.3, still affected), and `npm audit fix --force` would downgrade Next.js to v14, which is worse. Re-check after each dependency update. |

## Compatibility checks performed

- `npm ls --depth=0`: no missing or invalid peer dependencies.
- `npm run typecheck`, `npm run lint`, `npm test` (6 tests) and `npm run build` (static export, 5 routes) all pass.

## Planned (not installed yet)

- `motion`: animation library candidate (expected license MIT, to be verified). **Not installed.** It will only be proposed after the owner shares the motion references, and only added after the owner's approval (see "Licensing policy"). Verify React 19 / Next 16 compatibility and add an entry here before installing.
