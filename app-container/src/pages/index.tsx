import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="m-4">
      App Container
      <hr />
      <ProductCard title="test" price={4000} description="description" />
    </div>
  );
}
