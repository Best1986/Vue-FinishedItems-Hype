// vue.config.js file to be place in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Vue-FinishedItems-Hype/'
      : '/',
    pwa: {
      workboxOptions: {
        exclude: [/_redirects/]
      }
    }
  }