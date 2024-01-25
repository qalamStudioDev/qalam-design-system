import { cva } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode, createElement } from "react";

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  /**
   * The variant to use
   * @type "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "large" | "p" | "small" | "caption"
   * @default "p"
   * @example
   * <Typography variant="h1">Typography</Typography>
   */
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "large"
    | "p"
    | "small"
    | "caption";

  /**
   * Optional className to apply, use "!" to override font size or color
   * @optional
   * @type string
   * @example
   * <Typography className="!text-red-500">Hello</Typography> // Add "!" to override color
   */
  className?: string;

  /**
   * The children to render
   * @type ReactNode
   * @example
   * <Typography>Hello</Typography>
   */
  children: ReactNode;
}

/**
 * A React component for rendering typographic elements with customizable styles.
 * @param props - The props for the Typography component.
 * @returns The rendered Typography component.
 */
const Typography: FC<TypographyProps> = ({
  variant = "p",
  className,
  children,
}) => {
  const typographyVariants = cva(["text-text", className], {
    variants: {
      variant: {
        h1: "text-4xl font-bold md:text-5xl ",
        h2: "text-4xl",
        h3: "text-2xl md:text-3xl",
        h4: "text-xl md:text-2xl",
        h5: "text-lg md:text-xl",
        h6: "text-lg",
        large: "text-lg",
        p: "text-base",
        small: "text-sm",
        caption: "text-sm",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  });

  return createElement(
    variant === "large" || variant === "small" ? "p" : variant,
    {
      className: typographyVariants({ variant }),
    },
    children,
  );
};

export default Typography;
