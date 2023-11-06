import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Page from "../components/Page";
import CONB1 from "../assets/Banners/Con2.jpeg";
import {
  BannerImage,
  BannerImageContainer,
  BannerImageLayer,
} from "../components/common/MainBanners";
import Contactform from "../components/forms/Contactform";
import {
  FiAtSign,
  FiFacebook,
  FiGlobe,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { OfficeAddress, SocialMedia } from "../mock/ContactData";
import Flag from "../assets/Flags/roundedIndonesi.png";
// -------------------------------------------------------------------- Styled Components

export const MainContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  color: "#162437",
  width: "100%",
}));

export const NavigateLink = styled(Link)(({ theme, color }) => ({
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const NavigateLink1 = styled(Link)(({ theme, color }) => ({
  color: "#162438",
  textDecoration: "none",
  paddingLeft: "5px",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const NavigateLink2 = styled(Link)(({ theme, color }) => ({
  color: "#162438",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

// -------------------------------------------------------------------- Main Components

function Contact() {
  return (
    <MainContainer direction="column" alignItems="center">
      <Page name="Contact Us" />
      <BannerImageContainer
        smHeight="320px"
        mdHeight="400px"
        lgHeight="380px"
        xlHeight="auto" 
        mainHeight="auto"
      >
        <BannerImage
          src={CONB1}
          smHeight="320px"
          mdHeight="400px"
          lgHeight="380px"
          xlHeight="auto"
          mainHeight="auto"
        />
        <BannerImageLayer
          textcolor="white"
          layercolor="rgb(0, 0, 0,0.3)"
          smHeight="inherit"
          mdHeight="inherit"
          lgHeight="inherit"
          xlHeight="98%"
          mainHeight="99%"
        >
          <Stack
            direction="column"
            alignItems="end"
            justifyContent="center"
            sx={{
              width: "100%",
              height: "inherit",
              textAlign: "right",
              position: "relative",
              right: "30px",
            }}
          >
            <Typography variant="h2">
              We'd Love to Hear <br /> from You!
            </Typography>
          </Stack>
        </BannerImageLayer>
      </BannerImageContainer>

      <Typography variant="h3" sx={{ p: 1 }}>
        Connect With Us !
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", py: 2, height: "500px" }}
      >
        <Stack
          direction="column"
          alignItems="left"
          justifyContent="center"
          spacing={2}
          sx={{
            width: "30%",
            background: "#162438",
            color: "white",
            p: 2,
            height: "inherit",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {SocialMedia.map((item) => (
              <NavigateLink
                key={item.id}
                to={item.link}
                target={item.target}
                style={{ fontSize: "25px" }}
              >
                {item.icon}
              </NavigateLink>
            ))}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <FiAtSign />
            <NavigateLink to="mailto:info@kapiltech.com">
              info@kapiltech.com
            </NavigateLink>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <FiPhone />
            <NavigateLink to="tel:+91 88899 92186">
              +91 88899 92186
            </NavigateLink>
          </Stack>

          <Stack direction="row" alignItems="start" spacing={1}>
            <FiMapPin style={{ marginTop: "8px" }} />
            <Stack direction="column" alignItems="left">
              <Typography variant="h6">Kapil Technologies Pvt Ltd</Typography>

              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                (formerly KCS Software Solutions Pvt Ltd)
              </Typography>
              <Typography variant="body1">
                WTC Shamshadbad – Interim Office,
              </Typography>
              <Typography variant="body1">
                2nd Floor, Kapil Kavuri Hub, Nanakaramuda,
              </Typography>
              <Typography variant="body1">
                Hyderabad, Telangana 500032, India
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Contactform />
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ width: "100%", py: 5, textAlign: "center" }}
      >
        <Typography variant="h6" sx={{ width: "60%" }}>
          Applying for a job? Please visit our Careers Center to review our
          current openings and apply. You can also reach our recruitment team at
          <NavigateLink1 to="mailto:hr@kcs-tech.com">
            hr@kcs-tech.com
          </NavigateLink1>
        </Typography>

        <Button
          variant="contained"
          sx={{ borderRadius: "25px", px: 3, py: 1 }}
          href="/join-us/search-jobs"
        >
          Visit our Careers Center
        </Button>
      </Stack>

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        {OfficeAddress.map((item) => (
          <Grid
            item
            key={item.id}
            xs={3}
            sx={{
              display: "flex",
              alignItem: "left",
              justifyContent: "left",
              flexDirection: "column",
              gap: 1,
              height: "400px",
              background: item.cardcolor,
              p: 2,
              // border: "1px solid green",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                fontSize: "25px",
                background: "#e10009",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                boxShadow: "4px 4px 30px 0px #e10009 inset",
              }}
            >
              <FiMapPin />
            </Stack>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>

            <Typography variant="h6">{item.cmpny}</Typography>

            <Typography variant="body1">{item.add1}</Typography>
            <Typography variant="body1">{item.add2}</Typography>
            {item.add3 ? (
              <Typography variant="body1">{item.add3}</Typography>
            ) : null}
            {item.add4 ? (
              <Typography variant="body1">{item.add4}</Typography>
            ) : null}

            <Stack direction="row" alignItems="center" spacing={1}>
              <FiPhone />
              <NavigateLink2 to={item.number1}>{item.number}</NavigateLink2>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
}

export default Contact;
