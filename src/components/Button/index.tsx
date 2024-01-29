import { cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "bordered" | "text";
  size?: "small" | "default" | "large";
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
  const buttonVariants = cva(
    ["rounded-default text-primary-500 duration-default", className],
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
          default: "px-8 py-2",
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
    <button className={buttonVariants({ variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
