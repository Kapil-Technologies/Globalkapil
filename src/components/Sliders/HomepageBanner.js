import React from 'react'
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import { BannerImage } from '../../pages/ERP/Erp';





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
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: 'green',
  marginBottom:'-4px'
}));

export const HomeBanner = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
}));


//

// ------------------------------------------- Settings

 const settings = {
   dots: false,
   infinite: true,
   arrows:false,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   
   autoplaySpeed: 4000,
   cssEase: "linear",
 };
 


function HomepageBanner() {
  return (
    <MainSliderDiv>
      <SliderData {...settings}>
        <div>
          Slider
       </div>
      </SliderData>
    </MainSliderDiv>
  );
}

export default HomepageBanner
