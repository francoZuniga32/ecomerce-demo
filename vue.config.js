module.exports = {
  assetsDir: 'assets',
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ecomerce-demo/'
    : '/'
}