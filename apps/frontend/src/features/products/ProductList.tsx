import { useProducts } from "./hooks/useProducts";

function ProductList() {
  const { isLoadingProducts, products, productsErr } = useProducts();
  if (!products || products.data.length === 0) {
    return <p>Nothing to see here...</p>;
  }
  if (isLoadingProducts) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {products.data.map((product) => (
        <li key={product.id}>
          <article>
            <img alt="" src={product.imageUrl} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
