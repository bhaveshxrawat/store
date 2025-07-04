import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/apiProduct";

export function useProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { products: data, isLoadingProducts: isLoading, productsErr: error };
}
