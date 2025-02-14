import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

type ProductStore = {
  products: Product[];
  loading: boolean;
  error: null | string;
  fetchProducts: () => Promise<void>;
  deleteProducts: (id: string) => Promise<void>;
};
const baseURL = "http://localhost:5001";
export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${baseURL}/api/products`);
      set({ products: res.data.data });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 429) {
        set({ error: "Rate Limit exceeded" });
      } else set({ error: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
  deleteProducts: async (id: string) => {
    try {
      set({ loading: true });
      await axios.delete(`${baseURL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== Number(id)),
      }));
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },
}));
