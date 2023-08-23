import React from "react";
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { HomePageClients } from "../../mock/CCData";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import INM1 from "../../assets/Slider/ICM1.png";
import INM2 from "../../assets/Slider/ICM2.png";
import INM3 from "../../assets/Slider/ICM3.png";
import INM4 from "../../assets/Slider/ICM4.png";
import { Fragment } from "react";

// ------------------------------------------- Styled Components

export const MainSliderDiv = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SliderData = styled(Slider)(({ theme }) => ({
  width: "80%",
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

export const Management = [
  {
    id: 1,
    title: " How can Kapil Technologies Help ?",
    description1:
      "  At Kapil Technologies we have a large pool of Infor Technical and Functional consultants who have vast in working with Infor Products. ",
    description2:
      " By Taking advantages of Our Expertise having with Infor Development methodology as well as the internal workings of the many products with in the Infor Suite. ",
    image: INM1,
  },
  {
    id: 2,
    title: "Our Customization Methodology",
    description1:
      " Based on the client requirements, we develop customize processes using a systematic software methodology that ensures every project is delivered at highest possible standard.",
    description2:
      "With our expertise in Infor Customization and Development, we guarantee that each project is successfully delivered and results in client satisfaction.",
    image: INM2,
  },
  {
    id: 3,
    title: "What does Customization Invovles ?",
    description1:
      "Developing a new module or customizing existing functionality goes beyond creating code. It needs a proper planing to ensure that the designed code meets the customer's requirements.",
    description2:
      " Kapil Technologies Infor experts has in depth knowledge of techniques, tools and processes necessary for successful implementations",
    image: INM3,
  },
  {
    id: 4,
    title: "Benefits",
    list: [
      {
        id: 1,
        lst: "Reduce Overall Cost",
      },
      {
        id: 2,
        lst: "Decrease Project risk ",
      },
      {
        id: 3,
        lst: "Ensure Quality Delivery ",
      },
      {
        id: 4,
        lst: "Ensure On-time Project Delivery ",
      },
    ],
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

function InforCustomization() {
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
                spacing={1}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#D5000E", textTransform: "uppercase" }}
                >
                  {item.title}
                </Typography>

                {item.id === 4 ? (
                  item.list.map((item) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="left"
                      spacing={1}
                    >
                      <FiArrowRight style={{ color: "red" }} />
                      <Typography>{item.lst}</Typography>
                    </Stack>
                  ))
                ) : item.id === 1 || 2 || 3 ? (
                  <Fragment>
                    <Typography variant="body1">{item.description1}</Typography>
                    <Typography variant="body1">{item.description2}</Typography>
                  </Fragment>
                ) : null}
              </Stack>
            </Stack>
          </ClientContainer>
        ))}
      </SliderData>
    </MainSliderDiv>
  );
}

export default InforCustomization;
