import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import netlify from "@astrojs/netlify/functions";


/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  themes: ["slack-dark", "github-light"],
  useDarkModeMediaQuery: true,
  styleOverrides: {
    // codeFontSize: '0.9rem',
  }
};


// https://astro.build/config
export default defineConfig({
  site: "https://ivalshamkya.com",
  image: {
    service: sharpImageService()
  },
  integrations: [expressiveCode(astroExpressiveCodeOptions), mdx(), sitemap(), react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["react-icons"]
    }
  },
});