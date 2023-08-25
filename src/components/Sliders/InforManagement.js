import React from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { HomePageClients } from "../../mock/CCData";

import INM1 from "../../assets/Slider/INM1.png";
import INM2 from "../../assets/Slider/INM2.png";
import INM3 from "../../assets/Slider/INM3.png";
import INM4 from "../../assets/Slider/INM4.png";
import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ------------------------------------------- Styled Components

export const MainSliderDiv = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SliderData = styled(Slider)(({ theme }) => ({
  width: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  // border: "1px solid blue",
}));

export const ClientContainer = styled(Box)(({ theme }) => ({
  width: 180,
  //   border: "1px solid #d3e1ea",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 4,
  borderRadius: "15px",
  //   background: "white",
  color: "black",
  margin: "auto",
}));

export const RightArrow = styled(FiChevronRight)(({ theme }) => ({
  color: "black",
  display: "block",
  fontSize: "40px",
  "&:hover": {
    color: "black",
  },
}));

export const LeftArrow = styled(FiChevronLeft)(({ theme }) => ({
  display: "block",
  color: "black",
  "&:hover": {
    color: "black",
  },
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

export const Management = [
  {
    id: 1,
    title: " INTEGRATED DEMAND & SUPPLY PLANNING",
    description:
      " An integrated demand and supply planning practice is only meaningful when inputs and outputs leads to improve decision-making. Our pragmatic approach directs on supply optimization and demand-driven plans in enhance margins,agility, forecast accuracy, lower inventory and business visibility.",
    image: INM1,
  },
  {
    id: 2,
    title: "Logicstics & Distribution",
    description:
      "The major challenges of Logistics & Distribution are an evolving global network and changing customer demands. Our experienced professionals provide quick results that optimize service through rapid cost reduction,transformation, operational excellence and network strategy design.",
    image: INM2,
  },
  {
    id: 3,
    title: "Services Delivery Management",
    description: "From omnichannel integration to delivery remedy, clients touch points are changing. We work to increase order visibility, returns, manage customer delivery and improve the customer experience.",
    image: INM3,
  },
  {
    id: 4,
    title: "Manufacturing & Operations",
    description:
      "  From job site to shop floor, we take a lean-focused approach in improving quality, productivity, and efficiency in the field. The ability to effectively and quickly respond to client’s requirements by eliminating waste is utmost to our techniques and tactics.",
    image: INM4,
  },
];

// ------------------------------------------- Settings

const settings = {
  className: "center",
  dots: false,
  infinite: true,
  slidesToShow: 1,
  
  slidesToScroll: 1,
  //  centerMode:true,
  //   autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function InforManagement() {
  return (
    <MainSliderDiv>
      <SliderData {...settings}>
        {Management.map((item) => (
          <ClientContainer>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ width: "90%", margin: "auto" }}
              spacing={2}
            >
              <img
                src={item.image}
                alt="Kapil Infor Management Consulting"
                width="350px"
                heigth="350px "
              />

              <Stack
                direction="column"
                alignItems="left"
                justifyContent="left"
                sx={{ textAlign: "left" }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#D5000E", textTransform: "uppercase" }}
                >
                  {item.title}
                </Typography>

                <Typography variant="body1" sx={{ width: "80%" }}>
                  {item.description}
                </Typography>
              </Stack>
            </Stack>
          </ClientContainer>
        ))}
      </SliderData>
    </MainSliderDiv>
  );
}

export default InforManagement;

{
  /*


*/
}
