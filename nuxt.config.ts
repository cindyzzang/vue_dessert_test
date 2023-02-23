import { defineNuxtConfig } from "nuxt/config";

const lifecycle = process.env.npm_lifecycle_event;
export default defineNuxtConfig({
    css: [
        '~/assets/layout.css',
        '~/assets/contents.css',
        '~/assets/scss/index.scss'
    ],
    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        }
    ],
    build: {
        transpile: lifecycle === "build" ? ["element-plus"] : [],
    },
})
