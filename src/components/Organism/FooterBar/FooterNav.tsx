import React from "react";
import { makeStyles, styled } from "@mui/styles";
import BlinkistLogo from "../../../images/logo.svg";
import { Typography } from "@mui/material";
import { FooterNav } from "../../molecules/FooterBar/Footer";
import { FooterNavData as data } from "../../../data/FooterNavData";
import { Constants } from "../../../data/Constant";
import { Icons } from "../../atoms/Icons/Icon";

const MainContainer = styled("div")({
  width: "100%",
  height: 360,
  backgroundColor: "#F1F6F4",
  position:'relative',
   bottom:'0px'
  //background:'red',
  // overflow :'hidden'

});

const WrapContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    position: 'relative',
    left: 220,
    // right: 200
});

const LeftContainer = styled("div")({
  position: "relative",
  top: 28,
  left: 244,
  width: 378,
  height: "128px !important",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const RightContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 310,
  // right: 164,
  display: "flex",
});

const useStyles = makeStyles({
  blinkistLogo: {
    width: 99.1,
    height: 24,
  },
  subtitle1: {
    fontFamily: "Cera Pro",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 32,
  },
});

const BottomContainer = styled("div")({
  position: "relative",
  left: -780,
  top: 310,
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "Cera Pro",
  color: "#6D787E",
});

export const Footer = () => {
  const styles = useStyles();

  return (
    <MainContainer>
      <WrapContainer>
        <LeftContainer>
          <Icons src={BlinkistLogo} className={styles.blinkistLogo} />
          <Typography
            variant="subtitle2"
            sx={{
              color: "#0365F2",
              fontFamily: "Cera Pro",
              fontWeight: 500,
              fontSize: 24,
            }}
          >
            Big ideas in small packages<br></br>
            Start learning now
          </Typography>
        </LeftContainer>
        <RightContainer>
          <FooterNav title={data.Editorial.title} data={data.Editorial.data} />
          <FooterNav
            title={data.UsefulLinks.title}
            data={data.UsefulLinks.data}
          />
          <FooterNav title={data.Company.title} data={data.Company.data} />
        </RightContainer>
        <BottomContainer>{Constants.footer.footerCopyright}</BottomContainer>
      </WrapContainer>
    </MainContainer>
  );
};