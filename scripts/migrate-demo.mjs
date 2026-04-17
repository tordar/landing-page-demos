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
  css = css.replace(/(^|\})(\s*):root(\s*)\{/g, `$1$2${wrapper}$3{`);
  return css;
}

function rewriteLayoutJsx(src, slug) {
  const wrapperClass = `demo-${slug.replace(/[^a-z0-9-]/gi, "-")}`;
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
  if (htmlClass) parts.push(htmlClass);
  if (bodyClass) parts.push(bodyClass);

  const exprParts = parts.map((p) => `\${${p}}`);
  const classExpr = `\`${exprParts.join(" ")} ${wrapperClass}\``.replace(/  +/g, " ");

  let out = src;
  out = out.replace(/<html[^>]*>\s*<body[^>]*>/, `<div className={${classExpr}}>`);
  out = out.replace(/<\/body>\s*<\/html>/, `</div>`);
  return out;
}
