import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import theme from "../../themes/theme";
import { Box,CardMedia,Grid,Typography,CardContent,IconButton, SvgIconProps} from '@mui/material';
import { ThemeProvider } from "@emotion/react";
import {UserIcon} from "./../../atoms/Icons/Iconimage";
import AddIcon from '@mui/icons-material/Add';
import { ButtonComponent } from "../../atoms/Buttons/Button";



export interface BookCardprops {id?: number; image?: string;
    title:string; author: string; 
    time:string;reads?: string;
    status?: boolean;
    progress?: number;
  }

  function BookCard({
    image,
    reads,
    title,
    author,
    time,
    status,
    progress,
  }: BookCardprops) {
    return (
        <ThemeProvider theme={theme}>
        <Grid item xs={4}>
      <Card
        data-testid="bookcard"
        sx={{
          width: '284px',
          height: '445px',
          borderRadius: 2,
          border: '1 solid #E1ECFC',
          background: '#FFFFFF',
        }}
      >
       <CardMedia
              component="img"
              image= {image}
              alt="book pic"
              height="294px"
              width="294.1px">
          </CardMedia>
        <CardContent>
        <Typography
            variant="subtitle1" textAlign="left">
            {title}
          </Typography>
          <Typography
            variant="body1" textAlign="left">
            {author}
          </Typography>
        </CardContent>
        
        <Box
        sx={{ 
            paddingTop:1,
            width: '282px',
            height: 15,
            display: 'flex', alignItems: 'center' 
             }}>
            <Box sx={{
             width: '120px',
             height: 10,
             display: 'flex', alignItems: 'center' }} >
            <AccessTimeIcon sx={{width: 18.67, height: 18.67}} />
            <Typography variant="caption" padding={0.54}>
                {time}-minute read
              </Typography>
              </Box>
            <Box sx={{ 
             width: '120px',
            height: 10,
            padding:3,
            display: 'flex', alignItems: 'center'}}>
            <UserIcon style={{width:"24px", height:"17.5px", color: 'text3'}} />
            <Typography variant="caption" padding={0.54}>
                {reads}-reads
              </Typography>
              </Box>
        </Box>
        
        {/* <div  position= 'relative'> */}
        <ButtonComponent variant= 'text'
        
        
        startIcon= {<AddIcon/>}
        style={{
            position: "relative",
            top: '20px',
            width :'100%',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '10px',
            lineHeight: '20px',
            textTransform: 'none',
            color: '#0365F2'}
    }
    children='Add to library'/>

    </Card>
    </Grid>
    </ThemeProvider>
)}

export default BookCard;



