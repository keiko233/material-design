import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container } from ".";

type Story = StoryObj<typeof Container>;

export default {
  title: "Components/Container",
  component: Container,
} as Meta<typeof Container>;

export const Default: Story = {
  decorators: [
    (Story) => {
      document.body.className = "";

      return <Story />;
    },
  ],
};
