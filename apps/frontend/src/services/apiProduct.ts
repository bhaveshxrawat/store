import {
  type Product,
  ProductWithRelationsSchema,
} from '@shared/schemas/product';
import axios from 'axios';
import z from 'zod';
import { baseURL } from '@/utils/consts';

export async function fetchProduct(id: string): Promise<Product | null> {
  if (!id) {
    return null;
  }

  try {
    const res = await axios.get(`${baseURL}/v1/api/products/${id}`);

    // Optional: validate structure before returning
    if (res.status === 200 && res.data.success) {
      return res.data.data as Product;
    }
    throw new Error('Failed to fetch the product');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.response?.data || error.message}`);
    }
    throw new Error(`Unknown error: ${error}`);
  }
}
export async function fetchProducts(): Promise<{
  count: number;
  data: Product[];
}> {
  try {
    const res = await axios.get(`${baseURL}/v1/api/products`);
    if (res.status === 200 && res.data.success) {
      const validated = z
        .array(ProductWithRelationsSchema)
        .parse(res.data.data);
      return { data: validated, count: res.data.count };
    }
    throw new Error('Failed to fetch products');
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 429) {
      throw new Error('error: Rate Limit exceeded');
    }
    throw new Error('error: Something went wrong');
  }
}
export async function addProduct(data: unknown) {
  try {
    const res = await axios.post(`${baseURL}/api/products`, data);
    if (res.status === 201 && res.data?.success && res.data?.data) {
      return res.data.data as Product;
    }
    throw new Error('Failed to add the product');
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 429) {
      throw new Error('error: Rate Limit exceeded');
    }
    throw new Error('error: Something went wrong');
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
      throw new Error(`Axios error: ${error.response?.data || error.message}`);
    }
    throw new Error(`Unknown error: ${error}`);
  }
}
