import AddProductModal from "@/components/AddProductModal";
import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/useProductStore";
import { PackageIcon, PlusCircle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

const Homepage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <main className="mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <button
            className="btn btn-primary"
            onClick={() =>
              (
                document.getElementById(
                  "add_product_modal"
                ) as HTMLDialogElement
              )?.showModal()
            }
          >
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
        {products.length === 0 && !loading && (
          <div className="flex flex-col justify-center items-center h-96 space-y-4">
            <div className="bg-base-100 rounded-full p-6">
              <PackageIcon className="size-12" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold ">No products found</h3>
              <p className="text-gray-500 max-w-sm">
                Get started by adding your first product to the inventory
              </p>
            </div>
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(17.625rem,1fr))] has-[article:nth-child(2)]:grid-cols-[repeat(auto-fit,minmax(15.625rem,1fr))]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <AddProductModal />
    </>
  );
};

export default Homepage;
