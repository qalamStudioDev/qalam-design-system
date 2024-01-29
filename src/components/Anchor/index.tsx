import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type AnchorProps<C extends ElementType> = {
  children: ReactNode;
  className?: string;
  as?: C;
  variant?: "text" | "underlined" | "alwaysUnderlined";
} & ComponentPropsWithoutRef<C>;

const Anchor = <C extends ElementType>({
  as,
  className,
  children,
  variant,
  ...props
}: AnchorProps<C>) => {
  const Component = as || "a";
  const anchorVariants = cva(["text-text duration-default", className], {
    variants: {
      variant: {
        alwaysUnderlined: "hover:underline",
        underlined: "underline",
        text: "",
      },
    },
    defaultVariants: {
      variant: "underlined",
    },
  });

  return (
    <Component role="link" {...props} className={anchorVariants({ variant })}>
      {children}
    </Component>
  );
};

export default Anchor;
