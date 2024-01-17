// declare module for components expose from app-product
declare module "product/ProductCard" {
  type ProductCardProps = {
    title: string;
    description: string;
    price: number;
  };

  const ProductCard: React.ComponentType<ProductCardProps>;

  export default ProductCard;
}
