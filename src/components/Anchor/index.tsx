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
  const anchorVariants = cva(["text-text", className], {
    variants: {
      variant: {
        button:
          "bg-primary-default px-4 py-2 text-white duration-default hover:bg-primary-light",
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
