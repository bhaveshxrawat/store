import type { AddProductType, Product } from "@/types/product";
import { baseURL } from "@/utils/consts";
import axios from "axios";

export async function fetchProduct(id: string): Promise<Product | null> {
  if (!id) return null;

  try {
    const res = await axios.get(`${baseURL}/v1/api/products/${id}`);

    // Optional: validate structure before returning
    if (res.status === 200 && res.data?.success && res.data?.data) {
      return res.data.data as Product;
    } else {
      throw new Error("Failed to fetch the product");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Axios error: " + error.response?.data || error.message);
    } else {
      throw new Error("Unknown error: " + error);
    }
  }
}

interface ProductRes {
  success: boolean;
  data: Product[];
  count: number;
}
export async function fetchProducts() {
  try {
    const res = await axios.get(`${baseURL}/v1/api/products`);
    if (res.status === 200 && res.data?.success && res.data?.data) {
      return res.data.data as ProductRes;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 429) {
      throw new Error("error: Rate Limit exceeded");
    } else throw new Error("error: Something went wrong");
  }
}
export async function addProduct(data: AddProductType) {
  try {
    const res = await axios.post(`${baseURL}/api/products`, data);
    if (res.status === 201 && res.data?.success && res.data?.data) {
      return res.data.data as Product;
    }
    return null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Axios error: " + error.response?.data || error.message);
    } else {
      throw new Error("Unknown error: " + error);
    }
  }
}
export async function deleteProduct(id: string) {
  try {
    const res = await axios.delete(`${baseURL}/api/products/${id}`);
    if (res.status === 200 && res.data?.success && res.data?.data) {
      return res.data.data as Product;
    }
    return null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Axios error: " + error.response?.data || error.message);
    } else {
      throw new Error("Unknown error: " + error);
    }
  }
}
export async function updateProduct(id: string, data: AddProductType) {
  try {
    const res = await axios.put(`${baseURL}/api/products/${id}`, data);
    if (res.status === 200 && res.data?.success && res.data?.data) {
      return res.data.data as Product;
    }
    return null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Axios error: " + error.response?.data || error.message);
    } else {
      throw new Error("Unknown error: " + error);
    }
  }
}
