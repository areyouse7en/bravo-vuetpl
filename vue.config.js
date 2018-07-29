module.exports = {
  // lintOnSave: false,
  devServer: {
    // open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8000,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: "http://xx.nicknideveloper.net",
        pathRewrite: {
          "^/api": "/xx-api"
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
}