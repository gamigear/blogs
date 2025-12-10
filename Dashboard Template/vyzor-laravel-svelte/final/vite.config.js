import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '' : ''; // for production url ex:/laravelsvelte/vyzor/preview
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        svelte(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    css: {
        url: false,
        preprocessorOptions: {
            scss: {
                // Injects a SCSS variable with the base URL
                additionalData: `$base-url: '${basePath}';`,
            },
        },
    },
    define: {
        __BASE_PATH__: JSON.stringify(basePath) // Set base URL here : "/svelte/ynex/preview"
    },
});
