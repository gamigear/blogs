// vite.config.ts

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfig } from 'vite';

// Provide the actual value of the path, not a stringified string

const config: UserConfig = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['@skeletonlabs/skeleton']
  },
  build: {
    sourcemap: false, // <-- ensure this is true
    chunkSizeWarningLimit: 50000
  },

};

// Export with defineConfig for better typing and auto-completion
export default defineConfig(config);
