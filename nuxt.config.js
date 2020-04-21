let FRONT_URL = ''

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/fast-init/'
        }
      }
    : {}

switch (process.env.NODE_ENV) {
  case 'production':
    FRONT_URL = 'https://mauriciohernancabrera.github.io/fast-init'
    break
  default:
    FRONT_URL = 'http://127.0.0.1:3000'
    break
}

const page = {
  title: 'Fast Init',
  short_name: 'Fast Init',
  description:
    'Start all the programs that your projects need with a simple copy paste',
  safeImg: {
    url: `${FRONT_URL}/images/safe_image.jpg`,
    alt: 'Image of Fast Init'
  },
  favicon: `${FRONT_URL}/images/logo.ico`,
  author: `Mauricio Hernan Cabrera`
}

export default {
  ...routerBase,

  mode: 'universal',
  /*
   ** Headers of the page
   */

  env: {
    FRONT_URL
  },

  head: {
    title: page.title,

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { hid: 'author', name: 'author', content: `${page.author}` },
      {
        hid: 'description',
        name: 'description',
        content: `${page.description}`
      },
      { hid: 'twitter-card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter-title', name: 'twitter:title', content: `${page.title}` },
      {
        hid: 'twitter-description',
        name: 'twitter:description',
        content: `${page.description}`
      },

      {
        hid: 'twitter-image',
        name: 'twitter:image',
        content: `${page.safeImg.url}`
      },
      {
        hid: 'twitter-image-alt',
        name: 'twitter:image:alt',
        content: `${page.safeImg.alt}`
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: `${page.title}` },
      { hid: 'og-image', property: 'og:image', content: `${page.safeImg.url}` },
      {
        hid: 'og-site_name',
        property: 'og:site_name',
        content: `${page.title}`
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: `${page.description}`
      }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: page.favicon },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
      }
    ],

    script: [
      {
        src: 'https://kit.fontawesome.com/4d6ff0ae91.js',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuelidate',
    { src: '@/plugins/keep-state', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */

  workbox: {},

  manifest: {
    name: page.title,
    short_name: page.short_name,
    lang: 'en-US',
    start_url: '/fast-init/',
    scope: '/fast-init/',
    display: 'standalone',
    background_color: '#009ee0',
    theme_color: '#006e9c'
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
