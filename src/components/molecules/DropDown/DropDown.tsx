import React from "react";
import { ReactComponent as Search } from "./../../../images/search.svg";
import Down_arrow from "./../../../images/down_arrow.svg";
import Avatar from '@mui/material/Avatar';
import Account from './../../../images/Account.svg';
import { Icons } from "./../../atoms/Icons/Icon";
import { makeStyles } from '@mui/styles';
import { Box,Typography } from "@mui/material";
import { AccountBalanceOutlined } from "@mui/icons-material";

const useStyles = makeStyles({
  main: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: '1px 1px'
  },
  typography: {
    alignSelf: "center",
    fontFamily: "Cera Pro",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
  dropdownarrow: {
    width: 20.61,
    height: 26.48,
    alignSelf: 'center',
    marginLeft: 6.7
  }
});

export interface DropdownProps {
    title?: string,
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
  let styles = useStyles();
  let {title, style, className, onClick} = props
  return (
    <>
      <Box className={`${styles.main} ${className}`}>
        {title === 'Account' ? (
          <Icons src={Account} style={style} />
        ) : (
            <Typography variant='body1' className={styles.typography}>
                {title}
            </Typography>
        )}

        <Icons onClick={onClick} src={Down_arrow} style={style} className={styles.dropdownarrow} data-test-id="exploretest" />
      </Box>
    </>
  );
};

