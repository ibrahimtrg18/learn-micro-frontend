import dynamic from "next/dynamic";

// Import a microfrontend component from remote-react
const Button = dynamic(() => import("remoteReact/Button"), {
  ssr: false,
});

export default Button;
