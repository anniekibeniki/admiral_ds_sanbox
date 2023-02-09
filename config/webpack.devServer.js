const paths = require('./paths');

module.exports = {
  devServer: {
    server: 'https',
    historyApiFallback: {
      index: paths.publicUrl + 'index.html',
    },
    devMiddleware: {
      publicPath: paths.publicUrl,
    },
    static: {
      directory: paths.assets,
      publicPath: '/assets',
    },
    open: {
      app: {
        name: 'Chrome',
        arguments: ['--disable-web-security', '--disable-gpu'],
      },
    },
    compress: true,
    hot: true,
    port: 4200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
    },
  },
};
