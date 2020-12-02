// ./nuxt.config.js

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Inna Schapina - Handmade Toys / Игрушки ручной работы от Инны Щапиной',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Эксклюзивные игрушки ручной работы и о том, как их делать' }
    ],
    link: [
      { rel:'apple-touch-icon', type: 'image/x-icon', sizes:'180x180', href:'img/favicon.png'
     },
      { color:'#e52037', rel:'mask-icon', href:'favicon.svg'
      },
    { rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700',
      href:'https://fonts.googleapis.com/css?family=Lato|Trocchi|Anton|Luckiest+Guy|Fira+Sans:800'
    }
    ],
    htmlAttrs: {
      lang: "en"
    },
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: { transpile:
    ['gsap', 'TweenMax', 'TimelineMax', 'ScrollTrigger', 'DrawSVGPlugin', 'MotionPathPlugin'],
  /*
  ** Run ESLint on save
  */
  },
  generate: {
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/main.js'},
  ],
  /*
  ** Global CSS
  */
 css: ["~/assets/style.scss", "~/assets/animations.css"],
/*
  ** Nuxt.js modules
  */
 modules: [
],

router: {
  middleware: 'pages'
},

}

