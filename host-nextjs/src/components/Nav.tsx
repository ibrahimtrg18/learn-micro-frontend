import dynamic from "next/dynamic";

// Import a microfrontend component from remoteReact
const Nav = dynamic(() => import("remoteReact/Nav"), {
  ssr: false,
});

export default Nav;
