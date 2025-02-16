import { create } from "zustand";
import axios from "axios";

type ProductStore = {
  products: Product[];
  loading: boolean;
  error: null | string;
  fetchProducts: () => Promise<void>;
  fetchProduct: (id: number) => Promise<void>;
  addProduct: (data: NewProductType) => Promise<boolean>;
  deleteProduct: (id: number) => Promise<void>;
  updateProduct: (id: number, data: NewProductType) => Promise<void>;
};
const baseURL = "http://localhost:5001";
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProduct: async (id) => {
    try {
      set({ loading: true });
      const fetchedProduct = await axios.get(`${baseURL}/api/products/${id}`);
      return fetchedProduct.data.data;
    } catch (e) {
      return null;
    } finally {
      set({ loading: false });
    }
  },
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${baseURL}/api/products`);
      set({ products: res.data.data });
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 429) {
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
    } catch (e) {
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
    } catch (e) {
    } finally {
      set({ loading: false });
    }
  },
  updateProduct: async (id, data) => {
    try {
      set({ loading: true });
      const updatedProduct = await axios.put(
        `${baseURL}/api/products/${id}`,
        data
      );
      return updatedProduct.data.data;
    } catch (error) {
      return null;
    } finally {
      set({ loading: false });
    }
  },
}));
