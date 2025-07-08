// import { useProducts } from "./hooks/useProducts";
import {chaoticProducts as products} from "@shared/constants/chaoticProducts"

const fallbackProductImgSrc = "https://ik.imagekit.io/rjoblq78ls/FallbackProductImage.jpg"

function ProductList() {
  // const { isLoadingProducts, products, productsErr } = useProducts();

  if (!products || products.length === 0) {
    return <p>Nothing to see here...</p>;
  }
  // if (isLoadingProducts) {
  //   return <p>Loading...</p>;
  // }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          <article>
            <img alt="" src={fallbackProductImgSrc} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
