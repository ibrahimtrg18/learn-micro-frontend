const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const CONTAINER_URL = process.env.CONTAINER_URL || "http://localhost:3000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "product",
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
