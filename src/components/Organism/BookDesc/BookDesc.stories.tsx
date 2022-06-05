import { Story } from "@storybook/react";
import { BookDesc } from "./BookDesc";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: "Organisms/Book Description",
    component: BookDesc
}

let Template: Story<typeof BookDesc> = ()=> <MemoryRouter><BookDesc/></MemoryRouter>

export const BookDescription = Template.bind({})
BookDescription.args = {}