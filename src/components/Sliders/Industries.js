import React from 'react'
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Automotive from '../../assets/Industries/automotive.png'
import { IndustriesData } from '../../mock/SlidersAndImages';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
 
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
  // border: "1px solid #d3e1ea",
  height: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection:'column',
  boxShadow: 4,
  borderRadius: "15px",
  background: "white",
  color: "black",
  margin: "auto",
}));

export const RightArrow = styled(FiChevronRight)(({ theme }) => ({
  color: "black",
  display: "block",
  fontSize:'40px',
  '&:hover': {
    color:'black'
  }
}));

export const LeftArrow = styled(FiChevronLeft)(({ theme }) => ({
  display: "block",
  color: "black",
  "&:hover": {
    color: "black",
  },
}));

// ------------------------------------------- Settings

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


const settings = {
  className: "center",
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  //  centerMode:true,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};




function Industries() {
  return (
    <MainSliderDiv>
      <SliderData {...settings}>
        {IndustriesData.map((item) => (
          <Box>
            <ClientContainer>
              <img src={item.image} alt="KCS Industries" width="100px" style={{marginBottom:'20px'}} />
              <Typography variant='body1'>
                <b>{ item.title}</b>
              </Typography>
            </ClientContainer>
          </Box>
        ))}

       
      </SliderData>
    </MainSliderDiv>
  );
}

export default Industries
