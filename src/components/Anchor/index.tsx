import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type AnchorProps<C extends ElementType> = {
  children: ReactNode;
  className?: string;
  as?: C;
  variant?: "underlined" | "alwaysUnderlined" | "button";
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
        button:
          "rounded-default bg-primary-default px-8 py-4 text-white hover:bg-primary-light",
        alwaysUnderlined: "hover:underline",
        underlined: "underline",
        text: "",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  });

  return (
    <Component role="link" {...props} className={anchorVariants({ variant })}>
      {children}
    </Component>
  );
};

export default Anchor;
