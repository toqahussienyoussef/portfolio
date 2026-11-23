import { projects } from "./app/data/projects.js";

export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: "/portfolio/",
  },

  nitro: {
    preset: "github_pages",
    prerender: {
      crawlLinks: true,
      routes: ["/", ...projects.map((project) => `/projects/${project.slug}`)],
    },
  },

  css: ["~/assets/css/main.scss", "~/assets/css/projects.scss"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-toast"],

  tailwindcss: {
    cssPath: "~/assets/css/main.scss",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
