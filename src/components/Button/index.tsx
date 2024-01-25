import { cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "bordered" | "text";
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const buttonVariants = cva(["px-4 py-2", className], {
    variants: {
      variant: {
        solid: "bg-primary text-white",
        bordered: "border border-primary text-primary",
        text: "text-primary",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  });

  return (
    <button className={buttonVariants({ variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
