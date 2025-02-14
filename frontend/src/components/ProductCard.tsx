import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover h-full aspect-video"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="">
            <h2 className="card-title text-lg font-semibold">{product.name}</h2>
            <p className="text-2xl font-bold text-primary">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>
          <div className="card-actions">
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              <SquareArrowOutUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
