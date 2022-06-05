import { Story } from "@storybook/react";
import IconButtonComponent from "./index";

import { ReactComponent as Search } from "./../../../images/search.svg";
import { ReactComponent as Down_arrow } from "./../../../images/down_arrow.svg";

export default {
  title: "Atoms/Icon Button",
  component: IconButtonComponent,
}

const Template: Story<any> = args => (
  <IconButtonComponent {...args} />
);

export const SearchIconStory = Template.bind({});
SearchIconStory.args = {
  children: <Search />,
};

export const DropdownIconStory = Template.bind({});
DropdownIconStory.args = {
  children: <Down_arrow />,
};