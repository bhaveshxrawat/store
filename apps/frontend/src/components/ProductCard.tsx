import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./ui/Button";
import { HeartIcon, TrashIcon } from "./ui/Icons";

const fallbackProductImgSrc =
	"https://ik.imagekit.io/rjoblq78ls/FallbackProductImage.jpg";

type ProductCardProps = ComponentPropsWithoutRef<"article"> & {
	product: {
		name: string;
		description: string;
		price: number;
	};
};

function ProductCard({ product, className }: ProductCardProps) {
	return (
		<article
			className={twMerge(
				"flex flex-col border border-amulet-300 bg-amulet-300 p-3",
				className,
			)}
		>
			<img alt="" className="h-38.5 object-cover" src={fallbackProductImgSrc} />
			<h2 className="mt-2.5 line-clamp-2 font-medium text-amulet-800 text-xl">
				{product.name}
			</h2>
			<p className="mt-1 line-clamp-2 flex-1 text-amulet-700 text-xs">
				{product.description}
			</p>
			<div className="mt-5 flex items-center justify-between">
				<div className="inline-block space-x-2">
					<Button variant="urgent" aria-label="Like Button">
						<HeartIcon />
						<span>
							20 <span className="sr-only">Likes</span>
						</span>
					</Button>
					<Button aria-label="Delete Button">
						<TrashIcon />
					</Button>
				</div>
				<strong className="inline-block bg-amulet-50 px-2.5 py-1 text-amulet-700">
					₹{product.price}
				</strong>
			</div>
		</article>
	);
}
export default ProductCard;
