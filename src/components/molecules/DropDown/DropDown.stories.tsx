import { Story } from "@storybook/react";
import Down_arrow from "./../../../images/down_arrow.svg";
import { Dropdown } from "./DropDown";

export default {
    title: 'Molecules/Drop Down',
    component: Dropdown
}

const Template: Story<any> = args => <Dropdown {...args} />

export const ExploreDropdown = Template.bind({})
ExploreDropdown.args = {
    title: 'Explore'
}

export const AccountDropdown = Template.bind({})
AccountDropdown.args = {
    title: 'Account'
}