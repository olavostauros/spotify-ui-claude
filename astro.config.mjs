// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Detect deployment platform and set appropriate base path
// Vercel: use root path (undefined or "/")
// GitHub Pages: use repository path "/spotify-ui" (no trailing slash)
const isVercel = process.env.VERCEL === "1";
const base = isVercel ? "/" : "/spotify-ui";

// https://astro.build/config
export default defineConfig({
    site: "https://olavostauros.github.io",
    base: base,
    integrations: [tailwind()],
});
