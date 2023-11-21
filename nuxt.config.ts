// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@types': '~/types/index'
  },
  css: ['@/assets/sass/main.sass'],
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
  modules: ['@nuxt/image'],
  typescript: {
    typeCheck: false
  }
})
