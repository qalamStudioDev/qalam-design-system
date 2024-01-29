import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    design: {
      url: "https://www.figma.com/file/D78idXbjuoE69TJqk7wVMB/Project-Circles?type=design&node-id=589-920&mode=design&t=FkJcEGsKp5wouJdT-0",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const TextButton: Story = {
  args: {
    variant: "text",
    children: "Button",
  },
};

export const BorderedButton: Story = {
  args: {
    variant: "bordered",
    children: "Button",
  },
};

export const LargeButton: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const SmallButton: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const ButtonAsLink: Story = {
  args: {
    as: "a",
    href: "https://www.github.com/theRhasoldy",
    children: "Button",
  },
};
