export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: "/portfolio/",
  },

  nitro: {
    preset: "github_pages",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  css: ["~/assets/css/main.scss"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-toast"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
