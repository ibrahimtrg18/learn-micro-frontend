import loadable from "@loadable/component";

export const Banner = loadable(() => import("remote_next/Banner"), {
  ssr: false,
});
