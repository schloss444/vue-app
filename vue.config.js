module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://schloss444.github.io/vue-app/'
    : '/',
  pwa: {
    themeColor: '#8A2BE2',
    backgroundColor: '#FF8C00',
    },
  }