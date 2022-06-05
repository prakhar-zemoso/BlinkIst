import { Story } from "@storybook/react";
import { MyLibrary, MyLibraryProps } from "./MyLib";
import {HeaderComponent} from '../../Organism/Header/Header'
import {Footer} from '../../Organism/FooterBar/FooterNav'
import { Tabs } from "../../Organism/Tabs/Tabs";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Templates/My Library',
    component: MyLibrary
}

let Template: Story<MyLibraryProps> = args => <MemoryRouter><MyLibrary {...args} /></MemoryRouter>

export const MyLibraryTest = Template.bind({})
MyLibraryTest.args = {
  
    body: <Tabs />,

}