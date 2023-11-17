import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Hello from "./Hello";

// Storybook definition
const meta: Meta<typeof Hello> = {
  component: Hello,
  title: "Flavour/Hello",
  argTypes: {},
};
export default meta;

// Define stories
type Story = StoryObj<typeof Hello>;

export const Default: Story = (args) => (
  <Hello data-testId="HelloComp-id" {...args} />
);
Default.args = {
  message: "This is a hello world component",
};
