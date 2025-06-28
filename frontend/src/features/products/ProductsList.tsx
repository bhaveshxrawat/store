import ProductCard from "@/components/ProductCard"
import { useProducts } from "./hooks/useProducts"

function ProductsList() {
  const {isLoadingProducts, products, productsErr} = useProducts()
  if(!products || products.data.length === 0) return <p>Nothing to see here...</p>
  if(isLoadingProducts) return <p>Loading...</p>
  return (
    <ul>
      {
        products.data.map((product) => <li>
          <article>
            <img src={product.imageUrl} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </article>
        </li>)
      }
    </ul>
  )
}
export default ProductsList