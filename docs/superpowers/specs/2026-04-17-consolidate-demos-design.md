# Consolidate 18 demos into a single Next.js app

**Date:** 2026-04-17
**Status:** Design — awaiting user review

## Problem

The repo hosts 18 independent Next.js apps under `apps/`, each with its own `package.json`, `node_modules`, and per-app basePath configuration. Builds are serial (`for APP in APPS; npm install; next build`), consume ~18 GB of duplicate dependencies, and require two fragile orchestration layers:

- `scripts/patch-next-configs.js` — injects `output: 'export'`, `basePath`, `images.unoptimized` into each app's Next config at setup time.
- `scripts/fix-image-paths.js` — post-processes built HTML to rewrite absolute image paths that `next/image` emits without the basePath.

Version drift across apps (Next 15.3.2, 16.1.6, 16.2.1) is unmanaged. The APPS list is duplicated in three places (`build.sh`, the patcher, and `index.html`).

This repo exists to showcase landing-page examples. The 18 apps do not need to be independently deployable; the boundary between them is cosmetic.

## Goal

Collapse the 18 apps into a single Next.js app. Preserve URL structure (`/<demo-name>/`), preserve each demo's visual identity (fonts, colors, typography), delete the two orchestration scripts entirely.

Expected wins: order-of-magnitude faster builds, ~18 GB → <500 MB on disk, no more basePath hacks, no more version drift.

## Non-goals

- Design-system extraction (no shared `components/` folder). Each demo stays isolated. Premature unification risks conflating demos that should look distinct.
- Keeping each demo independently runnable. `cd apps/vvs && npm run dev` goes away. For a showcase this is a non-issue.
- Multi-zone / edge rewrites. Single Next build, single deploy target.

## Target architecture

### File structure

```
landing-page-demos/
├── package.json               # single Next.js app, union of deps
├── next.config.ts             # output: 'export', images.unoptimized: true
├── postcss.config.mjs
├── tsconfig.json
├── app/
│   ├── layout.tsx             # minimal root: <html><body>{children}</body></html>, no styles
│   ├── page.tsx               # showcase grid (replaces index.html)
│   ├── advokatfirma-demo/
│   │   ├── layout.tsx         # fonts + wrapper div with .demo-advokat class + metadata
│   │   ├── styles.css         # scoped tokens + any demo-specific CSS
│   │   ├── page.tsx
│   │   └── components/...
│   ├── camping-demo/
│   │   ├── layout.tsx
│   │   ├── styles.css
│   │   ├── page.tsx
│   │   ├── aktiviteter/page.tsx
│   │   ├── beliggenhet/page.tsx
│   │   ├── fasiliteter/page.tsx
│   │   ├── galleri/page.tsx
│   │   ├── kontakt/page.tsx
│   │   ├── om-oss/page.tsx
│   │   ├── overnatting/page.tsx
│   │   ├── priser/page.tsx
│   │   └── components/...
│   └── ... (16 more demos)
├── public/
│   ├── advokatfirma-demo/     # each demo's former public/ contents
│   ├── camping-demo/
│   └── ...
└── docs/
```

URLs served: `/`, `/advokatfirma-demo/`, `/camping-demo/`, `/camping-demo/aktiviteter/`, etc. — identical to current production.

### Root layout

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Landing Page Demos",
};
```

No CSS imports, no fonts, no wrapper divs. All demo-specific styling lives in nested layouts.

**On `<html lang>`.** Next.js App Router permits only the root layout to emit `<html>` and `<body>`, so every demo inherits the same `lang` attribute. The showcase is Norwegian-language; `lang="no"` matches the majority. If a future demo is not Norwegian, its layout can annotate its wrapper with `lang="en"` or similar for assistive tech, but the root element stays `no`.

### Per-demo layout

Each demo owns its fonts, metadata, and a wrapper `<div>` that scopes its CSS tokens.

```tsx
// app/advokatfirma-demo/layout.tsx
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./styles.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Holm Advokatkontor – Erstatningsrett, arbeidsrett og familierett",
  description: "Spesialist innen erstatningsrett, arbeidsrett og familierett. 18 års erfaring.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} demo-advokat min-h-screen`}>
      {children}
    </div>
  );
}
```

### CSS token isolation (approach B2)

Problem: Tailwind v4 `@theme` declarations are global. Multiple demos declaring `--color-primary` would collide.

Solution: declare the generic token names in `@theme` as `initial` (so Tailwind emits the utility classes), and scope the actual values under the demo's wrapper class.

```css
/* app/advokatfirma-demo/styles.css */
@import "tailwindcss";

@theme {
  --color-navy: initial;
  --color-navy-hover: initial;
  --color-gold: initial;
  --color-gold-light: initial;
  --color-cream: initial;
  --color-cream-dark: initial;
  --color-ink: initial;
  --color-muted: initial;
  --color-border: initial;
  --font-sans: initial;
  --font-serif: initial;
}

.demo-advokat {
  --color-navy: #0c1a2e;
  --color-navy-hover: #162237;
  --color-gold: #a6863e;
  --color-gold-light: #c9a84c;
  --color-cream: #f6f3ec;
  --color-cream-dark: #ece8df;
  --color-ink: #1c1b29;
  --color-muted: #7e7a85;
  --color-border: #ddd8cc;
  --font-sans: var(--font-dm-sans), system-ui, sans-serif;
  --font-serif: var(--font-cormorant), Georgia, serif;
}

/* any other demo-specific CSS stays here */
```

Utility classes like `bg-navy`, `text-gold`, `font-serif` resolve via CSS variables, which cascade correctly from the wrapper class. Markup requires no changes.

**Collision handling across demos.** If two demos declare the same token name (e.g., `--color-primary`) in their respective `@theme` blocks, both `initial` declarations are harmless (last one wins but the value is `initial` in both cases). The actual values differ by wrapper scope, so no conflict at render time.

**Tokens that truly conflict** (same name, both demos use it heavily with different semantics) are handled by namespacing only the problematic token in one demo — e.g., rename `--color-primary` → `--color-camping-primary` in camping-demo's CSS and in its markup. This is a per-token fix, applied only when a real collision manifests; not a blanket rename.

### Assets and imports

**Public assets.** Each demo's former `public/` contents move to `public/<demo>/`. All absolute references in source code (`src="/hero.jpg"`, `<Image src="/hero.jpg">`, CSS `url(/hero.jpg)`) are rewritten to `/<demo>/hero.jpg`.

**Imports.** Each demo uses relative imports within its folder (`./components/Navbar`). The `@/` alias from the original app-level `tsconfig.json` paths is dropped per-demo — there is no shared alias for demo-internal code. A root-level `@/` alias pointing at repo root may exist for global use, but demo code does not rely on it.

**Imports from outside a demo's folder are forbidden.** If `advokatfirma-demo/page.tsx` tries to import `../camping-demo/components/Navbar`, that is a design violation and must be rejected in review. Demos are independent.

## Normalization of outliers

### fysio-landing — strip Sanity

Current shape: Sanity CMS backs content, with `sanity/` subdir, `_studio/` route, and `next-sanity`/`@sanity/*`/`styled-components` dependencies.

Changes:
- Delete `sanity/` subdir.
- Delete `_studio/` route and any Sanity-specific API routes.
- Remove `next-sanity`, `@sanity/vision`, `@sanity/image-url`, `sanity`, `styled-components` from dependencies.
- Remove `transpilePackages`, `reactCompiler` from its Next config.
- Remove the Sanity image loader from `next.config.ts`.
- Inline content (therapist profiles, service descriptions, etc.) as a static `data.ts`, following the pattern already used by `camping-demo` (`data/site.ts`).
- `terapeuter/` route: keep as a static sub-route if it renders meaningful content on its own; otherwise fold into the main landing page.

Post-change fysio-landing is a plain static Next page — same shape as the other demos.

### hgn-landing — align with the rest

Current shape: heavier dep surface than needed for a static landing page (`react-hook-form`, `zod`, `@hookform/resolvers`, `embla-carousel-react`, multiple Radix primitives).

Changes:
- Keep only Radix primitives that correspond to components currently rendered on the page.
- Keep `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`.
- Remove `react-hook-form`, `zod`, `@hookform/resolvers`, `embla-carousel-react` unless audit shows they drive visible, interactive UI. Forms become visual-only (no submit handler) — matching the other demos' showcase posture.
- Keep Geist / Geist Mono fonts.
- Keep Navbar / Footer components.

### Root dependency set after consolidation

Approximate union after normalization:

```
dependencies:
  next, react, react-dom,
  lucide-react, clsx, tailwind-merge, class-variance-authority,
  @radix-ui/react-dialog, @radix-ui/react-slot, @radix-ui/react-tabs,
  @radix-ui/react-navigation-menu, @radix-ui/react-select,
  @radix-ui/react-separator, @radix-ui/react-avatar, @radix-ui/react-label

devDependencies:
  typescript, @types/node, @types/react, @types/react-dom,
  tailwindcss, @tailwindcss/postcss, tw-animate-css,
  eslint, eslint-config-next, @eslint/eslintrc
```

Final list determined during migration; unused Radix primitives pruned.

## Migration approach

### Migration script

`scripts/migrate-demo.mjs` is a one-shot script that runs per demo and performs the following operations:

1. Determine source `app/` path: `apps/<demo>/app/` or `apps/<demo>/src/app/` (fysio-landing uses `src/`).
2. Copy source `app/` contents to `app/<demo>/`.
3. Copy `apps/<demo>/components/` (if exists) to `app/<demo>/components/`.
4. Copy `apps/<demo>/data/` or `apps/<demo>/lib/` (if exists) to `app/<demo>/`.
5. Copy `apps/<demo>/public/*` to `public/<demo>/`.
6. Rename `app/<demo>/globals.css` → `app/<demo>/styles.css`.
7. Rewrite its `@theme` block per the CSS isolation approach (tokens declared as `initial`, scoped values in `.demo-<slug>`).
8. Rewrite absolute asset paths in copied TS/TSX/CSS: `"/foo.jpg"` → `"/<demo>/foo.jpg"`, skipping data URIs and already-prefixed paths.
9. Rewrite `@/` alias imports that pointed at the original app's `src/` or root — convert to relative imports.
10. Add the wrapper `<div className="... demo-<slug>">` to the copied `layout.tsx`; ensure it does not emit `<html>` or `<body>` (those belong to the root layout only).

The script must be idempotent: rerunning it on an already-migrated demo is a no-op or a re-apply that produces the same result. This lets us iterate on the script without polluting the target tree.

Code structure of the script is intentionally minimal — no CLI flags, one argument (demo name), explicit exit on failure. Bugs are fixed by re-reading the real demo contents and handling the missed case.

### Phase plan

**Phase 0 — Scaffold new root.** Create new `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `app/layout.tsx`, `app/page.tsx` (ports `index.html`'s styled grid). `npm install`, run `next dev`. Showcase grid renders at `/`; all 18 demo links 404. Commit.

**Phase 1 — Migrate one reference demo (`vvs`).** Simplest demo: single page, minimal deps (`lucide-react` + core), Poppins font, own `@theme`. Write `scripts/migrate-demo.mjs`; run on `vvs`; verify `/vvs` renders identically to current production. Iterate on the script until the migration is clean. Commit.

**Phase 2 — Migrate simple demos (15 remaining simple ones).** Run the script on each; verify each route in dev mode; fix any demo-specific edge cases the script missed; commit per demo or in a single batched commit. Demos in this phase: `advokatfirma-demo`, `camping-demo`, `elektro-firma`, `idrettsanlegg-demo`, `idrettslag-demo`, `maler-demo`, `os-gravferdsbyraa`, `renseri-demo`, `stranda-golf`, `tannlege-demo`, `trelast-demo`, `treningssenter-demo`, `trykk-demo`, `vet-demo`, `vhut-landing` (`vvs` was done in Phase 1; `fysio-landing` and `hgn-landing` come later).

**Phase 3 — fysio-landing.** First strip Sanity (separate commit). Then migrate via the script (separate commit). Sanity removal is content work — hardcoding what the CMS used to serve.

**Phase 4 — hgn-landing.** First prune unused deps (separate commit). Then migrate via the script.

**Phase 5 — Cleanup.**
- Delete `apps/`.
- Delete `build.sh`, `scripts/patch-next-configs.js`, `scripts/fix-image-paths.js`.
- Delete root `index.html`.
- Simplify `vercel.json`: remove `buildCommand` and `outputDirectory`, set `"framework": "nextjs"`.
- Simplify `.gitignore`: drop `apps/*/` entries; add standard Next ignores.
- Rewrite `README.md`: single-app instructions.
- Run `next build`; check `out/` structure. Commit.

**Phase 6 — Verify.**
- `next dev`: smoke-test every `/<demo>/` route and every sub-route (camping-demo has 7, fysio has `terapeuter`).
- `next build` + `npx serve out`: verify the static export is complete and links work.
- Compare the showcase grid against current production.
- Deploy to Vercel preview; verify parity.

Rollback at any phase is `git reset` — `apps/` stays intact until Phase 5.

## Risks and mitigations

**Token collision at runtime.** Two demos using `--color-primary` with different semantics on pages that somehow coexist. Mitigation: Next layout boundaries prevent coexistence. If it still happens, namespace the colliding token per Section "Collision handling above."

**`next/font` scoped to wrapper div instead of `<html>`.** Browsers apply font faces globally regardless of variable scope; only the CSS variable is scoped. Risk: font preload hints are emitted at the layout level — should be fine for a static export but worth verifying in Phase 1 with a Lighthouse check.

**Image paths the migration script missed.** If a demo does something unusual (string concatenation to build paths, images referenced from JSON data, etc.), the regex pass won't catch it. Mitigation: Phase 1 reference migration exercises the script fully; Phase 6 smoke-tests every route.

**Sub-route conflicts.** `camping-demo/aktiviteter` and a hypothetical other demo's `aktiviteter` route can't collide because they live under different parent segments. No risk.

**Metadata inheritance.** Next.js app router merges metadata from root → nested layouts → pages. Root layout's `title: "Landing Page Demos"` shouldn't leak into demo pages because each demo's layout overrides `metadata.title`. Verify in Phase 1.

**Sanity removal breaks fysio.** If content shape is unknown at migration time, inline data might miss fields rendered on the page. Mitigation: run current fysio-landing, screenshot every page, capture the data in a `data.ts` before removing Sanity.

## Success criteria

- `npm run build` completes in under two minutes (vs. current serial-18 build time).
- `du -sh node_modules` under 1 GB.
- Every URL that works today (`/`, `/<demo>/`, sub-routes) works after migration, with the same visual output.
- `apps/`, `build.sh`, `scripts/patch-next-configs.js`, `scripts/fix-image-paths.js` are deleted.
- `vercel.json` is a single-line "framework: nextjs" or equivalent.
- Vercel preview deploy renders correctly.

## Out of scope

- CI setup (lint/typecheck on push).
- Design-system extraction.
- Switching package manager (stay on npm).
- Turning demos back into live sites.
