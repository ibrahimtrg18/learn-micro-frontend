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
        name: "remote_next",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./Banner": "./src/components/Banner",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
