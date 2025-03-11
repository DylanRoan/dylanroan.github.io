// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://DylanRoan.github.io",
  base: '/portfolio',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap(),
  ]
});