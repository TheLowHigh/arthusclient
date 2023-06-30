import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1420
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/target/**']
      }
    }
  },
  integrations: [tailwind()]
});