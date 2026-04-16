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
