module.exports = {
  configureWebpack: {
    devtool: 'sourcemap'
  },
  devServer: {
    proxy: {
      '/foo': {
        target: 'http://localhost:1880/hooks/',
         ws: false,
        // changeOrigin: true,
        pathRewrite: {
          // '^/api/employees/**' : '/api/employees/',     // rewrite path
          '^/api/employees/' : '/'           // remove base path
      },
    },
      '/foo': {
        target: 'http://localhost:1880/hooks/'
      }
    }
    }

    }



//   proxyTable: {
//     // proxy all requests starting with /api to jsonplaceholder
//     "/api": {
//       target: "http://jsonplaceholder.typicode.com",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": ""
//       }
//     }
//   }
