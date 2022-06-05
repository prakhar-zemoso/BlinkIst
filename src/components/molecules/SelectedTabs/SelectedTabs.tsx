// import React from "react";
import * as React from 'react';
import { Container, Box, styled, ThemeProvider } from "@mui/material";
import Typography from "./../../atoms/Typography/Typography"
import theme from "../../themes/theme";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



const WholeSearchBox = styled("div")({
    top:'30px',
    width: "912px",
    height: "39px",
    display: "flex",
    flexDirection: "row",
    //borderBottom: "2px solid #E1ECFC",
});

// const SubContainer = styled("div")({
//     marginBottom: "16px",
//     width: '151px',
//     height: "39px",
//   });
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export const BasicTabs= () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
        <ThemeProvider theme={theme}>
        <WholeSearchBox >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1}}>
          <Tabs value={value} onChange={handleChange} 
         textColor= 'primary' indicatorColor='primary' aria-label="basic tabs example">
            <Tab label="Content Reading" {...a11yProps(0)} />
            <Tab label="Content" {...a11yProps(1)} />
            <Tab label="Connected Service"  {...a11yProps(2)}/>
          </Tabs>
        </Box>
        <TabPanel value={value}  index={0}>
          Item ek
        </TabPanel>
        <TabPanel value={value}  index={1}>
          Item do
        </TabPanel>
        <TabPanel value={value}  index={2}>
          Item teen
        </TabPanel>
      </Box>
      </WholeSearchBox>
      </ThemeProvider>
    );
  }