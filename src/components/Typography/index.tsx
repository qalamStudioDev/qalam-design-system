import { cva } from "class-variance-authority";
import { FC, ReactNode, createElement } from "react";

type TypographyProps = {
  /**
   * The tag to use
   * @type "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption"
   * @default "p"
   * @example
   * <Typography tag="h1">Typography</Typography>
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption";

  /**
   * Optional className to apply
   * @optional
   * @type string
   * @example
   * <Typography className="text-red-500">Typography</Typography>
   */
  className?: string;

  /**
   * The children to render
   * @type ReactNode
   * @example
   * <Typography>Hello</Typography>
   */
  children: ReactNode;
};

/**
 * A React component for rendering typographic elements with customizable styles.
 * @param props - The props for the Typography component.
 * @returns The rendered Typography component.
 */
const Typography: FC<TypographyProps> = ({
  tag = "p",
  className,
  children,
}) => {
  const typographyVariants = cva([className], {
    variants: {
      tag: {
        h1: "text-5xl tracking-tight",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
        h5: "text-xl",
        h6: "text-lg",
        p: "text-base",
        caption: "text-sm",
      },
    },
    defaultVariants: {
      tag: "p",
    },
  });

  return createElement(
    tag,
    {
      className: typographyVariants({ tag }),
    },
    children,
  );
};

export default Typography;
