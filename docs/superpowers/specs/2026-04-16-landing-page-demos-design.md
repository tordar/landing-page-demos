# Landing Page Demos — Design Spec

**Date:** 2026-04-16

## Overview

A local monorepo (`~/landing-page-demos`) that consolidates ~18 industry-specific landing page demo repos into a single navigable gallery. Deployable as one Vercel project.

## Repos to Include

| Repo | Industry |
|------|----------|
| fysio-landing | Physiotherapy |
| vhut-landing | (private) |
| hgn-landing | (unknown) |
| advokatfirma-demo | Law firm |
| tannlege-demo | Dentist |
| vet-demo | Veterinarian |
| renseri-demo | Dry cleaner |
| camping-demo | Camping |
| treningssenter-demo | Gym |
| trelast-demo | Lumber/construction |
| maler-demo | Painter |
| idrettsanlegg-demo | Sports facility |
| idrettslag-demo | Sports club |
| trykk-demo | Printing |
| elektro-firma | Electrical company |
| vvs | Plumbing/VVS |
| stranda-golf | Golf course |
| os-gravferdsbyraa | Funeral home |

## Folder Structure

```
~/landing-page-demos/
├── index.html                    ← static card grid index page
├── package.json                  ← root build script
├── start-all.sh                  ← local dev: starts all apps on assigned ports
├── vercel.json                   ← sets output directory to out/
├── README.md
├── docs/superpowers/specs/       ← this file
└── apps/
    ├── fysio-landing/            ← cloned repo, untouched except next.config.js
    ├── tannlege-demo/
    └── ...                       ← all 18 repos
```

## Index Page

- Plain static `index.html` — no framework, just HTML/CSS
- Card grid layout: one card per demo
- Each card shows the industry/demo name
- In production: links to `/<app-name>/` (subpaths on the same domain)
- In local dev: links to `localhost:PORT` (assigned per app in `start-all.sh`)

## Build & Deployment

### Static export approach
Each app is a Next.js app. The root build script:
1. Iterates through `apps/`
2. Runs `npm install && next build` in each (with `output: 'export'`)
3. Copies each app's `out/` to root `out/<app-name>/`
4. Copies root `index.html` to `out/index.html`

Each app's `next.config.js` gets two additions:
- `output: 'export'` — enables static HTML export
- `basePath: '/<app-name>'` — ensures assets resolve correctly at the subpath

### Vercel
- Single Vercel project connected to the GitHub repo
- `vercel.json` sets `outputDirectory: "out"`
- Production URLs: `landing-page-demos.vercel.app/<app-name>/`

### Local dev
- `start-all.sh` assigns each app a port (starting at 3001) and starts them in background
- Index page links point to `localhost:PORT` when opened locally

## Key Constraints

- All apps must be static/client-side (no `getServerSideProps` or API routes)
- The only code change per app is adding `output: 'export'` and `basePath` to `next.config.js`
- Apps are otherwise untouched — no shared dependencies, no framework migration
