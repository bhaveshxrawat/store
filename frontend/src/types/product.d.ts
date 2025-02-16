type Product = {
  created_at: string;
  id: number;
  image: string;
  name: string;
  price: string;
};
type NewProductType = Record<"name" | "price" | "image", string>;
