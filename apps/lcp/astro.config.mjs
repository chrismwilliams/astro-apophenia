import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import webVitals from "@astrojs/web-vitals";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://lcp.pages.dev/",
  integrations: [db(), webVitals()],
  output: "hybrid",
  adapter: cloudflare()
});