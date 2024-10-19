import loadable from "@loadable/component";

export const Banner = loadable(() => import("remote_react_craco/Banner"), {
  ssr: false,
});
