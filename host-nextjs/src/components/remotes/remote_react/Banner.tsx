import loadable from "@loadable/component";

export const Banner = loadable(() => import("remote_react/Banner"), {
  ssr: false,
});
