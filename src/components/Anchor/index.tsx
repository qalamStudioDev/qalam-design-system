import { AnchorHTMLAttributes, FC, ReactNode } from "react";

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  render?: ({ ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => ReactNode;
}

const Anchor: FC<AnchorProps> = ({ render, children, ...props }) => {
  return render ? render({ children, ...props }) : <a {...props}>{children}</a>;
};

export default Anchor;
