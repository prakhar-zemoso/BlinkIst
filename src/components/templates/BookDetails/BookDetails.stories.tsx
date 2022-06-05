import {BookDetails, BookDetailsProps} from './BookDetails'
import {Story} from '@storybook/react'
import {HeaderComponent} from '../../Organism/Header/Header'
import {Footer} from '../../Organism/FooterBar/FooterNav'
import { BookDesc } from "../../Organism/BookDesc/BookDesc";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Templates/Book Details',
    component: BookDetails
}

let Template: Story<BookDetailsProps> = args => <MemoryRouter><BookDetails {...args} /></MemoryRouter>

export const BookDetailsTemplate = Template.bind({})
BookDetailsTemplate.args = {
    // header: <HeaderComponent />,
     body: <BookDesc />
    // footer: <Footer/>
}