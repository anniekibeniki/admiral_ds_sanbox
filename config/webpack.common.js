const paths = require("./paths");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const appName = require("../package.json").name;
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = (env) => {
  const publicPath = paths.publicUrl;
  const publicURL = publicPath.substring(0, publicPath.length - 1);

  return {
    entry: ["/index.tsx"].map((pathTail) => paths.src + pathTail),
    output: {
      path: paths.build,
      publicPath: "auto",
      filename: "js/[name].[contenthash].js",
    },
    resolve: {
      alias: {
        src: paths.src,
        app: path.resolve(paths.src, "app/"),
        constants: path.resolve(paths.src, "constants/"),
        components: path.resolve(paths.src, "components/"),
        pages: path.resolve(paths.src, "pages/"),
        utils: path.resolve(paths.src, "utils/"),
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.(ts|js)x?$/,
          include: [paths.src],
          use: {
            loader: "babel-loader",
            options: {
              extends: paths.babelConfig,
            },
          },
        },
        {
          test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: "file-loader",
              options: {
                name: "static/media/[name].[hash].[ext]",
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    },
    optimization: {
      usedExports: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        "process.env.PUBLIC_URL": JSON.stringify(publicURL),
        "process.env.APP_CONFIG_NAME": JSON.stringify(appName),
      }),
      new HtmlWebpackPlugin({
        template: paths.public + "/index.html",
        favicon: paths.public + "/favicon.ico",
        publicPath: publicPath,
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].chunk.css",
      }),
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
      }),
    ],
  };
};
