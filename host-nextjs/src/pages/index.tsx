import { Banner as RemoteNextBanner } from "@/components/remotes/remote_next";
import { Banner as RemoteReactBanner } from "@/components/remotes/remote_react";
import { Banner as RemoteReactCracoBanner } from "@/components/remotes/remote_react_craco";

export default function Home() {
  return (
    <div>
      Host Next
      <hr />
      <RemoteNextBanner />
      <hr />
      <RemoteReactBanner />
      <hr />
      <RemoteReactCracoBanner />
    </div>
  );
}
