// declare module for components expose from remoteNext
declare module "remoteNext/ProductCard" {
  type ProductCardProps = {
    title: string;
    description: string;
    price: number;
  };

  const ProductCard: React.ComponentType<ProductCardProps>;

  export default ProductCard;
}
