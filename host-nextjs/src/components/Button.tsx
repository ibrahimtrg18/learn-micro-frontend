import dynamic from "next/dynamic";

// Import a microfrontend component from remoteReact
const Button = dynamic(() => import("remoteReact/Button"), {
  ssr: false,
});

export default Button;
