import ProductCard from "@/components/ProductCard";
import Nav from "@/components/Nav";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      Host Next
      <button>Helloooooo!</button>
      <hr />
      Remote Nextjs
      <ProductCard title="test" price={4000} description="description" />
      <hr />
      Remote React
      <Nav />
      <Button />
    </div>
  );
}
