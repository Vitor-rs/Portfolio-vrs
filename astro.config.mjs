// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    base: '/portfolio-vrs/',
    integrations: [tailwind()]
});