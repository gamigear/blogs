// @ts-check
import { defineConfig } from 'astro/config';
const isProduction = process.env.NODE_ENV === 'production';
// ✅ Add trailing slash to base
const base = isProduction ? '/' : '/'; // add user base url '/astro/vyzor/preview/' on first slash 

export default defineConfig({
    base,
    build: {
        assetsPrefix: base,
    },
    vite: {
        build: {
            chunkSizeWarningLimit: 50000,
        },
        define: {
            'global': 'window'
        }
    }
});
