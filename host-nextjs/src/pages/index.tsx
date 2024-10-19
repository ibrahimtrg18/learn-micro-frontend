import { Banner as RemoteNextBanner } from "@/components/remotes/remote_next";
import { Banner as RemoteReactBanner } from "@/components/remotes/remote_react";

export default function Home() {
  return (
    <div>
      Host Next
      <hr />
      <RemoteNextBanner />
      <hr />
      <RemoteReactBanner />
    </div>
  );
}
