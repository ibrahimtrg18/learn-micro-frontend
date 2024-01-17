import dynamic from "next/dynamic";

// Import a microfrontend component from app-product
const Nav = dynamic(() => import("remoteReactWebpack/Nav"), {
  ssr: false,
});

export default Nav;
