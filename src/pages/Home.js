import React, { Fragment, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Stack,
  Tab,
  Typography,
  Tabs,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Clients from "../components/Sliders/Clients";
import Industries from "../components/Sliders/Industries";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Page from "../components/Page";
import KapilGrouplogo from "../assets/Logo/Kapilgroup.png";
import {
  FiArrowRight,
  FiChevronRight,
  FiExternalLink,
  FiSend,
} from "react-icons/fi";

import { ZigZagData } from "../mock/NavbarData";

import { AboutText } from "../mock/MockData";
import Homepageb from "../assets/Banners/HomepageBanner.jpg";
import MainBanners, {
  BannerImage,
  BannerImageContainer,
  BannerImageLayer,
} from "../components/common/MainBanners";
import INAP1 from '../assets/Partners/Infor Logos/inforalliancepartner.png'
import INAP2 from "../assets/Partners/Infor Logos/inforalliancep1.png";
import INAP3 from "../assets/Partners/Infor Logos/inforalliancepartner transpernt.png";
import INAP4 from "../assets/Partners/Infor Logos/inforAPTransperant2.png";


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

//
// ---------------------------------------------------------------

function Home() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const tab = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
      <BannerImageContainer
        smHeight="320px"
        mdHeight="400px"
        lgHeight="380px"
        xlHeight="auto"
        mainHeight="560px"
      >
        <BannerImage
          src={Homepageb}
          smHeight="320px"
          mdHeight="400px"
          lgHeight="380px"
          xlHeight="auto"
          mainHeight="560px"
        />
        <BannerImageLayer
          textcolor="white"
          layercolor="rgba(0,0,0,0.5)"
          smHeight="inherit"
          mdHeight="inherit"
          lgHeight="inherit"
          xlHeight="98%"
          mainHeight="inherit"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "inherit", height: "inherit" }}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "inherit",
                height: "560px",
                // background:'blue'
              }}
            >
              <Typography
                variant={mobile ? "subtitle" : tab ? "h4" : "h2"}
                className="Home"
                sx={{
                  color: "white",
                  fontWeight: "bold",

                  pl: 2,
                  width: "100%",
                }}
              >
                Transforming your <br /> Digital Future
              </Typography>
              {/* <img src={INAP1} alt="Infor Alliance Partner " height="72px" />
              <img src={INAP2} alt="Infor Alliance Partner " height="72px" />
              <img src={INAP3} alt="Infor Alliance Partner " height="72px" />
              <img src={INAP4} alt="Infor Alliance Partner " height="72px" /> */}
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "inherit",
                height: "560px",
                position: "relative",
              }}
            >
              {/* <img src={INAP1} alt="Infor Alliance Partner " height="72px" />
              <img src={INAP2} alt="Infor Alliance Partner " height="72px" />
              <img src={INAP3} alt="Infor Alliance Partner " height="72px" /> */}
              <img src={INAP4} alt="Infor Alliance Partner " height="72px" style={{marginTop:'22vh',marginLeft:'15vh'}} />
              <Typography
                variant={mobile ? "subtitle" : tab ? "h6" : "h4"}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  position: "absolute",

                  right: "5px",
                  bottom: "5px",
                  //  pb:2,
                  // width:'100%'
                }}
              >
                Enabling High Performance
              </Typography>
            </Stack>
          </Stack>
        </BannerImageLayer>
      </BannerImageContainer>

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
                  sx={{
                    textAlign: item.textalign,
                    height: "inherit",
                    px: 4,
                    position: "relative",
                    width: "auto",
                  }}
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
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      textAlign: "center",
                      width: "90%",
                      color: item.txt1color,
                      // background: "blue",
                    }}
                  >
                    {item.subcats
                      ? item.subcats.map((item) => (
                          <Typography
                            variant="h4"
                            key={item.id}
                            sx={{
                              // textTransform: "uppercase",
                              // fontSize: "16px",
                              color: "inherit",
                              fontWeight: "bold",
                            }}
                          >
                            {item.li}
                          </Typography>
                        ))
                      : null}
                  </Stack>
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
      {/* <Industries /> */}

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
