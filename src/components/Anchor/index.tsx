import { cva } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export type AnchorProps<C extends ElementType = "a"> = {
  /**
   * The children to render
   * @type ReactNode
   * @example
   * <Anchor>Hello</Anchor>
   */
  children: ReactNode;

  /**
   * The URL to link to
   * @type string
   * @example
   * <Anchor href="https://www.github.com/theRhasoldy">Hello</Anchor>
   */
  href: string;

  /**
   * The target to open the link in
   * @type "_self" | "_blank" | "_parent" | "_top"
   * @optional
   * @default "_blank"
   */
  target?: "_self" | "_blank" | "_parent" | "_top";

  /**
   * Optional className to apply
   * @optional
   * @type string
   * @example
   * <Anchor className="text-red-500">Hello</Anchor>
   */
  className?: string;

  /**
   * The component to render
   * @optional
   * @default "a"
   * @example
   * <Anchor
      {...args}
      href="/"
      as={({ children, ...props }) => (
        <a {...props} className="bg-primary-500">
          {children}
        </a>
      )}
    >
      Hello
    </Anchor>
   */
  as?: C | ((props: HTMLAttributes<HTMLElement>) => ReactElement);

  /**
   * The variant to use
   * @type "text" | "underlined" | "alwaysUnderlined"
   * @optional
   * @default "underlined"
   */
  variant?: "text" | "underlined" | "alwaysUnderlined";
} & ComponentPropsWithoutRef<C>;

/**
 * A React component for rendering links with customizable styles.
 * @param props - The props for the Anchor component.
 * @returns The rendered Anchor component.
 */
const Anchor = <C extends ElementType = "a">({
  as,
  href,
  target,
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
    <Component
      {...props}
      href={href}
      target={target}
      className={anchorVariants({ variant })}
    >
      {children}
    </Component>
  );
};

export default Anchor;
