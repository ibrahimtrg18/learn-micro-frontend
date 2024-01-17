const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const APP_REMOTE_NEXTJS =
  process.env.APP_REMOTE_NEXTJS || "http://localhost:3001";
const APP_REMOTE_REACT =
  process.env.APP_REMOTE_REACT || "http://localhost:3002";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    remoteNext: `remoteNext@${APP_REMOTE_NEXTJS}/_next/static/${location}/remoteEntry.js`,
    remoteReact: `remoteReact@${APP_REMOTE_REACT}/remoteEntry.js`,
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
        name: "host",
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
