import dynamic from "next/dynamic";

// Import a microfrontend component from remote-react-webpack
const Button = dynamic(() => import("remoteReactWebpack/Button"), {
  ssr: false,
});

export default Button;
