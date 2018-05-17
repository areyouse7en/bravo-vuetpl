module.exports = {
  devServer: {
    // open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8000,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: "http://ruizhu.nicknideveloper.net",
        pathRewrite: {
          "^/api": "/ruizhu-erp-api"
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
}