import type { Meta, StoryObj } from "@storybook/react";

import Typography from ".";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "caption"],
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

export const H1: Story = {
  args: {
    tag: "h1",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    tag: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    tag: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    tag: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    tag: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    tag: "h6",
    children: "Heading 6",
  },
};

export const Paragraph: Story = {
  args: {
    children: "Paragraph",
  },
};

export const Caption: Story = {
  args: {
    tag: "caption",
    children: "Caption",
  },
};

export const Custom: Story = {
  args: {
    className: "text-red-500",
    children: (
      <>
        <em>Hello</em> <b>World</b>
      </>
    ),
  },
};
