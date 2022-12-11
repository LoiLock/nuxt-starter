// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: false
  },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true
  },
  srcDir: 'src/'
})
