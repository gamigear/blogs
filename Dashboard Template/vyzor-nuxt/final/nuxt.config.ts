// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: '~/components/', pathPrefix: false},
  ],

  telemetry: false,

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  // sourcemap: false,
  app: {
    baseURL: '/nuxt/vyzor/preview', // your path /nuxt/vyzor/preview
    meta: [
      { name: 'keywords', content: 'admin dashboard bootstrap, admin dashboard template,admin dashboard ui,admin panel bootstrap template,bootstrap admin template,bootstrap dashboard template,bootstrap template admin panel,dashboard bootstrap template,dashboard design template,nuxt admin dashboard,nuxt admin panel,nuxt admin template,nuxt bootstrap,nuxt dashboard,nuxt ui framework' }
    ],
    head: {
      title: 'VYZOR - Nuxt4 Premium Admin & Dashboard Template',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: "/nuxt/vyzor/preview/favicon.ico" },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
          crossorigin: '',
        },
      ]
    },
  },
  ssr: false,


  build: {
    transpile: ["vuetify"]
  },



  devtools: { enabled: true },

  plugins: [
    { src: "~/plugins/plugins.ts", mode: "client" },
  ],


  css: [
    // 'vuetify/styles/main.sass',
    '@/assets/css/bootstrap.css',
    '@/assets/css/icons.css',
    '@/assets/css/styles.css',
  ],

  vite: {
   
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/nuxt/vyzor/preview/'),
    },
  },

  compatibilityDate: '2025-07-15',

})

