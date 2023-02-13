const { mergeWithRules, merge } = require("webpack-merge");
const paths = require("./paths");
const common = require("./webpack.common.js");
const devServer = require("./webpack.devServer");

const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  const result = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: {
          loader: "match",
          options: "replace",
        },
      },
    },
  })(common(env), {
    mode: "development",
    devtool: "eval-source-map",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: {
            loader: require.resolve("babel-loader"),
            options: {
              compact: false,
              extends: paths.babelConfig,
              plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
            },
          },
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 4,
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              ident: "postcss",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  });

  const withPrependentRules = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "prepend",
      },
    },
  })(result, {
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: ["style-loader"],
        },
        {
          test: /\.(css)$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: "./config/.env.development",
      }),
    ].filter(Boolean),
  });
  return merge(withPrependentRules, devServer);
};
