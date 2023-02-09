const { mergeWithRules, merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const devServer = require('./webpack.devServer');


module.exports = env => {
  const useSourceMap = env && !env.noSourceMap;
  const withDevServer = env && env.withDevServer;

  const prodRules = mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'prepend',
      },
    },
  })(common(env), {
    mode: 'production',
    devtool: useSourceMap && 'source-map',
    plugins: [
      new Dotenv({
        path: './config/.env.production',
      }),
      new CompressionPlugin({
        filename: '[path][base].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '../' },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              ident: 'postcss',
            },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '../' },
            },
          ],
        },
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  });

  return withDevServer ? merge(prodRules, devServer) : prodRules;
};
