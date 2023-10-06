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
import { SAPAMSData } from "../../mock/ERP";
import { FaArrowRight } from "react-icons/fa";

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

function SAPAMS() {
  return (
    <MainSliderDiv>
      <SliderData {...settings}>
        {SAPAMSData.map((item) => (
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
                alt="sap,sap erp ,sap software,sap hana, Kapil Technologies, kcs Technologies, Ptkcs Technologies,sap business one,abap,sap system,sap mm,sap fico,sap abap,sap marketplace,sap analytics cloud,sap s 4hana,Kapil-Infor-Alliance partner,sap bw,s4 hana,sap sd,sap consultant,sap ecc,sap netweaver,sap crm,sap logon,sap program,sap modules,sap basis,sap support launchpad,sap hcm,sap s4 hana,sap oss,sap gui,
s 4hana,sap r3,sap b1,sap products,sap pp,sap india post,Kapil SAP Services,sap pm,sap company,sap labs,sap bi,sap hr,sap bpc,sap rise,sap cloud,sap one support launchpad,sap bo,sap apo,sap sac,sap 4 hana,erp solutions,erp afni,sap business objects,sap consulting sevices,sap pi,ariba sap,sapui5"
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
                  sx={{ color: "#1A69C3", textTransform: "uppercase" }}
                >
                  {item.title}
                </Typography>

                {item.list.map((item) => (
                  <Stack
                    direction="row"
                    alignItems="start"
                    justifyContent="start"
                    spacing={1}
                    key={item.id}
                  >
                    <FaArrowRight
                      style={{ color: "#1A69C3", marginTop: "6px" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        // textAlign: "justify",
                        // textJustify: "inner-word",
                        width: "100%",
                        pt: "2px",
                      }}
                    >
                      {item.li}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </ClientContainer>
        ))}
      </SliderData>
    </MainSliderDiv>
  );
}

export default SAPAMS;

{
  /*


*/
}
