import React from "react";
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
import { FiChevronRight, FiSend } from "react-icons/fi";
import HAboutBanner from "../assets/Banners/cta.jpeg";
import { ZigZagData } from "../mock/NavbarData";
// ---------------------------------------------------------------

export const HomeContainer = styled("div")(({ theme }) => ({}));

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

export const ClientSections = styled(Stack)(({ theme, image }) => ({
  backgroundColor: "#d3e1ea",
  height: "350px",

  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const ClientSectionsLayer = styled(Stack)(({ theme, image }) => ({
  background: "rgba(0, 0, 0, 0.25)",
  height: "350px",
  padding: "10px",
}));

// ---------------------------------------------------------------

const TabsMenu = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      sx={{
        width: "100%",
        typography: "body1",
        // p: 10,
      }}
    >
      <TabContext value={value}>
        <Stack direction="column" alignItems="flex-start">
          <TabList
            indicatorColor="none"
            textColor="white"
            orientation="vertical"
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              textTransform: "capitalize",
              "& button": {
                borderRadius: 2,
                fontSize: "18px",
                margin: "5px",
              },
              "& button:hover": {
                background: "#012C54",
                color: "white",
              },

              ".Mui-selected": {
                color: "white",
                background: "#012C54",
                borderRadius: 2,
                fontSize: "18px",
              },
              padding: "5px",
            }}
          >
            <Tab label="Infor" value="1" />
            <Tab label="SAP" value="2" />
            <Tab label="Oracle" value="3" />
            <Tab label="WorkDay" value="4" />
            <Tab label="Enstrapp" value="5" />
            <Tab label="K-Mobillor" value="6" />
          </TabList>
        </Stack>
        <TabPanel value="1">Infor</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Infor</TabPanel>
        <TabPanel value="5">Item Two</TabPanel>
        <TabPanel value="6">Item Three</TabPanel>
      </TabContext>
    </Stack>
  );
};

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
      <HomepageBanner />
      <Grid container>
        {ZigZagData.map((item) => {
          if (item.type === "image") {
            return (
              <Grid item xs={4} md={6} sx={{ height: 320 }}>
                <img
                  src={item.url}
                  alt="Kapil Technologies"
                  height="320px"
                  width="100%"
                />
              </Grid>
            );
          } else {
            return (
              <Grid
                item
                xs={4}
                md={6}
                sx={{
                  // border: "1px solid blue",
                  height: 320,
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
      <IndustrySection
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h4">Our Featured Industries</Typography>
        <Industries />
      </IndustrySection>

      <ClientSections image={ClientBI}>
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
          <Button
            variant="contained"
            component={Link}
            to="/about-us/our-customers"
            endIcon={<FiChevronRight />}
          >
            Know more
          </Button>
        </ClientSectionsLayer>
      </ClientSections>
      <CTA
        text="Transform your business with cutting-edge ERP Services Unleash your full potential today!"
        buttonText="Contact us"
      />
    </HomeContainer>
  );
}

export default Home;
