import React from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Automotive from "../../assets/Industries/automotive.png";
import { IndustriesData } from "../../mock/SlidersAndImages";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import IndustriesImage from '../../assets/Banners/Industries.png'
// ------------------------------------------- Styled Components

export const MainSliderDiv = styled(Stack)(({ theme }) => ({
  width: "100%",
  // display: "flex",
  // alignItems: "left",
  // justifyContent: "center",
  // flexDirection:'column',
  height: 'auto',
  textAlign:'center'
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  width: 80,
  // border: "1px solid #d3e1ea",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: 4,
  color: "white",
  background: "white",
  color: "black",
  // rotate: "270deg",
  gap: 2,
  background: "gray",
  textAlign:'center'
}));

export const Image = styled("img")(({ theme }) => ({}));

export const RightArrow = styled(FiChevronRight)(({ theme }) => ({
  color: "white",
  display: "block",
  fontSize: "40px",
}));

export const LeftArrow = styled(FiArrowLeft)(({ theme }) => ({
  display: "block",
  color: "white",
}));

// ------------------------------------------- Settings

function Industries() {
  return (
    <MainSliderDiv>
      {/* <TextContainer>
        <Stack direction='column' alignItems='center' justifyContent='center'>
          <Typography variant="h6" sx={{rotate:'270deg'}} >Soumya</Typography>
          <LeftArrow />
        </Stack>
      </TextContainer> */}

      {/* <Typography variant="h2">
        <b>Featured Industries</b>
      </Typography> */}
     <img src={IndustriesImage} alt="Kapil Technologies Industries" height='350px' style={{border:'2px solid #d3e1ea'}} />
    </MainSliderDiv>
  );
}

export default Industries;
