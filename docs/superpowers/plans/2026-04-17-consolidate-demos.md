# Consolidate 18 demos into one Next.js app — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 18-app `apps/` monorepo with a single Next.js app that serves all demos at the same URLs, deleting `build.sh`, `scripts/patch-next-configs.js`, and `scripts/fix-image-paths.js`.

**Architecture:** One Next.js 16 app with `output: 'export'`. Each demo lives under `app/<demo-slug>/` with its own nested layout (fonts, metadata, wrapper div), its own `styles.css` (Tailwind v4 with scoped CSS tokens), and its own `components/`/`data/` folders. The root layout is a bare `<html><body>`; all demo styling is scoped under a `.demo-<slug>` wrapper.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, `next/font`, `lucide-react`. Selected Radix primitives for the one demo (`hgn-landing`) that needs them.

**Spec:** See `docs/superpowers/specs/2026-04-17-consolidate-demos-design.md` for full design rationale. This plan executes that spec.

---

## Context for the implementing engineer

- The 18 demos live in `apps/<demo>/`. Most use `apps/<demo>/app/` (App Router). Two use `apps/<demo>/src/app/` — `fysio-landing` and `hgn-landing`. Check both paths when copying.
- Each demo currently has its own `package.json`, `node_modules`, and Next config with `basePath: '/<demo>'`.
- After this plan, there is one root `package.json`, one `node_modules`, one `next.config.ts`. `apps/` is deleted.
- URLs served remain identical (`/`, `/<demo>/`, `/<demo>/<sub-route>/`). The root `/` shows the showcase grid currently in `index.html`.
- Tailwind v4 uses `@theme` blocks instead of `tailwind.config.js`. Tokens must be scoped per-demo to avoid collisions (see Task 7's CSS output).
- When you need to confirm a demo's current visual output, `cd apps/<demo> && npm install && npm run dev` still works until Phase 5.
- Commit after each task. Small commits, focused messages. Commit message format: `<type>: <description>` — types: feat, fix, refactor, docs, test, chore.

## Demo inventory

Simple demos (Phase 2 — apply the migration script as-is):
`advokatfirma-demo`, `camping-demo`, `elektro-firma`, `idrettsanlegg-demo`, `idrettslag-demo`, `maler-demo`, `os-gravferdsbyraa`, `renseri-demo`, `stranda-golf`, `tannlege-demo`, `trelast-demo`, `treningssenter-demo`, `trykk-demo`, `vet-demo`, `vhut-landing`.

Reference demo (Phase 1): `vvs`.

Special handling:
- `fysio-landing` (Phase 3) — strip Sanity first.
- `hgn-landing` (Phase 4) — prune unused deps first.

Total: 18 demos.

---

# Phase 0 — Scaffold the new root

## Task 1: Create root `package.json`

**Files:**
- Create: `package.json` (replacing the current near-empty one)

- [ ] **Step 1: Back up the current root `package.json`**

```bash
cp package.json package.json.bak
```

- [ ] **Step 2: Write the new `package.json`**

```json
{
  "name": "landing-page-demos",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "16.2.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "lucide-react": "^0.564.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.1",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.3",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
}
```

- [ ] **Step 3: Install**

Run: `npm install`
Expected: exits 0; `node_modules/` and `package-lock.json` created at root.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git rm package.json.bak 2>/dev/null || rm -f package.json.bak
git commit -m "chore: add root Next.js package.json for consolidated app"
```

---

## Task 2: Create `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

**Files:**
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `next-env.d.ts` (Next will auto-generate; leave as placeholder)

- [ ] **Step 1: Write `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

Note: `trailingSlash: true` ensures `/vvs/` resolves to `vvs/index.html` in the static export, matching current production URLs (which have trailing slashes because each sub-app was deployed at its own basePath).

- [ ] **Step 2: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "apps", "out"]
}
```

The `exclude: ["apps"]` is important — it keeps the old `apps/` tree out of the TypeScript project while it still exists on disk during migration.

- [ ] **Step 3: Write `postcss.config.mjs`**

```js
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

- [ ] **Step 4: Write `eslint.config.mjs`**

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["apps/**", "out/**", ".next/**"],
  },
];

export default eslintConfig;
```

Add `@eslint/eslintrc` to devDependencies if not already present: `npm install --save-dev @eslint/eslintrc`.

- [ ] **Step 5: Commit**

```bash
git add next.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs package.json package-lock.json
git commit -m "chore: add root Next/TS/PostCSS/ESLint configs"
```

---

## Task 3: Create the root layout

**Files:**
- Create: `app/layout.tsx`

- [ ] **Step 1: Write `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page Demos",
  description: "Industry-specific landing page examples.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Write `app/globals.css`**

```css
@import "tailwindcss";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #f4f4f5;
  color: #111;
  min-height: 100vh;
}
```

The root `globals.css` is minimal — it only styles the showcase index page. Demo pages override via their own nested layouts and scoped `styles.css`.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: add root layout and minimal global styles"
```

---

## Task 4: Create the showcase index page (`app/page.tsx`)

**Files:**
- Create: `app/page.tsx`
- Reference: `index.html` (the page we're porting)

- [ ] **Step 1: Inspect the current `index.html` to enumerate cards**

Run: `cat index.html | head -120`

Capture the 18 `<a class="card">` entries — each has a `href`, an industry label, and a demo name. They will become a data array.

- [ ] **Step 2: Write `app/page.tsx`**

```tsx
import Link from "next/link";

const demos = [
  { slug: "fysio-landing", industry: "Helse", name: "Fysioterapi" },
  { slug: "vhut-landing", industry: "Demo", name: "Vhut" },
  { slug: "hgn-landing", industry: "Demo", name: "HGN" },
  { slug: "advokatfirma-demo", industry: "Juss", name: "Advokatfirma" },
  { slug: "tannlege-demo", industry: "Helse", name: "Tannlege" },
  { slug: "vet-demo", industry: "Helse", name: "Veterinær" },
  { slug: "renseri-demo", industry: "Tjenester", name: "Renseri" },
  { slug: "camping-demo", industry: "Reiseliv", name: "Camping" },
  { slug: "treningssenter-demo", industry: "Helse", name: "Treningssenter" },
  { slug: "trelast-demo", industry: "Byggevarer", name: "Trelast" },
  { slug: "maler-demo", industry: "Håndverk", name: "Maler" },
  { slug: "idrettsanlegg-demo", industry: "Idrett", name: "Idrettsanlegg" },
  { slug: "idrettslag-demo", industry: "Idrett", name: "Idrettslag" },
  { slug: "trykk-demo", industry: "Tjenester", name: "Trykkeri" },
  { slug: "elektro-firma", industry: "Håndverk", name: "Elektro" },
  { slug: "vvs", industry: "Håndverk", name: "VVS" },
  { slug: "stranda-golf", industry: "Idrett", name: "Golf" },
  { slug: "os-gravferdsbyraa", industry: "Tjenester", name: "Gravferdsbyrå" },
];

export default function Home() {
  return (
    <main className="px-8 py-12 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-1">Landing Page Demos</h1>
        <p className="text-neutral-500">Industry-specific landing page examples.</p>
      </header>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {demos.map((demo) => (
          <Link
            key={demo.slug}
            href={`/${demo.slug}/`}
            className="block bg-white border border-neutral-200 rounded-xl p-5 pb-4 no-underline text-current hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <div className="text-[0.72rem] uppercase tracking-wider text-neutral-400 mb-1">
              {demo.industry}
            </div>
            <div className="text-base font-semibold">{demo.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
```

Cross-check: the slug list must exactly match the 18 demos in `apps/`. If `index.html` uses different labels than what's above, use the labels from `index.html`.

- [ ] **Step 3: Verify the dev server loads the index**

Run: `npm run dev`

Visit `http://localhost:3000/`. Expected: showcase grid with 18 cards, matching the layout of the current `index.html`. Clicking any card 404s (no demo routes exist yet). Close the server.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: port showcase index from index.html to app/page.tsx"
```

---

# Phase 1 — Write the migration script and migrate the reference demo

## Task 5: Write `scripts/migrate-demo.mjs`

**Files:**
- Create: `scripts/migrate-demo.mjs`

The migration script is a single file, invoked once per demo. It copies source files, rewrites asset paths, converts the demo's `globals.css` to the scoped token pattern, and rewrites the demo's `layout.tsx` to not emit `<html>/<body>`. It is idempotent: running it twice produces the same output.

- [ ] **Step 1: Write the script**

```js
#!/usr/bin/env node
// Usage: node scripts/migrate-demo.mjs <demo-slug>
// Copies apps/<slug>/ contents into the consolidated app/<slug>/ and public/<slug>/,
// rewrites asset paths, scopes CSS tokens, and rewrites layout.tsx.

import fs from "node:fs";
import path from "node:path";

const [, , slug] = process.argv;
if (!slug) {
  console.error("Usage: migrate-demo.mjs <demo-slug>");
  process.exit(1);
}

const ROOT = process.cwd();
const SRC_APP = fs.existsSync(path.join(ROOT, "apps", slug, "src", "app"))
  ? path.join(ROOT, "apps", slug, "src", "app")
  : path.join(ROOT, "apps", slug, "app");
const SRC_COMPONENTS_CANDIDATES = [
  path.join(ROOT, "apps", slug, "src", "components"),
  path.join(ROOT, "apps", slug, "components"),
];
const SRC_DATA_CANDIDATES = [
  path.join(ROOT, "apps", slug, "src", "data"),
  path.join(ROOT, "apps", slug, "data"),
];
const SRC_LIB_CANDIDATES = [
  path.join(ROOT, "apps", slug, "src", "lib"),
  path.join(ROOT, "apps", slug, "lib"),
];
const SRC_PUBLIC = path.join(ROOT, "apps", slug, "public");

const DST_APP = path.join(ROOT, "app", slug);
const DST_PUBLIC = path.join(ROOT, "public", slug);

if (!fs.existsSync(SRC_APP)) {
  console.error(`No app directory found for ${slug} at ${SRC_APP}`);
  process.exit(1);
}

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
  return true;
}

function walk(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p, ext));
    else if (!ext || ext.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

// 1. Copy app/, components/, data/, lib/, public/ into their targets.
copyDir(SRC_APP, DST_APP);
for (const cands of [
  [SRC_COMPONENTS_CANDIDATES, path.join(DST_APP, "components")],
  [SRC_DATA_CANDIDATES, path.join(DST_APP, "data")],
  [SRC_LIB_CANDIDATES, path.join(DST_APP, "lib")],
]) {
  const [sources, dst] = cands;
  for (const s of sources) if (copyDir(s, dst)) break;
}
if (fs.existsSync(SRC_PUBLIC)) {
  fs.mkdirSync(DST_PUBLIC, { recursive: true });
  for (const entry of fs.readdirSync(SRC_PUBLIC, { withFileTypes: true })) {
    // Skip Next.js default placeholder SVGs that ship with create-next-app.
    if (["file.svg", "globe.svg", "next.svg", "vercel.svg", "window.svg"].includes(entry.name)) continue;
    const s = path.join(SRC_PUBLIC, entry.name);
    const d = path.join(DST_PUBLIC, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// 2. Rename globals.css -> styles.css, scope tokens, drop :root/html/body global selectors.
const globalsCss = path.join(DST_APP, "globals.css");
const stylesCss = path.join(DST_APP, "styles.css");
if (fs.existsSync(globalsCss)) {
  fs.renameSync(globalsCss, stylesCss);
}
if (fs.existsSync(stylesCss)) {
  let css = fs.readFileSync(stylesCss, "utf-8");
  css = scopeDemoCss(css, slug);
  fs.writeFileSync(stylesCss, css);
}

// 3. Rewrite asset paths in all TSX/TS/CSS files: "/foo" -> "/<slug>/foo".
const prefix = `/${slug}`;
const codeFiles = walk(DST_APP, [".tsx", ".ts", ".css"]);
for (const file of codeFiles) {
  let content = fs.readFileSync(file, "utf-8");
  const before = content;
  // src="/..."
  content = content.replace(
    /(src|href)=("|')(\/(?!\/)[^"']+)("|')/g,
    (m, attr, q1, p, q2) => {
      if (p.startsWith(prefix + "/") || p === prefix) return m;
      if (/^\/(_next|api|favicon)/.test(p)) return m;
      if (attr === "href" && !/\.(svg|png|jpe?g|gif|webp|ico|pdf|mp4|webm|mp3)$/i.test(p)) return m;
      return `${attr}=${q1}${prefix}${p}${q2}`;
    }
  );
  // CSS url(/...)
  content = content.replace(/url\((\s*)(['"]?)(\/[^'")]+)(\2)(\s*)\)/g, (m, ws1, q1, p, q2, ws2) => {
    if (p.startsWith(prefix + "/")) return m;
    if (p.startsWith("/_next") || p.startsWith("/api")) return m;
    return `url(${ws1}${q1}${prefix}${p}${q2}${ws2})`;
  });
  if (content !== before) fs.writeFileSync(file, content);
}

// 4. Rewrite the demo's layout.tsx:
//    - Remove <html> and <body> elements (root layout owns these).
//    - Replace them with a <div> that carries the font variable classes and the .demo-<slug> wrapper.
//    - Keep next/font imports, metadata export, and the "./globals.css" -> "./styles.css" import.
const layoutPath = path.join(DST_APP, "layout.tsx");
if (fs.existsSync(layoutPath)) {
  let layout = fs.readFileSync(layoutPath, "utf-8");
  layout = layout.replace(/["']\.\/globals\.css["']/g, `"./styles.css"`);
  layout = rewriteLayoutJsx(layout, slug);
  fs.writeFileSync(layoutPath, layout);
}

// 5. Record the migration so re-runs are visible.
console.log(`Migrated ${slug}: ${DST_APP}`);

// ---------- helpers ----------

function scopeDemoCss(css, slug) {
  const wrapper = `.demo-${slug.replace(/[^a-z0-9-]/gi, "-")}`;
  // Replace @theme { ... } (and @theme inline { ... }) with a scoped declaration.
  // Step 1: for each @theme block, collect its custom properties, emit an @theme block
  //         that declares them as `initial` (so Tailwind generates the utilities),
  //         and emit a scoped .demo-<slug> block with the actual values.
  const themeRegex = /@theme(?:\s+inline)?\s*\{([\s\S]*?)\}/g;
  css = css.replace(themeRegex, (_, body) => {
    const props = [];
    for (const line of body.split("\n")) {
      const m = line.match(/^\s*(--[a-zA-Z0-9_-]+)\s*:\s*([^;]+);?\s*$/);
      if (m) props.push({ name: m[1], value: m[2].trim() });
    }
    const initialBlock = props.map((p) => `  ${p.name}: initial;`).join("\n");
    const scopedBlock = props.map((p) => `  ${p.name}: ${p.value};`).join("\n");
    return `@theme {\n${initialBlock}\n}\n\n${wrapper} {\n${scopedBlock}\n}`;
  });
  // Replace :root or html selectors with the wrapper so their custom properties scope correctly.
  css = css.replace(/(^|\})(\s*):root(\s*)\{/g, `$1$2${wrapper}$3{`);
  return css;
}

function rewriteLayoutJsx(src, slug) {
  const wrapperClass = `demo-${slug.replace(/[^a-z0-9-]/gi, "-")}`;
  // Find the <html ...> ... </html> span and replace it with a <div> that carries the same className.
  // The existing className on <html> or <body> will typically reference font variable classes.
  // We concatenate the <html> className, the <body> className, and the wrapperClass.
  const htmlOpen = src.match(/<html([^>]*)>/);
  if (!htmlOpen) return src;
  const bodyOpen = src.match(/<body([^>]*)>/);
  const htmlAttrs = htmlOpen[1] || "";
  const bodyAttrs = bodyOpen ? bodyOpen[1] || "" : "";

  const classFrom = (attrs) => {
    const m = attrs.match(/className=\{([^}]+)\}/) || attrs.match(/className=("[^"]*"|'[^']*')/);
    if (!m) return "";
    return m[1];
  };
  const htmlClass = classFrom(htmlAttrs);
  const bodyClass = classFrom(bodyAttrs);
  const parts = [];
  if (htmlClass) parts.push(htmlClass.startsWith("`") || htmlClass.startsWith('"') || htmlClass.startsWith("'") ? htmlClass : htmlClass);
  if (bodyClass) parts.push(bodyClass);

  // Build a single className expression: a template string combining the parts + the wrapper.
  // We always use a template literal to keep things uniform.
  const exprParts = parts.map((p) => {
    if (p.startsWith('"') || p.startsWith("'")) return `\${${p}}`;
    if (p.startsWith("`")) return `\${${p}}`;
    return `\${${p}}`;
  });
  const classExpr = `\`${exprParts.join(" ")} ${wrapperClass}\``.replace(/  +/g, " ");

  // Replace "<html...><body...>" with "<div className={...}>" and "</body></html>" with "</div>".
  let out = src;
  out = out.replace(/<html[^>]*>\s*<body[^>]*>/, `<div className={${classExpr}}>`);
  out = out.replace(/<\/body>\s*<\/html>/, `</div>`);
  return out;
}
```

- [ ] **Step 2: Commit**

```bash
git add scripts/migrate-demo.mjs
git commit -m "feat: add one-shot migration script for consolidating demos"
```

---

## Task 6: Migrate the reference demo (`vvs`)

**Files:**
- Create (via script): `app/vvs/` subtree, `public/vvs/` subtree

- [ ] **Step 1: Run the migration**

```bash
node scripts/migrate-demo.mjs vvs
```

Expected output:
```
Migrated vvs: /Users/.../app/vvs
```

- [ ] **Step 2: Inspect the migrated layout**

Run: `cat app/vvs/layout.tsx`

Expected shape (abbreviated):
```tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles.css";

const poppins = Poppins({ ... });

export const metadata: Metadata = { title: "Berge VVS AS – ...", description: "..." };

export default function RootLayout({ children }: ...) {
  return (
    <div className={`${poppins.variable} font-sans antialiased demo-vvs`}>
      {children}
    </div>
  );
}
```

If the output still contains `<html>` or `<body>`, the regex rewrite missed something — fix manually and update the script before moving on. The function and type name `RootLayout` should be renamed to `VvsLayout` or similar; do this manually in this task and update the script for Phase 2 if it comes up again.

- [ ] **Step 3: Inspect the scoped CSS**

Run: `cat app/vvs/styles.css`

Expected shape:
```css
@import "tailwindcss";

@theme {
  --font-sans: initial;
  --color-navy: initial;
  --color-navy-dark: initial;
  --color-gold: initial;
  --color-gold-dark: initial;
}

.demo-vvs {
  --font-sans: var(--font-poppins), system-ui, sans-serif;
  --color-navy: #1b3463;
  --color-navy-dark: #122448;
  --color-gold: #ffda21;
  --color-gold-dark: #e5c200;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: #1a1a1a;
}
```

The `html` and `body` rules here are acceptable — `scroll-behavior` is harmless as a global, and the `body { background/color }` is a root concern. If any demo sets `body { background: ... }` in a way that would conflict with other demos, we'd need to rescope to `.demo-vvs`. For now, leave as-is and fix if Phase 6 verification flags an issue.

- [ ] **Step 4: Start the dev server and verify `/vvs/` renders**

Run: `npm run dev`

Visit `http://localhost:3000/vvs/`. Expected: the Berge VVS landing page renders with Poppins font, navy/gold color scheme, all sections visible.

Also visit `http://localhost:3000/` — confirm the showcase grid still works.

Close the dev server.

- [ ] **Step 5: Visual parity spot-check**

Start the legacy vvs app in a separate terminal:
```bash
cd apps/vvs && npm install --silent && npm run dev -- -p 3100
```

Open `http://localhost:3100/` and compare to `http://localhost:3000/vvs/`. They should be visually identical. Close both servers when done.

- [ ] **Step 6: Commit**

```bash
git add app/vvs public/vvs
git commit -m "feat: migrate vvs demo as reference for consolidation"
```

---

# Phase 2 — Migrate the 15 simple demos

## Task 7: Apply the migration script to all simple demos

This task is one iteration per demo. Complete the full loop (migrate → verify → commit) for each demo before moving to the next.

**Demos to migrate (in this order — alphabetical for ease of tracking):**

- [ ] `advokatfirma-demo`
- [ ] `camping-demo`
- [ ] `elektro-firma`
- [ ] `idrettsanlegg-demo`
- [ ] `idrettslag-demo`
- [ ] `maler-demo`
- [ ] `os-gravferdsbyraa`
- [ ] `renseri-demo`
- [ ] `stranda-golf`
- [ ] `tannlege-demo`
- [ ] `trelast-demo`
- [ ] `treningssenter-demo`
- [ ] `trykk-demo`
- [ ] `vet-demo`
- [ ] `vhut-landing`

**For each demo, follow this sub-procedure:**

- [ ] **Step 1: Run the migration script**

```bash
node scripts/migrate-demo.mjs <demo-slug>
```

- [ ] **Step 2: Inspect `app/<slug>/layout.tsx`**

Must not contain `<html>` or `<body>`. Must contain `className={...demo-<slug>}`. Must import `"./styles.css"`.

If it's wrong, fix manually and improve the script before the next demo.

- [ ] **Step 3: Inspect `app/<slug>/styles.css`**

Must contain one `@theme { ... }` block with `: initial;` values and one `.demo-<slug> { ... }` block with real values.

- [ ] **Step 4: Check for missed absolute paths**

Run: `grep -rn 'src="/' app/<slug>/ 2>/dev/null | grep -v "/<slug>/"`
Expected: empty, or only paths starting with `/_next/`, `/api/`, `/favicon`.

Run: `grep -rn 'url(/' app/<slug>/ 2>/dev/null | grep -v "url(/<slug>/"`
Expected: empty.

If anything turns up that isn't a `/<slug>/`, `/_next`, or `/api` path, fix manually and improve the script.

- [ ] **Step 5: Verify the route**

```bash
npm run dev
```

Visit `http://localhost:3000/<slug>/` and any sub-routes (e.g., `camping-demo` has 7 sub-pages — walk each). Compare against the legacy app on a second port if there's any visual doubt.

Close the dev server.

- [ ] **Step 6: Commit**

```bash
git add app/<slug> public/<slug>
git commit -m "feat: migrate <slug> demo"
```

**If the script fails or produces broken output for a specific demo, STOP and investigate.** The fix goes into `scripts/migrate-demo.mjs`. After fixing, `rm -rf app/<slug> public/<slug>` and re-run the migration cleanly for that demo. Commit the script fix separately from the demo migration.

**Common issues to watch for:**

1. **`camping-demo` has sub-routes.** The script copies them; verify all 7 render.
2. **Demos using `components/sections/*.tsx`** (e.g., `camping-demo`, `hgn-landing`) — the copy should land under `app/<slug>/components/`. Verify imports still resolve: `grep -rn '@/components' app/<slug>/` should be empty, or should resolve correctly. If `@/components/foo` imports from the old app's `@/` alias (which pointed at `apps/<slug>/`), those imports will break because our root `tsconfig.json` maps `@/*` to the repo root. **Fix:** convert `@/components/...` imports to relative imports (`./components/...` or `../../components/...` as appropriate). Add a step to the migration script if it becomes repetitive.
3. **Demos using `@/data`, `@/lib`, `@/components/ui`** — same `@/` alias problem. Convert to relative imports.
4. **Demos that import CSS from `./globals.css`** inside a component (not the layout) — the script only renames in `layout.tsx`. Fix manually.

If any of these come up more than once, update the script and re-run the affected demos.

---

# Phase 3 — Migrate `fysio-landing` (with Sanity stripped)

## Task 8: Capture fysio-landing's current content

**Files:**
- Create (temporarily): `docs/superpowers/notes/fysio-content-snapshot.md`

- [ ] **Step 1: Start the legacy fysio app**

```bash
cd apps/fysio-landing && npm install --silent && npm run dev -- -p 3200
```

- [ ] **Step 2: Visit every route and capture content**

Visit `http://localhost:3200/fysio-landing/` (basePath) — or however the local dev maps. Walk every section of the landing page and the `/terapeuter/` sub-route. Capture:

- Page title and meta description
- Hero copy
- Therapist names, titles, photos (with URLs pointing at Sanity CDN or local paths)
- Service descriptions
- Contact info
- Any other dynamic content currently pulled from Sanity

Save to `docs/superpowers/notes/fysio-content-snapshot.md`. This is a throwaway reference for the static data inlining — delete it after Phase 3.

- [ ] **Step 3: Stop the legacy app, commit the snapshot**

```bash
git add docs/superpowers/notes/fysio-content-snapshot.md
git commit -m "docs: snapshot fysio-landing content before Sanity removal"
```

---

## Task 9: Strip Sanity from `apps/fysio-landing/`

**Files:**
- Modify: `apps/fysio-landing/package.json`
- Delete: `apps/fysio-landing/sanity/`
- Delete: `apps/fysio-landing/src/app/_studio/`
- Create: `apps/fysio-landing/src/data/site.ts` (inline content)
- Modify: all files under `apps/fysio-landing/src/` that import from `next-sanity`, `@sanity/*`, or local Sanity queries

- [ ] **Step 1: Remove Sanity dependencies from the legacy app's `package.json`**

```bash
cd apps/fysio-landing
npm uninstall next-sanity @sanity/vision @sanity/image-url sanity styled-components dotenv-cli
cd ../..
```

Expected: `package.json` no longer lists these packages; `package-lock.json` updated.

- [ ] **Step 2: Delete the Sanity Studio subdirectory and route**

```bash
rm -rf apps/fysio-landing/sanity
rm -rf apps/fysio-landing/src/app/_studio
rm -f apps/fysio-landing/src/sanity.config.ts apps/fysio-landing/src/sanity.cli.ts 2>/dev/null || true
```

Also check for and remove:
- `apps/fysio-landing/src/sanity/` if it exists (client, queries, types).
- Any remaining `import ... from "next-sanity"` or `import ... from "@sanity/*"` references.

Run: `grep -rln "sanity" apps/fysio-landing/src/ 2>/dev/null`
Expected: empty.

- [ ] **Step 3: Inline content into `src/data/site.ts`**

Using the snapshot from Task 8, create:

```ts
// apps/fysio-landing/src/data/site.ts
export const siteData = {
  seo: {
    title: "Holst Fysioterapi – Bergen",
    description: "Fysioterapi og muskelterapi i hjertet av Bergen.",
  },
  hero: {
    heading: "...",
    subheading: "...",
    cta: "Book time",
  },
  therapists: [
    {
      slug: "example-name",
      name: "Example Name",
      title: "Fysioterapeut",
      bio: "...",
      image: "/therapist-example.jpg", // local path, not Sanity CDN
    },
    // ... one per therapist from the snapshot
  ],
  services: [
    // ...
  ],
  contact: {
    address: "...",
    phone: "...",
    email: "...",
  },
};
```

Actual content comes from the Task 8 snapshot.

- [ ] **Step 4: Download any Sanity-hosted images used on the page**

For any `https://cdn.sanity.io/images/...` URLs captured in the snapshot, download the images to `apps/fysio-landing/public/` and update `siteData` to reference the local paths. Use `curl -o public/<filename> <url>` for each.

- [ ] **Step 5: Rewire all page/component files to read from `siteData` instead of Sanity queries**

For each file under `apps/fysio-landing/src/app/` that was pulling data from Sanity (`sanityFetch(...)`, `client.fetch(...)`, etc.):
- Replace the Sanity call with a direct read from `siteData`.
- Replace `urlFor(image).url()` with direct string paths from `siteData`.
- Remove `async` from components that no longer need it (if all data is sync).

If any component uses `<PortableText>` for rich text from Sanity, replace with plain JSX using the inlined content string.

- [ ] **Step 6: Remove Sanity-specific Next config**

Edit `apps/fysio-landing/next.config.ts`:
- Remove `transpilePackages: ["sanity", "@sanity/vision", "styled-components"]`
- Remove `reactCompiler: true`
- Remove the `remotePatterns` entry for `cdn.sanity.io`

Final config:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fysio-landing",
  images: { unoptimized: true },
};

export default nextConfig;
```

- [ ] **Step 7: Verify the legacy app still builds and runs**

```bash
cd apps/fysio-landing
npm run build
```

Expected: build succeeds, `out/` directory produced.

Run `npm run dev` and visit every page. Expected: visually matches the snapshot.

- [ ] **Step 8: Commit**

```bash
cd ../..
git add apps/fysio-landing
git commit -m "refactor: strip Sanity from fysio-landing, inline content as static data"
```

---

## Task 10: Migrate fysio-landing via the script

- [ ] **Step 1: Run the migration**

```bash
node scripts/migrate-demo.mjs fysio-landing
```

- [ ] **Step 2: Verify the migration**

Same verification as Phase 2 Task 7 sub-procedure:
- `app/fysio-landing/layout.tsx` has no `<html>/<body>`, has `demo-fysio-landing` wrapper.
- `app/fysio-landing/styles.css` has scoped tokens.
- No stray absolute asset paths.
- `/fysio-landing/` renders in dev and matches the snapshot visually.
- `/fysio-landing/terapeuter/` (if kept) renders.

- [ ] **Step 3: Commit**

```bash
git add app/fysio-landing public/fysio-landing
git commit -m "feat: migrate fysio-landing demo"
```

- [ ] **Step 4: Delete the content snapshot**

```bash
rm docs/superpowers/notes/fysio-content-snapshot.md
rmdir docs/superpowers/notes 2>/dev/null || true
git add -A docs/superpowers/notes
git commit -m "chore: remove fysio content snapshot after migration"
```

---

# Phase 4 — Migrate `hgn-landing` (with deps pruned)

## Task 11: Prune unused dependencies from `apps/hgn-landing/`

- [ ] **Step 1: Check what `react-hook-form`, `zod`, `@hookform/resolvers`, `embla-carousel-react` are used for**

```bash
grep -rn "react-hook-form\|@hookform\|zod\|embla-carousel" apps/hgn-landing/src/
```

- [ ] **Step 2: Remove forms and carousel (if used), replace with visual-only versions**

For any form using `useForm` + `zodResolver`: replace with plain `<form>` + `<input>` markup, no submit handler (or `onSubmit={(e) => e.preventDefault()}`). This matches the other demos' posture as a showcase.

For `embla-carousel-react` on the home page: if it's used for a hero carousel, replace with a static `<div>` rendering one of the slides. If it's a featured-projects carousel, render a static grid of project cards.

- [ ] **Step 3: Uninstall the pruned packages**

```bash
cd apps/hgn-landing
npm uninstall react-hook-form @hookform/resolvers zod embla-carousel-react
cd ../..
```

- [ ] **Step 4: Uninstall any Radix primitives no longer referenced**

```bash
grep -l "@radix-ui/react-" apps/hgn-landing/src/ -r | xargs grep -h "@radix-ui/react-" | sort -u
```

Compare the list of Radix packages actually imported against those in `package.json`. Uninstall any that no longer appear:

```bash
cd apps/hgn-landing
npm uninstall @radix-ui/react-<name>   # for each unused one
cd ../..
```

- [ ] **Step 5: Verify the app still builds**

```bash
cd apps/hgn-landing && npm run build && cd ../..
```

Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add apps/hgn-landing
git commit -m "refactor: prune unused deps from hgn-landing"
```

---

## Task 12: Migrate hgn-landing via the script

- [ ] **Step 1: Run the migration**

```bash
node scripts/migrate-demo.mjs hgn-landing
```

- [ ] **Step 2: Verify**

Same sub-procedure as Phase 2 Task 7. Walk every route.

Special note: `hgn-landing` has components under `src/components/{layout,sections,ui}` and may use `@/` aliases heavily. Confirm `grep -rn '@/' app/hgn-landing/` returns nothing that fails to resolve at dev-server build time.

If the dev server reports "Module not found" for any `@/` import, rewrite that import relative.

- [ ] **Step 3: Commit**

```bash
git add app/hgn-landing public/hgn-landing
git commit -m "feat: migrate hgn-landing demo"
```

---

# Phase 5 — Cleanup

## Task 13: Delete the legacy `apps/` tree and orchestration scripts

- [ ] **Step 1: Verify all 18 demos are present under `app/`**

```bash
ls app/ | sort
```

Expected output (19 lines: 18 demos + `globals.css` + `layout.tsx` + `page.tsx`; actually 21 entries total):
```
advokatfirma-demo
camping-demo
elektro-firma
fysio-landing
globals.css
hgn-landing
idrettsanlegg-demo
idrettslag-demo
layout.tsx
maler-demo
os-gravferdsbyraa
page.tsx
renseri-demo
stranda-golf
tannlege-demo
trelast-demo
treningssenter-demo
trykk-demo
vet-demo
vhut-landing
vvs
```

If any demo is missing, STOP and complete its migration before continuing.

- [ ] **Step 2: Delete `apps/`, old scripts, and `index.html`**

```bash
rm -rf apps
rm build.sh
rm -rf scripts  # scripts/patch-next-configs.js and scripts/fix-image-paths.js no longer needed; scripts/migrate-demo.mjs can also go — it was single-use
rm index.html
```

Alternatively, keep `scripts/migrate-demo.mjs` in git history and delete only the other two scripts — your call. Recommended: delete the whole `scripts/` directory since the migration is one-time.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove legacy apps/, build scripts, and index.html after consolidation"
```

---

## Task 14: Simplify `vercel.json`, `.gitignore`, `README.md`

- [ ] **Step 1: Rewrite `vercel.json`**

```json
{
  "framework": "nextjs"
}
```

Or delete it entirely — Vercel auto-detects Next.js. Recommended: delete.

```bash
rm vercel.json
```

- [ ] **Step 2: Rewrite `.gitignore`**

```
node_modules/
.next/
out/
.env*.local
.DS_Store
next-env.d.ts
```

- [ ] **Step 3: Rewrite `README.md`**

```markdown
# Landing Page Demos

A collection of 18 industry-specific landing page examples, served from a single Next.js app.

## Local development

    npm install
    npm run dev

Open http://localhost:3000/ for the showcase index, or navigate directly to a demo (e.g., http://localhost:3000/vvs/).

## Build

    npm run build

Static export is written to `out/`.

## Adding a new demo

1. Create `app/<slug>/` with a `layout.tsx`, `page.tsx`, and `styles.css`.
2. Scope CSS tokens under a `.demo-<slug>` wrapper (see any existing demo for the pattern).
3. Wrap the layout's JSX in `<div className="... demo-<slug>">{children}</div>`.
4. Put any demo-specific assets under `public/<slug>/`.
5. Add a card to the `demos` array in `app/page.tsx`.

## Deployment

Connected to Vercel. Push to `main` to deploy.
```

- [ ] **Step 4: Commit**

```bash
git add vercel.json .gitignore README.md
git commit -m "chore: simplify repo root after consolidation"
```

If `vercel.json` was deleted, use `git add -A`.

---

# Phase 6 — Verify

## Task 15: Run a full build and smoke-test every route

- [ ] **Step 1: Clean build**

```bash
rm -rf .next out
npm run build
```

Expected: build completes in under two minutes, exits 0.

- [ ] **Step 2: Check every demo produced output**

```bash
for slug in advokatfirma-demo camping-demo elektro-firma fysio-landing hgn-landing idrettsanlegg-demo idrettslag-demo maler-demo os-gravferdsbyraa renseri-demo stranda-golf tannlege-demo trelast-demo treningssenter-demo trykk-demo vet-demo vhut-landing vvs; do
  if [ -f "out/$slug/index.html" ]; then
    echo "✓ $slug"
  else
    echo "✗ $slug MISSING"
  fi
done
```

Expected: 18 lines, all `✓`.

- [ ] **Step 3: Check camping-demo sub-routes**

```bash
for sub in aktiviteter beliggenhet fasiliteter galleri kontakt om-oss overnatting priser; do
  if [ -f "out/camping-demo/$sub/index.html" ]; then
    echo "✓ camping-demo/$sub"
  else
    echo "✗ camping-demo/$sub MISSING"
  fi
done
```

Expected: 8 lines, all `✓`. (`camping-demo` has 8 sub-routes under `apps/camping-demo/app/`: aktiviteter, beliggenhet, fasiliteter, galleri, kontakt, om-oss, overnatting, priser.)

- [ ] **Step 4: Check fysio-landing sub-routes**

```bash
ls out/fysio-landing/
```

Expected: `index.html` plus any kept sub-routes (e.g., `terapeuter/`).

- [ ] **Step 5: Serve the static build and click through every demo**

```bash
npx serve out -p 3000
```

Visit `http://localhost:3000/`. Click every card; verify each demo renders. For demos with sub-routes, click through them.

Expected: no broken links, no broken images, no visually-broken layouts. Compare against production (`https://landing-page-demos.vercel.app/`) if any demo looks off.

Stop the static server.

- [ ] **Step 6: Measure build and disk size**

```bash
du -sh node_modules out
```

Expected: `node_modules` < 1 GB (vs. ~18 GB previously). `out` should be roughly similar in size to the previous `out/` — the HTML output is the same.

Measure `npm run build` wall time:
```bash
time npm run build
```

Expected: under 2 minutes on a typical machine.

- [ ] **Step 7: Final commit (if any fixes were needed during smoke-testing)**

```bash
git add -A
git commit -m "fix: resolve smoke-test issues from Phase 6 verification"
```

If no issues, skip this step.

---

## Task 16: Deploy preview to Vercel and verify parity

- [ ] **Step 1: Push the branch to GitHub**

```bash
git push origin <branch-name>
```

- [ ] **Step 2: Open the Vercel preview URL**

Vercel auto-creates a preview deploy for the push. Open the preview URL and walk through every demo.

Expected: visually and functionally identical to production. No broken assets, no 404s.

- [ ] **Step 3: If everything looks right, merge**

Standard PR review → merge to `main`.

---

# Post-merge sanity checks

These are not tasks to tick off in this plan, but reminders for the person merging:

- Vercel build log should show a single Next.js build step, not the 18 sequential `npm install + next build` calls from the old `build.sh`.
- Build time on Vercel should drop significantly.
- The `out/` structure is preserved so existing external links (e.g., `landing-page-demos.vercel.app/vvs/`) still work.

---

## Known gotchas

1. **Trailing slashes.** The old per-app basePath setup meant every URL had a trailing slash (`/vvs/`, not `/vvs`). We set `trailingSlash: true` in `next.config.ts` to preserve this. If you remove it, existing links will 404.

2. **`next/font` variable scoping.** `next/font` emits a CSS `@font-face` globally but attaches the variable (`--font-poppins`) to the wrapper class. Tokens that reference the variable (`--font-sans: var(--font-poppins)`) resolve correctly within the wrapper. If a font fails to apply, check that the wrapper's className includes both the font variable and the demo class.

3. **Token collisions at render time.** Only an issue if a demo renders outside its wrapper. The layout boundary prevents this. If it happens, something unusual is going on — investigate before papering over with `!important`.

4. **Path alias (`@/*`).** Our root `tsconfig.json` maps `@/*` to the repo root. In legacy demo code, `@/` pointed at the demo's own root. The migration script does not fully rewrite these; if a demo uses `@/components/foo`, the import might resolve to the wrong place (or fail). Convert to relative imports when you hit this.

5. **Image dimensions.** `next/image` with `unoptimized: true` requires explicit `width` and `height` (or `fill`). The migration doesn't touch these; if a demo's images were missing dimensions before, they still are. Not a regression.
