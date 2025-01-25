import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://ryoma-abe.github.io",
  base: "/Luxury-Architect",
});
