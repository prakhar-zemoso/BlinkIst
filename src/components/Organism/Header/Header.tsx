import { Typography } from "@mui/material";
import { styled, makeStyles, ThemeProvider } from "@mui/styles";
import React, { useState } from "react";
import BlinkistLogo from "../../../images/logo.svg";
import SearchIcon from "../../../images/search.svg";
import { Dropdown } from "../../molecules/DropDown/DropDown";
import { ExtendedNav } from "../ExtendedNavBar/ExtendedNavBar";
import theme from '../../themes/theme'
import {useNavigate} from 'react-router-dom'
import { Constants } from "../../../data/Constant";
import { Icons } from "../../atoms/Icons/Icon";

import { AvatarIcon } from "../../atoms/Avatar/Avatar";
import { useAuth0 } from "@auth0/auth0-react";


const MainContainer = styled("div")({
  width: "100%",
  height: 86,
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  gap: 40,
  position: 'relative',
  left: 250,
  fontFamily: 'Cera Pro !important'
});

const useStyles = makeStyles({
  blinkistLogo: {
    width: 124.09,
    height: 26,
    alignSelf: "center",
    position: "absolute",
    left: 250,
    top: 30,
  },
  container: {
    marginLeft: 0,
  },
  explore: {
    alignSelf: "center",
    position: "absolute",
    left: 479,
    top: 33,
  },
  myLibrary: {
    alignSelf: "center",
    color: "#03314B",
    left: 594,
    position: "absolute",
    top: 33,
    cursor:'pointer',
    fontSize: 16,
    fontFamily: 'Cera Pro !important'
  },
  account: {
    marginLeft: "auto",
    width: 40,
    height: 40,
    position: "absolute",
    alignSelf: "center",
    left: 1128,
    top: 23,
  },
  search: {
    width: 20.31,
    height: 20.31,
    alignSelf: "center",
    position: "absolute",
    left: 417,
    top: 33,
  },
});

export const HeaderComponent = () => {
  let [explore, setExplore] = useState(false);
  let [exploreStyle, setExploreStyle] = useState({
    transform: "rotate(0deg)",
  });

  const expandExploreDropdown = () => {
    explore ? setExplore(false) : setExplore(true);
    if (explore) {
      setExploreStyle({ transform: "rotate(0deg)" });
    } else {
      setExploreStyle({ transform: "rotate(180deg)" });
    }
  }


  
  
  const styles = useStyles();

  const navigate = useNavigate()

  const homePage = () => {
     navigate("/myLib")
  }
  const { logout } = useAuth0();

 

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Icons src={BlinkistLogo} className={styles.blinkistLogo} />
          <Icons src={SearchIcon} className={styles.search} />
          <Dropdown
            title={"Explore"}
            className={styles.explore}
            onClick={expandExploreDropdown}
            style={exploreStyle}
          />
          <Typography variant="body1" className={styles.myLibrary} onClick={homePage}>
            My Library
          </Typography>
          
          <Dropdown title={"Account"}  onClick={() => logout({ returnTo: window.location.origin })} className={styles.account}></Dropdown>
        </MainContainer>
        {explore ? <ExtendedNav /> : null}
        
      </ThemeProvider>
    </>
  );
}
