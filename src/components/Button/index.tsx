import { cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "bordered" | "text";
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  const buttonVariants = cva(["px-4 py-2"], {
    variants: {
      variant: {
        solid: "bg-blue-500 text-white",
        bordered: "border border-blue-500 text-blue-500",
        text: "text-blue-500",
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
