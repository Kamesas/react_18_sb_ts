import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextWithRef } from "./TextWithRef";

export default {
  title: "TextWithRef",
  component: TextWithRef,
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
} as ComponentMeta<typeof TextWithRef>;

const Template: ComponentStory<typeof TextWithRef> = (args) => (
  <TextWithRef {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: "black",
  size: "px16",
  children: "TextWithRef component",
  as: "div",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "px18",
//   children: "Large TextWithRef",
// };

// export const Red = Template.bind({});
// Red.args = {
//   color: "red",
//   children: "Red TextWithRef",
// };
