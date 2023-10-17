import React, { Fragment, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Stack, Tab, Typography, Tabs, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Clients from "../components/Sliders/Clients";
import Industries from "../components/Sliders/Industries";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Page from "../components/Page";
import KapilGrouplogo from '../assets/Logo/Kapilgroup.png'
import {
  FiArrowRight,
  FiChevronRight,
  FiExternalLink,
  FiSend,
} from "react-icons/fi";

import { ZigZagData } from "../mock/NavbarData";

import { AboutText } from "../mock/MockData";
import Homepageb from "../assets/Banners/HomepageBanner.jpg";
// ---------------------------------------------------------------

const About = [
  {
    id: 1,
    title: "KAPIL TECHNOLOGIES",
    desc: "It is a systems integrator, software development partner, and managed services provider focused on Enterprise solutions for multiple industries. Our services include strategies for accounting, finance, regulatory reporting, performance management, sustainability, customer experience, and IoT. Operating from offices across the globe and growing, our expert teams help clients achieve operational efficiency and improve decision-making capabilities. KAPIL TECH is part of the KAPIL GROUP.",
  },
  // {
  //   id: 2,
  //   title: "KAPIL GROUP",
  //   link: "https://kapilgroup.com/",
  //   desc: "KAPIL is an independent, international group of companies with more than 18,000 employees around the world. The Kapil Group is active in over 10 countries in the banking, insurance, automotive, consumer products, food, life science & healthcare, public sector, telecommunications, manufacturing, travel & logistics and utilities sectors. Kapil Tech develops integrated software solutions and advises its customers on all aspects of information technology.",
  // },
];

export const HomeContainer = styled("div")(({ theme }) => ({}));
export const MainBanner = styled("div")(({ theme, image }) => ({
  width: "100%",
  height: 580,
  background: "#B0DAE3",
  backgroundImage: `url(${image})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  // backgroundAttachment: 'fixed',
  maxWidth: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
  },
}));

export const NavDiv = styled("div")(({ theme }) => ({
  height: "15vh",
  [theme.breakpoints.up("xl")]: {
    height: "10vh",
  },
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
  background: "#001222",
  height: "auto",
  border: "10px solid white ",
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

  const Hostname = window.location.hostname;
  const name =
    Hostname === "www.kapiltech.com"
      ? "Kapil Technologies"
      : Hostname === "kcs-tech.com"
      ? "KCS Technologies Inc"
      : Hostname === "ptkcs.com"
      ? "PT KCS Technologies Indonesia"
      : "Kapil Technologies";
  const [Hover, setHover] = useState(false);

  const MouseEnters = () => {
    setHover(true);
  };

  const MouseLeaves = () => {
    setHover(false);
  };

  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate("/contact");
  };
  return (
    <HomeContainer>
      <Page name="Home" content="" keywords="" />

      <MainBanner
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        image={Homepageb}
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
            background: "rgba(0,0,0,0.5)",
            height: 580,
            position: "relative",
          }}
        >
          <Grid
            item
            sx={{
              // border: "1px solid white",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              // flexDirection: "column",
              color: "white",
              position: "relative",
              height: 450,
            }}
            xs={12}
          >
            <Typography
              variant="h3"
              className="Home"
              sx={{
                color: "white",
                // position: "absolute",
                // bottom: 0,
                // fontFamily: "h3.fontFamily",
                fontWeight: "bold",
              }}
            >
              Transforming your <br /> Digital Future
            </Typography>
          </Grid>

          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              right: 0,
              bottom: 0,
              p: 3,
            }}
          >
            Enabling High Performance
          </Typography>
        </Grid>
      </MainBanner>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 1, textAlign: "center" }}
        spacing={1}
      >
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
              <Grid item xs={12} md={6} sx={{ height: 380 }}>
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
                xs={12}
                md={6}
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
                  <Typography
                    variant="h3"
                    sx={{ color: item.txt1color, fontWeight: "bold" }}
                  >
                    {item.content.txt1}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: item.txt1color, fontWeight: "bold" }}
                  >
                    {item.content.txt2}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: item.txt1color, fontWeight: "bold" }}
                  >
                    {item.content.txt3}
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

      <ClientSectionsLayer
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Clients />
      </ClientSectionsLayer>
      <Industries />

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: "100%",
          // background: " linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);",
          height: "Auto",
        }}
      >
        <Stack
          direction="column"
          alignItems="left"
          justifyContent="center"
          sx={{ width: "100%", p: 2 }}
        >
          <Typography
            variant="h6"
            target="blank"
            sx={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              textJustify: "inner-word",
              position: "relative",
              p: 2,
            }}
          >
            Kapil Technologies is a systems integrator, software development
            partner, and managed services provider focused on Enterprise
            solutions for multiple industries. Our services include strategies
            for accounting, finance, regulatory reporting, performance
            management, sustainability, customer experience, and IoT. Operating
            from offices across the globe and growing, our expert teams help
            clients achieve operational efficiency and improve decision-making
            capabilities. KAPIL TECHNOLOGIES is part of the
            <Link
              to="https://kapilgroup.com"
              target="blank"
              className="Home-kapilgroup-link"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
                marginLeft: "5px",
                height: "auto",
              
                // border: "1px solid blue",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              KAPIL GROUP
              {/* <img src={KapilGrouplogo} alt="Kapil Groups"  /> */}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </HomeContainer>
  );
}

export default Home;
