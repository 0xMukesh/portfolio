import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import unocss from "unocss/astro";
import vesper from "./src/lib/vesper.json";

export default defineConfig({
  adapter: vercel(),
  output: "hybrid",
  integrations: [
    solidJs(),
    unocss({ injectReset: true }),
    vue(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  server: {
    port: 3000
  },
  // @ts-ignore
  markdown: { shikiConfig: { theme: vesper, wrap: true } },
});
