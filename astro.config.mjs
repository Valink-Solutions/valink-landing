import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import autoprefixer from "autoprefixer";

// https://astro.build/config
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  vite: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  // output: "server",
  // adapter: cloudflare()
});
