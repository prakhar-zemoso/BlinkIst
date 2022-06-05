import styled from "@emotion/styled";
import { ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Constants } from "../../../data/Constant";
import { ButtonComponent } from "../../atoms/Buttons/Button";
import theme from "../../themes/theme";
import { AboutBook } from "../AboutBook/AboutBook";
import { BookInfo } from "../Card/Card";
import {IconAndText} from "../../molecules/IconText/IconText"
import { useNavigate } from "react-router-dom";
import api from './../../../Axios/api'
import { ReactComponent as Time } from "../../../images/time.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import BeyondEntrepreneur from '../../../images/Book10.svg';
import { useParams } from 'react-router-dom'

const MainContainer = styled("div")({

    display: "flex",
    flexDirection:"row",
    borderBottom: '1px solid #E1ECFC',
    width: 938,
    height: 720
});

const LeftContainer = styled("div")({
    display: "flex",
    flexDirection:"column"
});

const KeyIdeasContainer = styled('div')({

    display :"flex",
    flexDirection:"column"
});

const  BookDetailsContainer = styled("div")({

    display:'flex',
    flexDirection:'column',
    gap:24,
    position:'relative',
    marginTop: 40
})

let IconTextContainer = styled("div")({
    position: "relative",
    left: -8,
    marginTop: 20,
  });

  const ButtonsContainer = styled("div")({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    gap: 25,
    top: 90,
});
const TabsContainer = styled("div")({
    position: "relative",
    top: 160,
});
  
const RightContainer = styled("div") ({
    width: 304,
    height: 304,
    position: 'relative',
    top: 75
});


export const BookDesc = ()=>{
    const [bookInfo,setBookInfo] = useState<BookInfo>({
        id:1,
        title: 'title',
        author: "author",
    image: "",
    timeToRead: "timeToRead",
    numberOfReads: "Number",
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: false
    }
    });
    let getBookInfo = async () => {
      const response = await api.get(`/library/${id}`)
      const data = response.data
      console.log(JSON.stringify(data))
      setBookInfo(data)
    }
  
    useEffect(() => {
      getBookInfo()
    }, [bookInfo.status.isFinished])
  
    let navigate = useNavigate()
  
    let updateFinish = async (num: number) => {
      bookInfo.status.isFinished = true
      console.log(JSON.stringify(bookInfo))
  
      await api.put(`/library/${num}`, bookInfo)
   // await api.put(`/library/10`, bookInfo)
  
      navigate('/mylib')
    }
    const { id } = useParams();
    console.log('id=',id);
    let handleRead = async (num: number) => {

      bookInfo.status.isFinished = false
      console.log(JSON.stringify(bookInfo))
  
     await api.put(`/library/${num}`, bookInfo)
     //await api.put(`/library/10`, bookInfo)
  
      navigate('/mylib')
    }
    return (
        <ThemeProvider theme={theme}>
          <MainContainer>
            <LeftContainer>
              <KeyIdeasContainer>
                <Typography variant="body2" sx={{ color: "#03314B" }}>
                  {Constants.bookDescription.keyIdeas}
                </Typography>
              </KeyIdeasContainer>
              <BookDetailsContainer>
                <Typography variant="h1">
                  {bookInfo.title}
                </Typography>
                <Typography sx={{ color: "#03314B", fontSize: 20 }}>
                  {Constants.bookDescription.description}
                </Typography>
                <Typography variant="body1">
                  {bookInfo.author}
                </Typography>
              </BookDetailsContainer>
              <IconTextContainer>
                <IconAndText
                  variant="caption"
                  iconSource={<Time />}
                  title={bookInfo.timeToRead}
                />
              </IconTextContainer>
              <ButtonsContainer>
                <ButtonComponent
                  variant="bookInfo.status.isFinished?'outlined':'disable'"
                  style={{
                    width: 122,
                    height: 44,
                    borderRadius: 4,
                    textTransform: "none",
                    border: "1px solid #042330",
                  }}
                  onClick={() => handleRead(Number(id))}
                 // onClick={() => handleRead(10)}
                >
                  Read now
                </ButtonComponent>
                <ButtonComponent
                  variant={bookInfo.status.isFinished?'disable':'contained'}
                  style={{
                    width: 170,
                    fontSize: 16,
                    height: 44,
                    textTransform: "none",
                    borderRadius: 4,
                  }}
                  onClick={() => updateFinish(Number(id))}
                >
                  Finished reading
                </ButtonComponent>
                <ButtonComponent
                  variant="text"
                  style={{
                    color: "#6D787E",
                    fontSize: 16,
                    textTransform: "none",
                    width: 151,
                    height: 44,
                  }}
                  endIcon={<ArrowForwardIcon/>}
                >
                  Send to Kindle
                </ButtonComponent>
              </ButtonsContainer>
              <TabsContainer>
                <AboutBook />
              </TabsContainer>
            </LeftContainer>
            <RightContainer>
              <img src={bookInfo.image} />
            </RightContainer>
          </MainContainer>
        </ThemeProvider>
      );
}