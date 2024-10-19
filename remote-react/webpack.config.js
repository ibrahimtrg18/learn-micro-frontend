const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  cache: false,
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_react",
      filename: "remoteEntry.js",
      exposes: {
        "./Banner": "./src/components/Banner",
        "./Button": "./src/components/Button/index.js",
        "./Nav": "./src/components/Nav.js",
      },
      shared: {
        react: { eager: true, singleton: true },
        "react-dom": { eager: true, singleton: true },
        "@emotion/css": { eager: true, singleton: true },
        "@emotion/styled": { eager: true, singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
