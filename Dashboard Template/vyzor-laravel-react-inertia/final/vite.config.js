import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? '/vyzor-inertia-react-laravel/preview' : '';
export default  defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name][extname]', // ✅ disable hashing
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',

            },
            onwarn(warning, warn) {
                if (
                  warning.code === "EVAL" &&
                  /node_modules\/react-audio-player\//.test(warning.id)
                ) {
                  return; // ignore this warning
                }
                if (
                    warning.code === "EVAL" &&
                    /node_modules\/react-listbox\//.test(warning.id)
                  ) {
                    return; // ignore this warning
                  }
                warn(warning);
              },
        },
    },
    base: basePath,
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: ([
                        'resources/js/assets/images/',
                        'resources/js/assets/icon-fonts/',
                        'resources/js/assets/audio/',
                        'resources/js/assets/video/',
                    ]),
                    dest: 'assets'
                }
            ]
        }),
        react(),
    ],
    define: {
        global: 'window',
        __APP_BASE_PATH__: JSON.stringify(basePath), //
    },
    css: {
        url: false, 
        preprocessorOptions: {
            scss: {
                additionalData: `$base-url: '${basePath}';`, //
            },
        },
    },
});
