#!/usr/bin/env node
// One-off: fix the broken @theme scoping produced by migrate-demo.mjs.
//
// The migration script rewrote:
//   @theme inline { --color-X: var(--X); }
// into:
//   @theme { --color-X: initial; }
//   .demo-<slug> { --color-X: var(--X); }
//
// But in Tailwind v4, setting a @theme token to `initial` REMOVES the
// generated utility (e.g. `.bg-black`, `.font-display`). The scoped
// override then sets a CSS variable that no utility references.
//
// This script collapses those two blocks back into a single
//   @theme inline { --color-X: var(--X); }
// block per styles.css. Since Next.js bundles each route's CSS
// separately, the theme tokens don't leak between demos.
//
// Usage: node scripts/fix-demo-theme-scoping.mjs

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");

const slugs = fs
  .readdirSync(APP_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(APP_DIR, d.name, "styles.css")))
  .map((d) => d.name);

let fixedCount = 0;
for (const slug of slugs) {
  const stylesPath = path.join(APP_DIR, slug, "styles.css");
  const original = fs.readFileSync(stylesPath, "utf-8");
  const wrapper = `.demo-${slug.replace(/[^a-z0-9-]/gi, "-")}`;

  const themeRegex = /@theme\s*\{([\s\S]*?)\}/;
  const themeMatch = original.match(themeRegex);
  if (!themeMatch) continue;

  const themeBody = themeMatch[1];
  if (!/:\s*initial\s*;/.test(themeBody)) continue; // already fixed

  const tokenNames = [];
  for (const line of themeBody.split("\n")) {
    const m = line.match(/^\s*(--[a-zA-Z0-9_-]+)\s*:\s*initial\s*;/);
    if (m) tokenNames.push(m[1]);
  }
  if (tokenNames.length === 0) continue;

  const scopeRegex = new RegExp(
    `${wrapper.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{([\\s\\S]*?)\\}`
  );
  const scopeMatch = original.match(scopeRegex);
  if (!scopeMatch) {
    console.warn(`⚠️  ${slug}: no ${wrapper} block found, skipping`);
    continue;
  }

  const scopeBody = scopeMatch[1];
  const tokenValues = new Map();
  const keepLines = [];
  for (const line of scopeBody.split("\n")) {
    const m = line.match(/^\s*(--[a-zA-Z0-9_-]+)\s*:\s*([^;]+);\s*$/);
    if (m && tokenNames.includes(m[1])) {
      tokenValues.set(m[1], m[2].trim());
    } else if (line.trim()) {
      keepLines.push(line);
    }
  }

  const newThemeBlock =
    "@theme inline {\n" +
    tokenNames
      .map((name) => `  ${name}: ${tokenValues.get(name) ?? "initial"};`)
      .join("\n") +
    "\n}";

  let updated = original.replace(themeRegex, newThemeBlock);

  if (keepLines.length > 0) {
    const newScopeBlock = `${wrapper} {\n${keepLines.join("\n")}\n}`;
    updated = updated.replace(scopeRegex, newScopeBlock);
  } else {
    updated = updated.replace(scopeRegex, "").replace(/\n{3,}/g, "\n\n");
  }

  if (updated !== original) {
    fs.writeFileSync(stylesPath, updated);
    fixedCount++;
    console.log(`✅ fixed ${slug}/styles.css (${tokenNames.length} tokens)`);
  }
}

console.log(`\nDone. Fixed ${fixedCount} file(s).`);
