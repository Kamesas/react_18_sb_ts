import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import "../../assets/styles/index.scss";

export default {
  title: "Button test",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};
