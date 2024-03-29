import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    ref: {
      // table: {
      //   disable: true,
      // },
      description: "ref for component",
      control: false,
    },
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "black",
  size: "px16",
  children: "Text component",
  as: "div",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "px18",
//   children: "Large text",
// };

// export const Red = Template.bind({});
// Red.args = {
//   color: "red",
//   children: "Red text",
// };
