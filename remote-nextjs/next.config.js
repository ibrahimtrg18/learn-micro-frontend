const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remoteNext",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./ProductCard": "./src/components/ProductCard/index.ts",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
