// import { useProducts } from "./hooks/useProducts";

import { chaoticProducts as products } from "@shared/constants/chaoticProducts";
import { useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";

function ProductList() {
	const rootEl = useRef<HTMLDivElement>(null);
	// const childEl = useRef<HTMLDivElement>(null);
	const topSentinel = useRef<HTMLDivElement>(null);
	const bottomSentinel = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const options = {
			root: rootEl.current,
			rootMargin: "0px",
			scrollMargin: "0px",
			threshold: [0, 0.1],
		};
		const observer = new IntersectionObserver(() => {
			const isTopVisible =
				topSentinel.current?.getBoundingClientRect().top >=
				rootEl.current.getBoundingClientRect().top;
			const isBottomVisible =
				bottomSentinel.current?.getBoundingClientRect().bottom <=
				rootEl.current.getBoundingClientRect().bottom;

			rootEl.current.classList.remove("mask-t-from-90%", "mask-b-from-90%");

			if (!isTopVisible) rootEl.current.classList.add("mask-t-from-90%");
			if (!isBottomVisible) rootEl.current.classList.add("mask-b-from-90%");
		}, options);
		for (const observant of [topSentinel.current, bottomSentinel.current]) {
			observer.observe(observant);
		}
		return () => observer.disconnect();
	}, []);
	// const { isLoadingProducts, products, productsErr } = useProducts();

	if (!products || products.length === 0) {
		return <p>Nothing to see here...</p>;
	}
	// if (isLoadingProducts) {
	//   return <p>Loading...</p>;
	// }
	return (
		<div className="scrollbar-none mt-6 flex-1 overflow-y-auto will-change-auto" ref={rootEl}>
			<div aria-hidden={"true"} ref={topSentinel} />
			<div className="mx-auto grid max-w-app grid-cols-[repeat(auto-fit,_minmax(18.75rem,1fr))] gap-2.5">
				{products.map((product) => (
					<ProductCard key={product.name} product={product} />
				))}
			</div>
			<div aria-hidden={"true"} ref={bottomSentinel} />
		</div>
	);
}
export default ProductList;
