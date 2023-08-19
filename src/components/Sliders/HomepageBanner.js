import React from 'react'
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import OB from '../../assets/Banners/1.jpg'
import OB1 from "../../assets/Banners/2.jpg";


// ------------------------------------------- Styled Components

export const MainSliderDiv = styled("div")(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center'
  
  
  
}));

export const SliderData = styled(Slider)(({ theme }) => ({
  width: "100%",
  // border: "1px solid blue",
  height: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// ------------------------------------------- Settings

 const settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
    autoplay: true,
  autoplaySpeed: 3000,
};
 


function HomepageBanner() {
  return (
    <MainSliderDiv>
      <SliderData {...settings}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={OB} alt="Kapil " width="100%" height="400px" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={OB1} alt="Kapil " width="100%" height="400px" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Soumya
        </div>
      </SliderData>
    </MainSliderDiv>
  );
}

export default HomepageBanner
