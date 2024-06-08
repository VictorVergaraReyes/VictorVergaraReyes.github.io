// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      title:"vic vr dev",
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: "icon",
          type: "image/svg+xml", // SVG specific type
          href: "favicon.svg"
        }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})
