// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

// Astro copies the full-size originals of content-collection images (project
// hero PNGs, ~7 MB each) into dist/_astro even though pages only use the
// resized WebP versions. After the build, remove any original PNG/JPEG in
// dist/_astro that no built file references. Source images in src/ are untouched.
/** @type {import('astro').AstroIntegration} */
const dropUnusedImageOriginals = {
  name: 'drop-unused-image-originals',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const root = fileURLToPath(dir);
      const files = readdirSync(root, { recursive: true, withFileTypes: true })
        .filter((f) => f.isFile())
        .map((f) => join(f.parentPath, f.name));
      const text = files
        .filter((f) => /\.(html|css|js|mjs|xml|json|webmanifest|txt)$/.test(f))
        .map((f) => readFileSync(f, 'utf8'))
        .join('\n');
      for (const file of files) {
        const name = file.slice(file.lastIndexOf('/') + 1);
        if (file.includes('/_astro/') && /\.(png|jpe?g)$/i.test(name) && !text.includes(name)) {
          rmSync(file);
          logger.info(`removed unused original ${name}`);
        }
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nextgenwargame.com',
  integrations: [mdx(), sitemap(), dropUnusedImageOriginals],
  vite: {
    plugins: [tailwindcss()],
    // Emit every script as a file instead of inlining it, so the
    // Content-Security-Policy in netlify.toml can allow scripts from 'self' only.
    build: { assetsInlineLimit: 0 },
  }
});
