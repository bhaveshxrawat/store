import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = PropsWithChildren<
	ComponentPropsWithoutRef<"button"> & {
		variant?: "subtle" | "urgent";
	}
>;

const variants = {
	subtle: "bg-amulet-50 text-amulet-400",
	urgent: "bg-amulet-600 text-amulet-100",
} as const;

function Button({
	children,
	variant = "subtle",
	className,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={twMerge(
				"inline-flex items-center gap-1 px-2 py-1.5 font-medium",
				variant === "subtle" && variants.subtle,
				variant === "urgent" && variants.urgent,
				className,
			)}
		>
			{children}
		</button>
	);
}
export default Button;
