export default defineNuxtConfig({
  ssr: false,
  devServer: {
    port: 8000
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "Next Gen Technologies",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Next Gen Technologie." },
      ],
    },
  },

  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
});
