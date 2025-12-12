// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio/",
    cdnURL: "/portfolio/", // Add this line - crucial for GitHub Pages
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-toast"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
