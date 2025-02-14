import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/useProductStore";
import { PlusCircle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

const Homepage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <main className="mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-cetner mb-8">
        <button className="btn btn-primary">
          <PlusCircle className="size-5 mr-2" />
          Add Product
        </button>
        <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
          <RefreshCw className="size-5" />
        </button>
      </div>
      {error && (
        <div className="flex justify-center items-center h-64">{error}</div>
      )}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(15.625rem,1fr))]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Homepage;
