import { Box } from "@mui/material";
import { makeStyles, ThemeProvider } from "@mui/styles";
import React from "react";
import theme from "../../themes/theme";
import  Search  from "./../../../images/search.svg";



const useStyles = makeStyles({
    inputBar:{
        fontSize: "16px",
    border: "none",
    width: 180,
    height: 24,
    fontFamily: 'Cera Pro',
    marginLeft: "32px",
    "&:focus": {
      outline: "none",
    },
},
boxElement: {
    width: 598,
    height: 28,
    backgroundColor: "",
    borderBottom: "1.5px solid #BAC9CF",
    display: "flex",
    flexDirection: "row",
  },
  imageDiv: {
    marginLeft: "2.96px",
    marginTop: "2.96px",
  },
  imageProps: {
    width: "18.39px",
    height: "18.39px",
  },

});

export const SearchBarComponent = () => {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <Box className={classes.boxElement}>
          <div className={classes.imageDiv}>
            <img src={Search} className={classes.imageProps} />
          </div>
          <input
            type="text"
            placeholder="Search by title or author"
            className={classes.inputBar}
          />
        </Box>
      </ThemeProvider>
    );
  };