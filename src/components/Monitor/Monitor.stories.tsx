import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Monitor from "./monitor";


export default {
    title: "Components/Monitor",
    component: Monitor,
  } as Meta;

  // Create a master template for mapping args to render the Button component
  export const Template: Story = () => <Monitor/>;

