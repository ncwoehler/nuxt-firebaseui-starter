// from: https://medium.com/likecoin/quick-nuxt-js-ssr-prototyping-with-firebase-cloud-functions-5277553610a8
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: 'nuxt'
}
const nuxt = new Nuxt(config)

exports.nuxtApp = functions.https.onRequest((req: any, res: any) =>
  nuxt.render(req, res)
)
