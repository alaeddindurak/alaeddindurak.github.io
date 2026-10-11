# Library Registry

Every third-party package used by this project, why it is here, and its security / compatibility status.

> **Rule:** whenever a package is added, upgraded or removed, update this file in the same change and bump the "Last updated" line.

**Last updated:** 2026-10-11 · **Node.js:** 24 LTS (Next.js requires >= 20.9) · **Package manager:** npm

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

## Security audit log

| Date | Command | Result | Decision |
|---|---|---|---|
| 2026-10-11 | `npm audit` | 5 "high" findings, all one chain: `eslint-config-next` -> `@next/eslint-plugin-next` -> `fast-glob` -> `micromatch` -> `braces` (advisory GHSA-vfj7-8cjw-p6xm, denial of service via deeply nested glob patterns) | **Accepted.** The chain is used only by the linter on our own source files during development; it is not part of the built site and never sees visitor input. No patched `braces` release exists yet (latest is 3.0.3, still affected), and `npm audit fix --force` would downgrade Next.js to v14, which is worse. Re-check after each dependency update. |

## Compatibility checks performed

- `npm ls --depth=0`: no missing or invalid peer dependencies.
- `npm run typecheck`, `npm run lint`, `npm test` (5 tests) and `npm run build` (static export, 5 routes) all pass.

## Planned (not installed yet)

- `motion`: animations, once the motion references are chosen. Verify React 19 / Next 16 compatibility and add an entry here before installing.
