import { useProductStore } from "@/store/useProductStore";
import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  const { deleteProduct } = useProductStore();
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
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p className="text-2xl font-bold text-primary">
          ${Number(product.price).toFixed(2)}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <EditIcon size={20} />
          </Link>
          <button
            className="btn btn-sm btn-error btn-outline"
            onClick={() => deleteProduct(product.id)}
          >
            <Trash2Icon size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
