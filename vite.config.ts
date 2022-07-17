import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import Pages from "vite-plugin-pages"
import Layouts from "vite-plugin-vue-layouts"
import Components from "unplugin-vue-components/vite"
import { ssr } from "vite-plugin-ssr/plugin"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@client": path.resolve("./"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["assets/styles"],
        additionalData: '@import "sassy";',
      },
    },
  },

  base: "/portfolio-site/",

  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },

  plugins: [
    vue(),
    ssr({ prerender: true }),
    Pages({
      dirs: "pages",
      routeStyle: "nuxt",
      routeBlockLang: "yml",
    }),
    Layouts({
      layoutsDirs: ["layouts"],
      defaultLayout: "default",
    }),
    Components({
      dts: true,
      dirs: "components",
      directoryAsNamespace: true,
      deep: true,
    }),
  ],
})
