import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type AnchorProps<C extends ElementType> = {
  children: ReactNode;
  className?: string;
  as?: C;
} & ComponentPropsWithoutRef<C>;

const Anchor = <C extends ElementType>({
  as,
  children,
  ...props
}: AnchorProps<C>) => {
  const Component = as || "a";
  return <Component {...props}>{children}</Component>;
};

export default Anchor;
