// import { fileURLToPath, URL } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  css: ['@/assets/sass/main.sass'],
  alias: {
    // '@images': '@/public/images',
    // '@images': fileURLToPath(new URL('./public/images', import.meta.url)),
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "@/assets/sass/_variables.sass" as *\n
          `,
        },
      },
    },
  },

  modules: ["@nuxt/image"]
})
