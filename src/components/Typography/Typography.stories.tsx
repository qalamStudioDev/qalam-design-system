import type { Meta, StoryObj } from "@storybook/react";

import Typography from ".";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "large",
          "p",
          "small",
          "caption",
        ],
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

export const H1: Story = {
  parameters: {
    url: "https://www.figma.com/file/D78idXbjuoE69TJqk7wVMB/Project-Circles?type=design&node-id=590-32&mode=design&t=rbiIHDGyNz6ZKrQw-0",
  },
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    variant: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    variant: "h6",
    children: "Heading 6",
  },
};

export const LargeParagraph: Story = {
  args: {
    variant: "large",
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
};

export const Paragraph: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
};

export const SmallParagraph: Story = {
  args: {
    variant: "small",
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
};

export const Custom: Story = {
  args: {
    className: "!text-red-500 !text-4xl",
    children: (
      <>
        <em>Hello</em> <b>World</b>
      </>
    ),
  },
};
