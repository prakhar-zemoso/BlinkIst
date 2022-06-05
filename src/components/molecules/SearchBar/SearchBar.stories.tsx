import { Story } from "@storybook/react";
import React from "react";
import { SearchBarComponent } from "./SearchBar";


export default {
    title: 'Molecules/Search_Bar',
    component : SearchBarComponent
};

const Template : Story<typeof SearchBarComponent> =()=><SearchBarComponent/>

export const SearchBar = Template.bind({});