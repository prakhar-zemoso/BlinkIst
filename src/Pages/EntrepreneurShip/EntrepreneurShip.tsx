import { useState } from 'react'
import  Banner  from '../../components/molecules/Banner/Banner'
//import {SearchBarComponent} from '../../components/molecules/SearchBar/SearchBar'
import Categories from '../../components/Organism/BookCategories/BookCategories'
import Sizes from '../../components/Organism/SearchBarFunction/SeachBarFunction'
import {Entrepreneurship} from '../../components/templates/EntrepreneurPage/EntrepreneurShip'
import Library from '../../data/Lib'

const EntrepreneurshipPage = () => {



const[ftitle, setTitle] = useState('')



    return (
        <>
        <Entrepreneurship
        banner={<Banner />}
        
         sizes={<Sizes setTitle = {setTitle}/>}
        trendingBlinks={
            // "trending"
            <Categories data={Library} ftitle = {ftitle}
                        status="trending" />
        }
        justAddedBlinks={
            <Categories data={Library}
            status="justAdded" ftitle = {ftitle}/>
            // 'justAdded'
        }
        featuredBlinks={
            <Categories data={Library} ftitle = {ftitle}
            status="featured" />
            
        } />
        </>
    )
}

export default EntrepreneurshipPage