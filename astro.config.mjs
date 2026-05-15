// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["url", "baseLocale"],
        urlPatterns: [
          {
            pattern: "/",
            localized: [
              ["ru", "/ru"],
              ["en", "/en"],
            ],
          },
          {
            pattern: "/:path(.*)?",
            localized: [
              ["ru", "/ru/:path(.*)?"],
              ["en", "/en/:path(.*)?"],
            ],
          },
        ],
      }),
      tailwindcss(),
    ],
  },
  integrations: [react()],
})
