const paths = require('./paths');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const appName = require('../package.json').name;
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = env => {
  const publicPath = paths.publicUrl;
  const publicURL = publicPath.substring(0, publicPath.length - 1);

  return {
    entry: ['/index.tsx'].map(
      pathTail => paths.src + pathTail,
    ),
    output: {
      path: paths.build,
      publicPath: 'auto',
      filename: 'js/[name].[contenthash].js',
      environment: {
        arrowFunction: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false,
        const: false,
        bigIntLiteral: false,
      },
    },
    resolve: {
      alias: {
        src: paths.src,
        app: path.resolve(paths.src, 'app/'),
        constants: path.resolve(paths.src, 'constants/'),
        admiralComponents: path.resolve(paths.src, 'admiralComponents/'),
        components: path.resolve(paths.src, 'components/'),
        pages: path.resolve(paths.src, 'pages/'),
        utils: path.resolve(paths.src, 'utils/'),
        store: path.resolve(paths.src, 'store/'),
        types: path.resolve(paths.src, 'types/'),
        '~/assets/fonts/fontawesome': path.resolve(
          paths.nodeModules,
          '@fortawesome',
          'fontawesome-free',
          'webfonts',
        ),
        'emotion-theming': '@emotion/react',
        '~/assets': path.resolve(paths.nodeModules, '@vtb', 'assets', 'assets'),
        '../assets': path.resolve(
          paths.nodeModules,
          '@vtb',
          'assets',
          'assets',
        ),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.(ts|js)x?$/,
          include: [
            paths.src,
          ],
          use: {
            loader: 'babel-loader',
            options: {
              extends: paths.babelConfig,
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: [
            /node_modules(\\|\/)@openvtb(\\|\/)admiral-icons(\\|\/)/,
          ],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          include: [
            /node_modules(\\|\/)@openvtb(\\|\/)admiral-icons(\\|\/)/,
          ],
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      usedExports: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(publicURL),
        'process.env.APP_CONFIG_NAME': JSON.stringify(appName),
      }),
      new HtmlWebpackPlugin({
        template: paths.public + '/index.html',
        favicon: paths.public + '/favicon.ico',
        publicPath: publicPath,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      }),
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
      }),
    ],
  };
};
