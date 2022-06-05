import { Story } from "@storybook/react";
import Banner  from "../../molecules/Banner/Banner";
import Categories from "../../Organism/BookCategories/BookCategories";
import {HeaderComponent} from '../../Organism/Header/Header'
import {Footer} from '../../Organism/FooterBar/FooterNav'
import { Entrepreneurship, EntrepreneurshipProps } from "./EntrepreneurShip";
import Library from "../../../data/Lib"
import { SearchBarComponent as SearchBar  } from "../../molecules/SearchBar/SearchBar";
import {MemoryRouter} from 'react-router-dom'
import Sizes from "../../Organism/SearchBarFunction/SeachBarFunction";

export default {
    title: 'Templates/Entrepreneurship',
    component: Entrepreneurship
}

let Template: Story<EntrepreneurshipProps> = args =><MemoryRouter> <Entrepreneurship {...args} /> </MemoryRouter>

export const EntrepreneurshipPage = Template.bind({})
EntrepreneurshipPage.args = {
    
    banner: <Banner />,
    sizes: <Sizes setTitle/>,
    trendingBlinks: <Categories data={Library} ftitle='' status="trending" />,
    featuredBlinks: <Categories data={Library} ftitle='' status="featured" />,
    justAddedBlinks: <Categories data={Library} ftitle='' status="justAdded" />,
    
}