// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  imports: {
    autoImport: false
  },
  hooks: {
    'autoImports:sources': (sources: string[]) => sources.splice(0, sources.length),
    'autoImports:dirs': (dirs: string[]) => dirs.splice(0, dirs.length),
    // @ts-ignore: Works fine
    'components:dirs': (dirs: string[]) => dirs.splice(0, dirs.length)
  },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true
  },
  css: [
    '@/assets/scss/app.scss'
  ],
  vite: {
    // Allow usinhg ~baloney instead of node_modules/baloney
    resolve: {
      alias: [
        // @ts-ignore: wajo
        {
          find: /^~.+/,
          // @ts-ignore: wajo
          replacement: val => val.replace(/^~/, '')
        }
      ]
    }
  }
});
