import React from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { IndustriesData } from "../../mock/SlidersAndImages";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import IndustriesImage from "../../assets/Banners/Industries.png";
// ------------------------------------------- Styled Components

export const MainSliderDiv = styled(Stack)(({ theme }) => ({
  width: "100%",
  // display: "flex",
  // alignItems: "left",
  // justifyContent: "center",
  // flexDirection:'column',
  height: "auto",
  textAlign: "center",
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  width: 60,
  // border: "1px solid #d3e1ea",
  height: 250,
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
  textAlign: "center",
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: 500,
  // border: "1px solid #d3e1ea",
  height: 250,
  boxShadow: 4,
  color: "white",
  background: "blue",
  color: "black",
  // rotate: "270deg",
  gap: 2,
  textAlign: "center",
}));


export const Image = styled("img")(({ theme }) => ({}));

export const RightArrow = styled(FiArrowLeft)(({ theme }) => ({
  color: "white",
  display: "block",
  fontSize: "40px",
}));

export const LeftArrow = styled(FiArrowRight)(({ theme }) => ({
  display: "block",
  color: "white",
}));

// ------------------------------------------- Settings

function Industries() {
  return (
    <MainSliderDiv>
      {/* <Stack direction="row" alignItems="center" justifyContent="start">
        <TextContainer>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ rotate: "270deg" }}
            spacing={2}
          >
            <LeftArrow />
            <Typography variant="h6">Soumya</Typography>
          </Stack>
        </TextContainer>
        <ImageContainer>
          <Stack
            direction="row"
            alignItems="left"
            justifyContent="start"
           
            spacing={2}
          >
            <LeftArrow />
            <Typography variant="h6">Soumya</Typography>
          </Stack>
        </ImageContainer>
      </Stack> */}

      <img
        src={IndustriesImage}
        alt="Kapil Technologies Industries"
        height="350px"
        style={{ border: "2px solid #d3e1ea" }}
      />
    </MainSliderDiv>
  );
}

export default Industries;
