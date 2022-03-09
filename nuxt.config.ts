import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL
    },
    css: [],
    build: {
        transpile: ["@urql/vue", "naive-ui", "treemate", "seemly", "vueuc", "vdirs"]
    },
    buildModules: [
        ['@pinia/nuxt', {disableVuex: true}],
    ],
})