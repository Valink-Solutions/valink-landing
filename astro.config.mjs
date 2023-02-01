import { defineConfig } from 'astro/config';
import fonts from 'astro-fonts-next';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), fonts({
    url: 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap'
  })],
  output: "server",
  adapter: cloudflare()
});