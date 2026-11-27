import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://khaledtlili.dev',integrations:[mdx(),sitemap({filter: page => !new URL(page).pathname.startsWith('/challenge')})],markdown:{shikiConfig:{theme:'github-dark'}}});