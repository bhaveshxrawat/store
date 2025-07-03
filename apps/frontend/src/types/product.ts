export type Product = {
  name: string;
  price: number;
  imageUrl: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AddProductType = Pick<Product, "name" | "price" | "imageUrl">;
