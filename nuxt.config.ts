// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio/",
    buildAssetsDir: "/_nuxt/",
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"],
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
