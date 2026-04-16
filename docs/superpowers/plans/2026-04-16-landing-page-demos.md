# Landing Page Demos — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate 18 industry landing page repos into a single monorepo at `~/landing-page-demos`, deployable as one Vercel static site with a card grid index page.

**Architecture:** Each repo is cloned into `apps/<name>/` with its `.git` dir removed (flat source in the monorepo). A `scripts/patch-next-configs.js` script adds `output: 'export'`, `basePath`, and `images.unoptimized` to each app's Next.js config. A `build.sh` installs, builds, and collects all static output into a root `out/` directory. Vercel deploys `out/` as a single static site.

**Tech Stack:** Next.js (each app), Node.js (config patcher), Bash (build script), HTML/CSS (index page), Vercel (deployment, outputDirectory: `out`)

---

## File Map

| File | Purpose |
|------|---------|
| `package.json` | Root package, defines `build` script |
| `.gitignore` | Excludes node_modules, .next, out |
| `vercel.json` | Points Vercel at build.sh and out/ |
| `build.sh` | Builds all apps, collects static output |
| `index.html` | Card grid navigation page |
| `README.md` | How to run locally / deploy |
| `scripts/patch-next-configs.js` | Patches each app's next.config.js |
| `apps/<name>/next.config.js` | Modified per app (basePath + export) |

---

## Task 1: Set up root project infrastructure

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `vercel.json`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "landing-page-demos",
  "private": true,
  "scripts": {
    "build": "./build.sh"
  }
}
```

- [ ] **Step 2: Create `.gitignore`**

```
node_modules/
apps/*/node_modules/
apps/*/.next/
apps/*/out/
out/
.DS_Store
```

- [ ] **Step 3: Create `vercel.json`**

```json
{
  "buildCommand": "bash build.sh",
  "outputDirectory": "out"
}
```

- [ ] **Step 4: Commit**

```bash
cd ~/landing-page-demos
git add package.json .gitignore vercel.json
git commit -m "chore: add root project infrastructure"
```

Expected: commit succeeds

---

## Task 2: Clone all 18 repos into apps/

**Files:**
- Create: `apps/<name>/` (18 directories)

Note: `vhut-landing` is private — ensure you are authenticated via SSH or HTTPS before cloning.

- [ ] **Step 1: Create apps/ directory and clone all repos**

```bash
cd ~/landing-page-demos
mkdir -p apps

repos=(
  fysio-landing
  vhut-landing
  hgn-landing
  advokatfirma-demo
  tannlege-demo
  vet-demo
  renseri-demo
  camping-demo
  treningssenter-demo
  trelast-demo
  maler-demo
  idrettsanlegg-demo
  idrettslag-demo
  trykk-demo
  elektro-firma
  vvs
  stranda-golf
  os-gravferdsbyraa
)

for repo in "${repos[@]}"; do
  git clone --depth 1 git@github.com:tordar/$repo.git apps/$repo
done
```

Expected: 18 directories appear in `apps/`

- [ ] **Step 2: Remove .git dirs from each cloned app (make them flat files)**

```bash
cd ~/landing-page-demos
for dir in apps/*/; do
  rm -rf "$dir.git"
done
```

Expected: no `.git` directories inside `apps/`

- [ ] **Step 3: Verify each app has a package.json**

```bash
for dir in apps/*/; do
  if [ ! -f "$dir/package.json" ]; then
    echo "MISSING: $dir/package.json"
  else
    echo "OK: $dir"
  fi
done
```

Expected: all 18 print `OK`. If any print `MISSING`, stop and investigate.

- [ ] **Step 4: Verify each app uses Next.js**

```bash
for dir in apps/*/; do
  name=$(basename "$dir")
  version=$(node -e "const p=require('./$dir/package.json'); console.log(p.dependencies?.next || p.devDependencies?.next || 'NOT FOUND')")
  echo "$name: $version"
done
```

Expected: all 18 show a Next.js version. If any show `NOT FOUND`, note which apps use a different framework — those will need manual build config in Task 6.

- [ ] **Step 5: Commit**

```bash
cd ~/landing-page-demos
git add apps/
git commit -m "chore: add all 18 landing page apps"
```

Expected: large initial commit with all app source

---

## Task 3: Write the next.config.js patcher script

**Files:**
- Create: `scripts/patch-next-configs.js`

- [ ] **Step 1: Create scripts directory and patcher script**

```bash
mkdir -p ~/landing-page-demos/scripts
```

Create `~/landing-page-demos/scripts/patch-next-configs.js`:

```js
const fs = require('fs')
const path = require('path')

const APPS = [
  'fysio-landing',
  'vhut-landing',
  'hgn-landing',
  'advokatfirma-demo',
  'tannlege-demo',
  'vet-demo',
  'renseri-demo',
  'camping-demo',
  'treningssenter-demo',
  'trelast-demo',
  'maler-demo',
  'idrettsanlegg-demo',
  'idrettslag-demo',
  'trykk-demo',
  'elektro-firma',
  'vvs',
  'stranda-golf',
  'os-gravferdsbyraa',
]

const ROOT = path.join(__dirname, '..')

function getInjection(appName) {
  return `  output: 'export',\n  basePath: '/${appName}',\n  images: { unoptimized: true },\n`
}

function findConfigFile(appDir) {
  for (const name of ['next.config.js', 'next.config.mjs', 'next.config.ts', 'next.config.cjs']) {
    const p = path.join(appDir, name)
    if (fs.existsSync(p)) return p
  }
  return null
}

let patched = 0
let skipped = 0
let failed = 0

for (const app of APPS) {
  const appDir = path.join(ROOT, 'apps', app)

  if (!fs.existsSync(appDir)) {
    console.warn(`⚠️  apps/${app} not found, skipping`)
    skipped++
    continue
  }

  const configFile = findConfigFile(appDir)
  const injection = getInjection(app)

  if (!configFile) {
    const newConfig = `/** @type {import('next').NextConfig} */\nconst nextConfig = {\n${injection}}\n\nmodule.exports = nextConfig\n`
    fs.writeFileSync(path.join(appDir, 'next.config.js'), newConfig)
    console.log(`✅  ${app}: created next.config.js`)
    patched++
    continue
  }

  let content = fs.readFileSync(configFile, 'utf-8')

  if (content.includes("output: 'export'") || content.includes('output: "export"')) {
    console.log(`⏭️  ${app}: already patched`)
    skipped++
    continue
  }

  // Inject after the opening brace of the exported config object.
  // Handles: const x = {, module.exports = {, export default {
  const PATTERN = /((?:const\s+\w+\s*=|module\.exports\s*=|export\s+default)\s*\{)(\s*\n?)/
  const match = content.match(PATTERN)

  if (!match) {
    console.error(`❌  ${app}: unrecognized config format in ${path.basename(configFile)}`)
    console.error(`    Manually add: output: 'export', basePath: '/${app}', images: { unoptimized: true }`)
    failed++
    continue
  }

  content = content.replace(PATTERN, (_, prefix, ws) => `${prefix}\n${injection}`)
  fs.writeFileSync(configFile, content)
  console.log(`✅  ${app}: patched ${path.basename(configFile)}`)
  patched++
}

console.log(`\nDone: ${patched} patched, ${skipped} skipped, ${failed} failed`)
if (failed > 0) process.exit(1)
```

- [ ] **Step 2: Commit the script**

```bash
cd ~/landing-page-demos
git add scripts/patch-next-configs.js
git commit -m "chore: add next.config patcher script"
```

---

## Task 4: Run the patcher and fix any failures

**Files:**
- Modify: `apps/*/next.config.js` (or `.mjs`, `.ts`)

- [ ] **Step 1: Run the patcher**

```bash
cd ~/landing-page-demos
node scripts/patch-next-configs.js
```

Expected output: 18 lines of `✅` or `⏭️`, final line `Done: X patched, Y skipped, 0 failed`

- [ ] **Step 2: If any app shows ❌ — manually patch it**

Open the flagged app's config file and add these three fields to the exported config object:

```js
output: 'export',
basePath: '/APPNAME',   // replace APPNAME with the actual app folder name
images: { unoptimized: true },
```

- [ ] **Step 3: Verify one patched config looks correct**

```bash
cat apps/fysio-landing/next.config.js
```

Expected: file contains `output: 'export'`, `basePath: '/fysio-landing'`, `images: { unoptimized: true }`

- [ ] **Step 4: Commit patched configs**

```bash
cd ~/landing-page-demos
git add apps/
git commit -m "chore: patch next.config.js for static export with basePath"
```

---

## Task 5: Write build.sh

**Files:**
- Create: `build.sh`

- [ ] **Step 1: Create build.sh**

Create `~/landing-page-demos/build.sh`:

```bash
#!/usr/bin/env bash
set -e

APPS=(
  fysio-landing
  vhut-landing
  hgn-landing
  advokatfirma-demo
  tannlege-demo
  vet-demo
  renseri-demo
  camping-demo
  treningssenter-demo
  trelast-demo
  maler-demo
  idrettsanlegg-demo
  idrettslag-demo
  trykk-demo
  elektro-firma
  vvs
  stranda-golf
  os-gravferdsbyraa
)

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Cleaning output directory..."
rm -rf "$ROOT_DIR/out"
mkdir -p "$ROOT_DIR/out"

cp "$ROOT_DIR/index.html" "$ROOT_DIR/out/index.html"

for APP in "${APPS[@]}"; do
  APP_DIR="$ROOT_DIR/apps/$APP"
  echo ""
  echo "=== Building $APP ==="

  if [ ! -d "$APP_DIR" ]; then
    echo "⚠️  Skipping $APP (directory not found)"
    continue
  fi

  cd "$APP_DIR"
  npm install --silent
  npm run build

  if [ ! -d "$APP_DIR/out" ]; then
    echo "❌  $APP: no out/ directory after build. Check next.config.js patch."
    exit 1
  fi

  mkdir -p "$ROOT_DIR/out/$APP"
  cp -r "$APP_DIR/out/." "$ROOT_DIR/out/$APP/"
  echo "✅  $APP done"
  cd "$ROOT_DIR"
done

echo ""
echo "=== Build complete. Output in: $ROOT_DIR/out/ ==="
```

- [ ] **Step 2: Make it executable**

```bash
chmod +x ~/landing-page-demos/build.sh
```

- [ ] **Step 3: Commit**

```bash
cd ~/landing-page-demos
git add build.sh
git commit -m "chore: add build.sh for static export collection"
```

---

## Task 6: Test build on one app

Before running the full build across all 18 apps, verify the build pipeline works end-to-end on one app.

- [ ] **Step 1: Run build for fysio-landing only**

```bash
cd ~/landing-page-demos/apps/fysio-landing
npm install
npm run build
```

Expected: build succeeds, `apps/fysio-landing/out/` directory is created containing HTML files

- [ ] **Step 2: If build fails with "Image Optimization" error**

Add `images: { unoptimized: true }` is already in the config patch. If you still see this error, check the config was saved correctly:

```bash
grep -n "unoptimized" apps/fysio-landing/next.config.js
```

Expected: prints a line containing `unoptimized: true`

- [ ] **Step 3: If build fails with "export" not recognized**

Check the Next.js version. If it's older than 13.3, add `next export` to the build:

```bash
node -e "console.log(require('./apps/fysio-landing/package.json').dependencies.next)"
```

If version is `< 13.3.0`, open `apps/fysio-landing/package.json`, find the `"build"` script, and change it to:

```json
"build": "next build && next export"
```

Then also remove `output: 'export'` from that app's `next.config.js` (older versions use `next export` command instead).

- [ ] **Step 4: Verify output structure**

```bash
ls apps/fysio-landing/out/
```

Expected: contains `index.html` and static asset folders

- [ ] **Step 5: Clean up test build output (build.sh will recreate it)**

```bash
rm -rf apps/fysio-landing/out
```

---

## Task 7: Create index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `~/landing-page-demos/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page Demos</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f4f4f5;
      color: #111;
      padding: 3rem 2rem;
      min-height: 100vh;
    }
    header { max-width: 960px; margin: 0 auto 2.5rem; }
    header h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.4rem; }
    header p { color: #666; font-size: 1rem; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.25rem;
      max-width: 960px;
      margin: 0 auto;
    }
    .card {
      display: block;
      background: #fff;
      border: 1px solid #e4e4e7;
      border-radius: 10px;
      padding: 1.25rem 1.25rem 1rem;
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.15s, transform 0.15s;
    }
    .card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }
    .card-industry {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #999;
      margin-bottom: 0.4rem;
    }
    .card-name {
      font-size: 1.05rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <header>
    <h1>Landing Page Demos</h1>
    <p>Industry-specific landing page examples.</p>
  </header>
  <div class="grid">
    <a class="card" href="./fysio-landing/">
      <div class="card-industry">Helse</div>
      <div class="card-name">Fysioterapi</div>
    </a>
    <a class="card" href="./vhut-landing/">
      <div class="card-industry">Demo</div>
      <div class="card-name">Vhut</div>
    </a>
    <a class="card" href="./hgn-landing/">
      <div class="card-industry">Demo</div>
      <div class="card-name">HGN</div>
    </a>
    <a class="card" href="./advokatfirma-demo/">
      <div class="card-industry">Juss</div>
      <div class="card-name">Advokatfirma</div>
    </a>
    <a class="card" href="./tannlege-demo/">
      <div class="card-industry">Helse</div>
      <div class="card-name">Tannlege</div>
    </a>
    <a class="card" href="./vet-demo/">
      <div class="card-industry">Helse</div>
      <div class="card-name">Veterinær</div>
    </a>
    <a class="card" href="./renseri-demo/">
      <div class="card-industry">Tjenester</div>
      <div class="card-name">Renseri</div>
    </a>
    <a class="card" href="./camping-demo/">
      <div class="card-industry">Reiseliv</div>
      <div class="card-name">Camping</div>
    </a>
    <a class="card" href="./treningssenter-demo/">
      <div class="card-industry">Helse</div>
      <div class="card-name">Treningssenter</div>
    </a>
    <a class="card" href="./trelast-demo/">
      <div class="card-industry">Bygg</div>
      <div class="card-name">Trelast</div>
    </a>
    <a class="card" href="./maler-demo/">
      <div class="card-industry">Håndverk</div>
      <div class="card-name">Maler</div>
    </a>
    <a class="card" href="./idrettsanlegg-demo/">
      <div class="card-industry">Sport</div>
      <div class="card-name">Idrettsanlegg</div>
    </a>
    <a class="card" href="./idrettslag-demo/">
      <div class="card-industry">Sport</div>
      <div class="card-name">Idrettslag</div>
    </a>
    <a class="card" href="./trykk-demo/">
      <div class="card-industry">Media</div>
      <div class="card-name">Trykk</div>
    </a>
    <a class="card" href="./elektro-firma/">
      <div class="card-industry">Håndverk</div>
      <div class="card-name">Elektro</div>
    </a>
    <a class="card" href="./vvs/">
      <div class="card-industry">Håndverk</div>
      <div class="card-name">VVS</div>
    </a>
    <a class="card" href="./stranda-golf/">
      <div class="card-industry">Sport</div>
      <div class="card-name">Golf</div>
    </a>
    <a class="card" href="./os-gravferdsbyraa/">
      <div class="card-industry">Tjenester</div>
      <div class="card-name">Gravferdsbyrå</div>
    </a>
  </div>
</body>
</html>
```

- [ ] **Step 2: Verify the HTML is well-formed**

Open `index.html` directly in a browser. Expected: 18 cards visible in a grid, no broken layout.

- [ ] **Step 3: Commit**

```bash
cd ~/landing-page-demos
git add index.html
git commit -m "feat: add card grid index page"
```

---

## Task 8: Run full build and verify output

- [ ] **Step 1: Run the full build**

```bash
cd ~/landing-page-demos
./build.sh
```

Expected: each app prints `✅ <name> done`, final line `=== Build complete. ===`
This will take several minutes (18 npm installs + builds).

- [ ] **Step 2: Verify output structure**

```bash
ls out/
```

Expected: `index.html` plus 18 subdirectories, one per app name

```bash
ls out/fysio-landing/
```

Expected: `index.html` and `_next/` (or similar static asset folders)

- [ ] **Step 3: Serve and test locally**

```bash
cd ~/landing-page-demos
npx serve out -p 3000
```

Open `http://localhost:3000` in a browser. Expected: index page loads with 18 cards.

Click one card. Expected: the landing page loads correctly (no missing styles, no broken images).

Click back and try 2–3 more cards to confirm routing works.

- [ ] **Step 4: Add out/ to .gitignore if not already there**

```bash
grep "^out/$" .gitignore || echo "out/" >> .gitignore
```

Expected: `.gitignore` contains `out/`

---

## Task 9: Create README.md

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `~/landing-page-demos/README.md`**

```markdown
# Landing Page Demos

A collection of 18 industry-specific landing page examples, deployable as a single Vercel project.

## Local preview

Build all apps and serve the output:

    ./build.sh
    npx serve out -p 3000

Then open http://localhost:3000.

## Developing a single app

    cd apps/<app-name>
    npm install
    npm run dev

The app runs on its default port (usually 3000). Note: basePath is set for production builds, not local dev.

## Adding a new demo

1. Clone the new repo into `apps/`
2. Remove its `.git` dir: `rm -rf apps/<name>/.git`
3. Run the patcher: `node scripts/patch-next-configs.js`
4. Add the app name to the `APPS` array in `build.sh`
5. Add a card to `index.html`
6. Commit and push

## Deployment

Connected to Vercel as a single project. `vercel.json` sets:
- `buildCommand`: `bash build.sh`
- `outputDirectory`: `out`

Push to main to trigger a deploy.
```

- [ ] **Step 2: Commit**

```bash
cd ~/landing-page-demos
git add README.md
git commit -m "docs: add README with local dev and deploy instructions"
```

---

## Task 10: Create GitHub repo and push

- [ ] **Step 1: Create the GitHub repository**

```bash
gh repo create landing-page-demos --public --source=. --remote=origin --description="Industry landing page demos — single Vercel deployment"
```

Expected: repo created at `github.com/tordar/landing-page-demos`

- [ ] **Step 2: Push all commits**

```bash
cd ~/landing-page-demos
git push -u origin main
```

Expected: all commits pushed, no errors

- [ ] **Step 3: Verify on GitHub**

Open `https://github.com/tordar/landing-page-demos` and confirm all files and app source code are present.
