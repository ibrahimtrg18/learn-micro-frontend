import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="m-4">
      App Product
      <hr />
      <ProductCard title="Test" price={4000} description="description" />
    </div>
  );
}
