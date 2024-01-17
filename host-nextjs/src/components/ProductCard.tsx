import dynamic from "next/dynamic";

// Import a microfrontend component from remoteNext
const ProductCard = dynamic(() => import("remoteNext/ProductCard"), {
  ssr: false,
});

export default ProductCard;
