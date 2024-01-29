import type { Meta, StoryObj } from "@storybook/react";

import Anchor from ".";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Atoms/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["underlined", "alwaysUnderlined", "text"],
      },
    },
  },
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

export const AlwaysUnderlined: Story = {
  args: {
    children: "This is a link with a custom component",
    href: "https://www.github.com/theRhasoldy",
    target: "_blank",
    variant: "alwaysUnderlined",
  },
};

export const Underlined: Story = {
  args: {
    children: "This is a link with a custom component",
    href: "https://www.github.com/theRhasoldy",
    target: "_blank",
    variant: "underlined",
  },
};

export const CustomComponent: Story = {
  args: {
    as: () => (
      <a
        className="rounded-full bg-primary-500 px-4 py-2 text-white"
        href="https://www.github.com/theRhasoldy/test"
      >
        Hello
      </a>
    ),
    children: "This is a link with a custom component",
  },
};
