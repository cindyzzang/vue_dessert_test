import { defineNuxtConfig } from "nuxt/config";

const lifecycle = process.env.npm_lifecycle_event;
export default defineNuxtConfig({
    experimental: { payloadExtraction: false },
    nitro: {
        prerender: {
            routes: ['/cupcake', '/strawberry_cake', '/pudding','/cookie',
                    '/crepe','/ice_cream','/macaron','/churros','/donut',
                    '/yogurt','/apple_pie','/tanghulu','/pretzel','/hot_choco','/croissant','/jelly']
        }
    },
    modules: ['@element-plus/nuxt'],
    css: [
        '~/assets/styles/layout.css',
        '~/assets/styles/contents.css',
        '~/assets/styles/scss/index.scss',

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
    app: {
        head: {
            "title" : '나와 잘 어울리는 디저트는?',
            "meta": [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                }
            ],
           "link": [
               { rel: 'icon', type: 'image/png', href: './images/sweets.png' }
           ]

        },
        baseURL: '/vue_dessert_test/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets',
    }

})
