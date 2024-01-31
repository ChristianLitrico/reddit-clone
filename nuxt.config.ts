// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        assets: "/<rootDir>//assets",
    },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxtjs/tailwindcss"],
    typescript: {
        typeCheck: true,
    },
})
