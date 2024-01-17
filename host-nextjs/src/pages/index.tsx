import ProductCard from "@/components/ProductCard";
import Nav from "@/components/Nav";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="m-4">
      App Container
      <hr />
      App Product
      <ProductCard title="test" price={4000} description="description" />
      <hr />
      Remote React Webpack
      <Nav />
      <Button />
    </div>
  );
}
