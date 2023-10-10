import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { IndustriesData } from "../../mock/SlidersAndImages";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import IndustriesImage from "../../assets/Banners/Industries2.jpg";
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
  width: 80,
  // border: "1px solid #d3e1ea",
  height: 300,
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
  cursor: "pointer",
}));

export const ImageContainer1 = styled(Box)(({ theme, select }) => ({
  width: select ? 0 : 500,
  // border: "1px solid #d3e1ea",
  opacity: select ? 0 : 1,
  height: 300,
  boxShadow: 4,
  // color: "white",
  background: "wheat",
  // color: "black",
  // rotate: "270deg",
  gap: 2,
  textAlign: "center",
}));

export const ImageContainer2 = styled(Box)(({ theme, select }) => ({
  width: 500,
  // border: "1px solid #d3e1ea",
  opacity: select ? 0 : 1,
  height: 300,
  boxShadow: 4,
  // color: "white",
  background: "wheat",
  // color: "black",
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

export const LeftArrow = styled(FiArrowUp)(({ theme }) => ({
  display: "block",
  color: "white",
  position: "absolute",
  left: 0,
  padding: "10px",
  fontSize: "20px",
  fontWeight: "bold    ",
}));

// ------------------------------------------- Settings

function Industries() {
  const [show, setShow] = useState(false);
  const [Indusid, setIndusId] = useState(0);

  const handleShow = (id) => {
    setShow(true);
    setIndusId(id);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <MainSliderDiv>
      {/* <Stack direction="row" alignItems="center">
        {IndustriesData.map((item) => (
          <Fragment key={item.id}>
            {show && item.id === Indusid ? (
              <ImageContainer1
                // select={show && item.id === Indusid}
                className="Industries"
              >
                <Stack
                  direction="column"
                  alignItems="left"
                  justifyContent="left"
                  spacing={2}
                  sx={{ p: 4, textAlign: "left" }}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="h6">Soumya</Typography>
                </Stack>
              </ImageContainer1>
            ) : null}
            <TextContainer onClick={() => handleShow(item.id)}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: "relative",
                  width: 300,
                  rotate: "270deg",
                  // border: "1px solid blue",
                  height: 80,
                  textAlign: "center",
                }}
                spacing={2}
              >
                <LeftArrow />
                <Typography variant="body1">{ item.title}</Typography>
              </Stack>
            </TextContainer>
          </Fragment>
        ))}
      </Stack> */}

      <img
        src={IndustriesImage}
        alt="Kapil Technologies Industries"
        height="auto"
        style={{ border: "2px solid #d3e1ea", maxWidth: "100%" }}
      />
    </MainSliderDiv>
  );
}

export default Industries;
