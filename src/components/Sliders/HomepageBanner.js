import React from 'react'
import Slider from "react-slick";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import OB from '../../assets/Banners/1.png'
import OB1 from "../../assets/Banners/2.png";
import OB2 from "../../assets/Banners/3.png";
import OB3 from "../../assets/Banners/4.png";
import { BannerImage } from '../../pages/ERP/Erp';


const Images = [
  {
    id: 1,
    image: OB,
  },
  {
    id: 2,
    image: OB1,
  },
  {
    id: 3,
    image: OB2,
  },
  {
    id: 4,
    image: OB3,
  },
];


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
          <BannerImage src={OB} alt="Kapil Technologies" />
          
        </div>
        <div>
          <BannerImage src={OB1} alt="Kapil Technologies" />
          
        </div>
        <div>
          <BannerImage src={OB2} alt="Kapil Technologies" />
          
        </div>
        <div>
          <BannerImage src={OB3} alt="Kapil Technologies" />
        </div>
      </SliderData>
    </MainSliderDiv>
  );
}

export default HomepageBanner
