// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    base: '/portfolio-vrs/', // Substitua <nome-do-repositorio> pelo nome do seu repositório
    integrations: [tailwind()]
});