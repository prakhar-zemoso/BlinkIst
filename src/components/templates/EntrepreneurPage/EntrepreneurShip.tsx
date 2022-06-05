import { styled } from "@mui/styles";
import { Footer } from "../../Organism/FooterBar/FooterNav";
import { HeaderComponent } from "../../Organism/Header/Header";
import Sizes from "../../Organism/SearchBarFunction/SeachBarFunction";

export interface EntrepreneurshipProps {
    sizes: React.ReactNode;
    trendingBlinks: React.ReactNode;
    justAddedBlinks: React.ReactNode;
    featuredBlinks:React.ReactNode;
    banner: React.ReactNode;
}

const BodyContainer = styled("div")({
    width: 912,
    position: 'relative',
    left: 480
})

const BlinksContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    top: 184,
    left: 25
})

const SearchContainer = styled("div") ({
    position: 'relative',
    top: 104,
    left: 25
})

const TrendingBlinks = styled("div") ({
    position: 'relative',
    top: 184,
    left: 25
})

const JustAddedBlinks = styled("div") ({
    position: 'relative',
    top: 280,
    left: 25
})

const FeaturedBlinks = styled("div") ({
    position: 'relative',
    top: 376,
    left: 25
})

const FooterWrap = styled("div") ({
    position: 'relative',
    minHeight: '100vh',
    top: 500
})

export const Entrepreneurship = (props: EntrepreneurshipProps) => {
    let {sizes, trendingBlinks, justAddedBlinks, banner, featuredBlinks} = props
    return (
        <>
            <HeaderComponent/>
            <BodyContainer>
                {banner}
                 <SearchContainer>
                {sizes}
                </SearchContainer> 
                
                <TrendingBlinks>
                {trendingBlinks}
                </TrendingBlinks>
                <JustAddedBlinks>
                {justAddedBlinks}
                </JustAddedBlinks>
                <FeaturedBlinks>
                {featuredBlinks}
                </FeaturedBlinks>
            </BodyContainer>
            <FooterWrap>
            <Footer/>
            </FooterWrap>
            
        </>
    )
}