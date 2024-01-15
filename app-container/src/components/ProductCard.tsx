import dynamic from "next/dynamic";

// Import a microfrontend component from app-product
const ProductCard = dynamic(() => import("product/ProductCard"), {
  ssr: false,
});

export default ProductCard;
