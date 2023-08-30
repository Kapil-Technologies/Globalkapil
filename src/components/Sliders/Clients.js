import React from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { HomePageClients } from "../../mock/CCData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


// ------------------------------------------- Styled Components

export const MainSliderDiv = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 
}));

export const SliderData = styled(Slider)(({ theme }) => ({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  height: 150,
  marginBottom:'-10px'
  // border: "1px solid blue",
}));

export const ClientContainer = styled(Box)(({ theme }) => ({
  width: 180,
  border: "1px solid #d3e1ea",
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 4,
  borderRadius: "15px",
  background: "white",
  color: "black",
  margin: "auto",
}));


export const RightArrow = styled(FiChevronRight)(({ theme }) => ({
  color: "white",
  display: "block",
  fontSize: "40px",
  "&:hover": {
    color: "white",
  },
}));

export const LeftArrow = styled(FiChevronLeft)(({ theme }) => ({
  display: "block",
  color: "white",
  '&:hover': {
    color:'white'
  }
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightArrow
      className={className}
      // style={{ ...style, display: "block", color:'black',fontSize:'20px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftArrow
      className={className}
      // style={{ ...style, display: "block",color:'black',fontSize:'80px'}}
      onClick={onClick}
    />
  );
}

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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
                  alt="Kapil Technologies Premium clients"
                  width={item.width}
                  height={item.height}
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
