import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

export type ButtonProps<C extends ElementType> = {
  variant?: "solid" | "bordered" | "text";
  size?: "small" | "default" | "large";
  as?: C;
} & ComponentPropsWithoutRef<C>;

/**
 * Primary UI component for user interaction
 */
const Button = <C extends ElementType>({
  variant,
  size,
  children,
  className,
  as,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "button";
  const buttonVariants = cva(
    ["block rounded-default text-primary-500 duration-default", className],
    {
      variants: {
        variant: {
          solid: "bg-primary-500 text-white hover:bg-primary-400",
          bordered:
            "border-2 border-primary-300 bg-primary-100 hover:bg-primary-200",
          text: "hover:bg-primary-100",
        },
        size: {
          small: "px-4 py-2",
          default: "px-8 py-3",
          large: "px-12 py-4",
        },
      },
      defaultVariants: {
        variant: "solid",
        size: "default",
      },
    },
  );

  return (
    <Component className={buttonVariants({ variant, size })} {...props}>
      {children}
    </Component>
  );
};

export default Button;
