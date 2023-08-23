import React, { Fragment } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import HomepageBanner from "../components/Sliders/HomepageBanner";
import { Box, Button, Stack, Tab, Typography, Tabs, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Clients from "../components/Sliders/Clients";
import HomeAboutBanner from "../assets/Banners/ctaBanner.png";
import ClientBI from "../assets/Banners/ClientsHome.jpeg";
import Industries from "../components/Sliders/Industries";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Page from "../components/Page";
import { FiArrowRight, FiChevronRight, FiSend } from "react-icons/fi";
import HAboutBanner from "../assets/Banners/cta.jpeg";
import { ZigZagData } from "../mock/NavbarData";
import Home1 from "../assets/Banners/home2.png";
import { AboutText } from "../mock/MockData";
// ---------------------------------------------------------------

export const HomeContainer = styled("div")(({ theme }) => ({}));
export const MainBanner = styled("div")(({ theme }) => ({
  width: "100%",
  height: 500,
  background: "#B0DAE3",
}));

export const NavDiv = styled("div")(({ theme }) => ({
  height: "15vh",
}));

export const AboutSection = styled(Stack)(({ theme, image }) => ({
  height: "400px",
  padding: "10px",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  marginTop: "-3px",
}));

export const WhySection = styled(Stack)(({ theme }) => ({
  backgroundColor: "#d3e1ea",
  height: 300,
  padding: "10px",
}));

export const WhatSection = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  padding: "10px",
}));

export const CTASection = styled(Stack)(({ theme, image }) => ({
  height: "300px",
  padding: "10px",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const IndustrySection = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  padding: "10px",
}));

export const MVDesign1 = styled(Stack)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: 250,
  height: 250,
  // borderRadius: "50%",

  // border: "1px solid black",
  color: "black",
  borderBottomLeftRadius: "800%",
  background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
}));
export const MVDesign2 = styled(Stack)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: 250,
  height: 250,
  // borderRadius: '50%',
  // border: "1px solid black",
  color: "black",
  borderTopRightRadius: "800%",
  background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
}));

export const ClientSectionsLayer = styled(Stack)(({ theme, image }) => ({
  background: "black",
  height: "auto",
  padding: "10px",
}));

// ---------------------------------------------------------------

export const CTA = ({ text, buttonText }) => {
  return (
    <CTASection
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        textAlign: "center",
        background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
      }}
      image={HomeAboutBanner}
    >
      <Typography variant="h5" sx={{ opacity: 1, color: "white", width: 500 }}>
        {text}
      </Typography>
      <Button
        variant="contained"
        sx={{ background: "orange", color: "#162438" }}
        startIcon={<FiSend />}
        component={Link}
        to="/contact/contact-us"
      >
        <b>{buttonText}</b>
      </Button>
    </CTASection>
  );
};
// ---------------------------------------------------------------

function Home() {
  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate("/contact");
  };
  return (
    <HomeContainer>
      <Page name="Home" content="" />
      <NavDiv>.</NavDiv>
      <MainBanner
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              // border: "1px solid white",
              p: 1,
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              gap: 2,
            }}
            xs={5}
          >
            <Typography variant="h2" sx={{ color: "#162438" }}>
              <b>Preferred Technology Partner with the Perfect Fit</b>
            </Typography>
            <Typography variant="h5" sx={{ color: "#162438" }}>
              Compact Enough to Show Compassion, Expansive Enough to Drive
              Change
            </Typography>
            <Button
              variant="outlined"
              startIcon={<FiArrowRight />}
              sx={{
                background: "#162438",

                color: "white",
                width: 150,
                borderRadius: "25px",
                "&:hover": {
                  background: "transperant",
                  color: "#162438",
                },
              }}
              component={Link}
              to="/contact-us"
            >
              Explore Now
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              // border: "1px solid white",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={5}
          >
            <img
              src={Home1}
              alt="Kapil Technologies"
              height="350px"
              width="600px"
            />
          </Grid>
        </Grid>
      </MainBanner>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 1, textAlign: "center" }}
        spacing={1}
      >
        <Typography variant="h3" sx={{ color: "#0E366A" }}>
          <b>
            Enabling High <span style={{ color: "#0055CE" }}>Performance</span>
          </b>
        </Typography>
        <Typography variant="h6" sx={{ width: "90%" }}>
          We combine technology with innovation, creativity, and strategy to
          solve complex business problems and help you go beyond regular
          transactions and create memorable experiences.
        </Typography>
      </Stack>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {ZigZagData.map((item) => {
          if (item.type === "image") {
            return (
              <Grid
                item
                xs={4}
                sm={5}
                md={6}
                lg={6}
                xl={6}
                sx={{ height: 380 }}
              >
                <img
                  src={item.url}
                  alt="Kapil Technologies"
                  height="380px"
                  width="100%"
                />
              </Grid>
            );
          } else {
            return (
              <Grid
                item
                xs={4}
                sm={5}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  // border: "1px solid blue",
                  height: 380,
                  background: item.bgcolor,
                }}
              >
                <Stack
                  direction="column"
                  alignItems={item.textalign}
                  justifyContent="center"
                  sx={{ textAlign: item.textalign, height: "inherit", px: 4 }}
                >
                  <Typography variant="h3" sx={{ color: item.txt1color }}>
                    <b>{item.content.txt1}</b>
                  </Typography>
                  <Typography variant="h4" sx={{ color: item.txt1color }}>
                    <b>{item.content.txt2}</b>
                  </Typography>
                  <Typography variant="h5" sx={{ color: item.txt1color }}>
                    <b>{item.content.txt3}</b>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: item.paracolor, lineHeight: "25px" }}
                  >
                    {item.content.para}
                  </Typography>
                </Stack>
              </Grid>
            );
          }
        })}
      </Grid>
      {/* <Industries /> */}

      <ClientSectionsLayer
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          <b>Our High Value Customers</b>
        </Typography>
        <Clients />
      </ClientSectionsLayer>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: "100%",
          // background: " linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);",
          height: "Auto",
        }}
      >
        <Grid container sx={{ width: "100%" }}>
          {AboutText.map((item) => (
            <Fragment>
              <Grid
                item
                xs={2}
                sx={{
                  height: 300,
                  // border: "1px solid black",
                  background: item.color,
                  display: "flex",
                  alignItems: "left ",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  p: 2,
                  gap: 1,
                }}
              >
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                  <b>{item.title}</b>
                </Typography>
                <Typography variant="body" sx={{ fontSize:'14px' }}>
                 {item.subtext}
                </Typography>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Stack>
    </HomeContainer>
  );
}

export default Home;
