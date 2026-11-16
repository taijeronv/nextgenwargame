# nextgenwargame: Site Rules (shared rules: ../CLAUDE.md)

## 1. Purpose

a. Public site for military decision-training systems (CADE, Orders Production, Controller Package Generator), decision records, Field Notes, and the AI Workbench. Source: `README.md`.

b. Biography and general AI help belong on taijeronv.info, not here.

## 2. Hosting and Deploy

a. Live address: `https://www.nextgenwargame.com` (`site` in `astro.config.mjs`).

b. Hosted on Netlify. Build settings are in `netlify.toml`: command `npm run build`, publish folder `dist`, Node 22.12.0.

c. Deploys through Netlify continuous deployment: pushing to `master` on GitHub publishes the site (recorded in `QMD.md`). So a push is a deploy.

## 3. Commands

a. Install: `npm install`. Node version is pinned in `.nvmrc` (22.12.0).

b. Build: `npm run build`. Type check: `npm run check`. Local preview: `npm run dev`.

## 4. Quirks

a. The visual design adapts the Arcbes 1.0.1 template (MIT license). Keep `THIRD_PARTY_NOTICES.md` intact.

b. The www address is the main one: the bare domain redirects to www (recorded in `QMD.md`).

c. The GitHub repository is public.
