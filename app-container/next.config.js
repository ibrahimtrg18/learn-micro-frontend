const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const APP_PRODUCT_URL = process.env.APP_PRODUCT_URL || "http://localhost:3001";
const APP_REMOTE_REACT_WEBPACK =
  process.env.APP_REMOTE_REACT_WEBPACK || "http://localhost:3002";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    product: `product@${APP_PRODUCT_URL}/_next/static/${location}/remoteEntry.js`,
    remoteReactWebpack: `remoteReactWebpack@${APP_REMOTE_REACT_WEBPACK}/remoteEntry.js`,
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
