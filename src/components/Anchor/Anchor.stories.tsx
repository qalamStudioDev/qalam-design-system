import type { Meta, StoryObj } from "@storybook/react";

import Anchor from ".";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Atoms/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Anchor>;

export default meta;

export const Default: Story = {
  parameters: {
    url: "https://www.figma.com/file/D78idXbjuoE69TJqk7wVMB/Project-Circles?type=design&node-id=590-32&mode=design&t=rbiIHDGyNz6ZKrQw-0",
  },
  args: {
    children: "This is a link",
    href: "https://www.github.com/theRhasoldy",
    target: "_blank",
  },
};

export const CustomRenderComponent: Story = {
  args: {
    as: "a",
    className: "text-blue-500",
    children: "This is a link with a custom component",
    href: "https://www.github.com/theRhasoldy",
    target: "_blank",
  },
};
