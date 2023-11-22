import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
import { OfficeAddress, SocialMedia, countrys } from "../mock/ContactData";
import Flag from "../assets/Flags/roundedIndonesi.png";
import GlobalFootPrints from "../components/common/GlobalFootPrints";
// -------------------------------------------------------------------- Styled Components

export const MainContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  color: "#162437",
  width: "100%",
}));

export const NavigateLink = styled(Link)(({ theme, color }) => ({
  color: "#162438",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
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
  const [countryCode, setCountryCode] = useState("");
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

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="column"
          alignItems="left"
          justifyContent="left"
          spacing={2}
          sx={{ width: "80%", p: 1 }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            Offices
          </Typography>

          <Typography variant="body1">
            PT KCS Technologies operates globally with strategically positioned
            regional offices in Asia, Africa, and the Middle East. This
            extensive network enables PT KCS Technologies to proficiently
            oversee numerous projects across diverse communities, utilizing the
            expertise of capable local and international talents and industry
            specialists.
          </Typography>
          <Stack direction="column" alignItems="left" spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              For general enquiries :
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body1">Email</Typography>
              <Typography variant="body1">:</Typography>
              <Typography
                variant="body1"
                component={NavigateLink}
                to="mailto:info@kapiltech.com"
              >
                info@kapiltech.com
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body1">Call us</Typography>
              <Typography variant="body1">:</Typography>
              <Typography
                variant="body1"
                component={NavigateLink}
                to="tel:+91 88899 92186"
              >
                +91 88899 92186
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "80%", p: 1 }}
          spacing={2}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5" gutterBottom sx={{ fonWeight: "bold" }}>
              Our Global FootPrints
            </Typography>

            <TextField
              select
              label="Select a Country"
              size="small"
              sx={{ width: "30%" }}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {countrys.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <GlobalFootPrints SelectedCountry={countryCode} />
        </Stack>
      </Stack>
    </MainContainer>
  );
}

export default Contact;
