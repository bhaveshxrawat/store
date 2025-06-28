import { fetchProducts } from "@/services/apiProduct";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { products: data, isLoadingProducts: isLoading, productsErr: error };
}
