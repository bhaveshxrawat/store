import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  ComponentPropsWithoutRef<"button"> & {
    variant?: "subtle" | "urgent";
  }
>;

const variants = {
  subtle: "bg-amulet-100 text-amulet-400",
  urgent: "bg-amulet-500 text-amulet-100",
} as const;

function Button({ children, variant = "subtle", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        "gap-2.5 flex items-center px-2 py-1.5 font-medium" +
        ` ${variant === "subtle" ? variants.subtle : ""}` +
        ` ${variant === "urgent" ? variants.urgent : ""}`
      }
    >
      {children}
    </button>
  );
}
export default Button;
