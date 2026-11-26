// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://dash128.github.io',
    // The case studies used to live at /projects/<slug> (English only). Keep those links alive.
    redirects: {
        '/projects/pdf-report-api': '/en/projects/pdf-report-api/',
        '/projects/movies-app': '/en/projects/movies-app/',
        '/projects/poke-web': '/en/projects/poke-web/',
    },
});
