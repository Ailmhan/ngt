export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "Techian by Oji Halawa",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Techian by Oji Halawa." },
      ],
    },
  },

  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
});
