module.exports = {
    devServer: {
      proxy: {
        '^/api': {  // Matches any request starting with /api
          target: 'http://localhost:3000', // Your backend URL
          changeOrigin: true,
          pathRewrite: {
            '^/api': '' // Removes '/api' prefix when forwarding
          }
        }
      }
    }
  }