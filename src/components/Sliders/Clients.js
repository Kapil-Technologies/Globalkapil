import React from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { HomePageClients } from "../../mock/CCData";

// ------------------------------------------- Styled Components

export const MainSliderDiv = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
}));

export const SliderData = styled(Slider)(({ theme }) => ({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  // border: "1px solid blue",
}));

export const ClientContainer = styled(Box)(({ theme }) => ({
  width: 180,
  border: "1px solid #d3e1ea",
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 4,
  borderRadius: "15px",
  background: "white",
  color: "black",
  margin: "auto",
}));

// ------------------------------------------- Settings

const settings = {
  className: "center",
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  //  centerMode:true,
  autoplay: true,
  autoplaySpeed: 3000,
};

function Clients() {
  return (
    <MainSliderDiv>
      <SliderData {...settings}>
        {HomePageClients.map((item) => (
          <Box key={item.id}>
            <ClientContainer>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <img
                  src={item.cImage}
                  alt="Kapil Technologies Primium clients"
                  width="120px"
                  height="auto"
                />
                {/* <Typography>
                  <b>{item.cName}</b>
                </Typography> */}
              </Stack>
            </ClientContainer>
          </Box>
        ))}
      </SliderData>
    </MainSliderDiv>
  );
}

export default Clients;
