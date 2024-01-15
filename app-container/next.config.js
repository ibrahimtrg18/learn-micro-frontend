const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const PRODUCT_URL = process.env.PRODUCT_URL || "http://localhost:3001";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    product: `product@${PRODUCT_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

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
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
