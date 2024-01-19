import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    design: {
      url: "https://www.figma.com/file/D78idXbjuoE69TJqk7wVMB/Project-Circles?type=design&node-id=589-920&mode=design&t=FkJcEGsKp5wouJdT-0",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
  },
};
