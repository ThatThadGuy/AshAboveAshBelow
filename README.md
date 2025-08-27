# Ash Above, Ash Below — Playtest Pack

Free, static SRD + tools for fast playtests. This is a Progressive Web App (PWA), meaning it can be installed on your device for offline use.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:4321
Build & Deploy
This repo is configured for automated deployment to GitHub Pages.

In your repository's Settings → Pages, set the Source to GitHub Actions.
Pushing to the main branch will automatically trigger the build and deploy workflow.
Ensure the site URL in astro.config.mjs matches your GitHub Pages URL.
Smoke-test script
# 1) Start dev server, verify pages load
npm run dev

# 2) Build and serve dist, verify search and PWA works
npm run build
npx http-server dist -p 5050
