import React from "react";
import { Container, ThemeProvider,Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReadingLady from './../../../images/ReadingLady.svg' ;
import theme from "../../themes/theme";
import BannerData from "./../../../data/BannerData";

export interface BannerProps {

    className?: string;
    style?: React.CSSProperties;
    children?:React.ReactNode;
}

const MainBoxContainer = styled('div')({
    width: "890px",
    height:"264",
    background: "#F1F6F4",
    display:'flex',
    gap: "112px",
    margin: "0 auto",

})

const LeftBannerContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "15px",
    top: "45px",
    bottom: "45px",
    left: "45px",
  });

const LeftTopContainer = styled("div")({
    width: "319px",
    height: "90px",
  });

const LeftBottomContainer = styled("div")({
        width: "461px",
        height: "69px",   
});

const RightConatiner = styled('div')({});

const Banner = (props:BannerProps)=>{

    return(
        <ThemeProvider theme={theme}>
            <Container className={props.className}>
                <MainBoxContainer>
                    <LeftBannerContainer>
                        <LeftTopContainer>
                            <Typography variant="h1">{BannerData.heading}</Typography>
                        </LeftTopContainer>
                        <LeftBottomContainer>
                            <Typography variant="subtitle2">{BannerData.description}</Typography>
                        </LeftBottomContainer>
                    </LeftBannerContainer>
                    <RightConatiner>
                            <img src={ReadingLady} alt="readingLady"/>
                        </RightConatiner>
                </MainBoxContainer>
            </Container>
        </ThemeProvider>
    )

};

export default Banner;


