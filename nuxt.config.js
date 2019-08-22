module.exports = {
  mode: 'universal',
  head: {
    title: 'Nuxt Serverless Boilerplate',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: 'Nuxt Serverless boilerplate' }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-migrate-3.0.0.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
  srcDir: 'client/',
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
   ],
   router: {
    middleware: [
      'clearValidationErrors'
    ]
   },
  plugins: [
    { src: '~plugins/axios', ssr: false },
    { src: '~plugins/validation', ssr: false },
    { src: '~plugins/post', ssr: false },
  ],
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },
  toast: {
    position: 'bottom-center',
    register: [ // Register custom toasts
      {
        name: 'error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/me', method: 'get', propertyName: 'user' }
        },
      }
    },
    redirect: {
      login: '/login',
      home: '/dashboard'
    }
  },
  axios: {
    baseURL: 'http://localhost:8000'
    // baseURL: 'https://api.yourdomain.com'
  }
}