const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  devServer: {
    port: 3003,
  },
  webpack: {
    configure: {
      entry: "./src/index",
      output: {
        publicPath: "auto",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "remote_react_craco",
        filename: "remoteEntry.js",
        exposes: {
          "./Banner": "./src/components/Banner",
        },
        shared: {
          ...deps,
          react: { eager: true, singleton: true },
          "react-dom": { eager: true, singleton: true },
        },
      }),
    ],
  },
  typescript: {
    enableTypeChecking: true,
  },
};
