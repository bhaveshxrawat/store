import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

type ProductStore = {
  products: Product[];
  loading: boolean;
  error: null | string;
  fetchProducts: () => Promise<void>;
  addProduct: (data: NewProductType) => Promise<boolean>;
  deleteProduct: (id: number) => Promise<void>;
};
const baseURL = "http://localhost:5001";
export const useProductStore = create<ProductStore>((set) => ({
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
  addProduct: async (data) => {
    try {
      set({ loading: true });
      await axios.post(`${baseURL}/api/products`, data);
      return true;
    } catch (error) {
      return false;
    } finally {
      set({ loading: false });
    }
  },
  deleteProduct: async (id) => {
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
