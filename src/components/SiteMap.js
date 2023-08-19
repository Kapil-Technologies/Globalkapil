import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Stack, Typography, Tooltip, colors } from "@mui/material";

import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
  FaHandPointUp,
} from "react-icons/fa6";
import { Connect, SMedia, SiteMapLinks } from "../mock/FooterData";
import { Navigation } from "../pages/Contact";
// ----------------------------------------------------------------

export const MainSiteMap = styled("div")(({ theme, image }) => ({
  backgroundColor: "#012C54",
  color: "white",
  width: "100%",
}));

export const GridItemCompany = styled(Grid)(({ theme, image }) => ({
  // border: "1px solid white",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
  gap: "10px",
  width: "auto",
}));

export const GridItem = styled(Grid)(({ theme, image }) => ({
  // border: "1px solid white",
  width: "auto",
}));

export const Flags = styled("img")(({ theme, image }) => ({
  width: "25px",
  height: "20px",
}));

export const Mail = styled(Link)(({ theme, image }) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "18px",
  "&:hover": {
    color: "orange",
  },
}));

export const SMediaLink = styled(Link)(({ theme, image }) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "22px",
  "&:hover": {
    color: "orange",
  },
}));

export const SiteMapTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "10px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: "bold",
  color: "orange",
}));

export const SiteMapList = styled("ul")(({ theme }) => ({}));

export const SiteMapItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  marginBottom: "10px",
}));

export const SiteMapLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const Social = styled(Link)(({ theme, image }) => ({
  textDecoration: "none",
  color: "white",
  marginTop: "10px",
  fontSize: 22,
  // border: '1px solid green',
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "white",
    color: "#012c54",
  },
}));
// ----------------------------------------------------------------

export const SocialMedia = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {SMedia.map((item) => (
        <SMediaLink
          to={item.path}
          target="blank"
          key={item.id}
          component={Tooltip}
          title={item.title}
          placement="center"
        >
          {item.icon}
        </SMediaLink>
      ))}
    </Stack>
  );
};
// ----------------------------------------------------------------

function SiteMap() {
  return (
    <MainSiteMap>
      <Grid
        container
        rowGap={2}
        columnGap={2}
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          p: 1,
        }}
      >
        <GridItemCompany item xs={4} md={3} sx={{ p: 1 }}>
          <Typography className="SitemapLogo" variant="h4">
            
              Kapil<br />Technologies
          
         </Typography>
          <Typography variant="body">
            Welcome to Kapil Technologies – your reliable partner for innovative
            ERP consulting solutions. We specialize in empowering businesses
            with tailored ERP services to boost productivity and maintain a
            competitive edge.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {SMedia.map((item) => (
              <Social to={item.path} key={item.id} target="blank">
                {item.icon}
              </Social>
            ))}
          </Stack>
        </GridItemCompany>

        {SiteMapLinks.map((item) => (
          <GridItem item sx={{ p: 1 }} key={item.id}>
            <SiteMapTitle variant="h6">{item.title}</SiteMapTitle>

            <SiteMapList>
              {item.submenu.map((item) => (
                <SiteMapItem key={item.id}>
                  <SiteMapLink>{item.title}</SiteMapLink>
                </SiteMapItem>
              ))}
            </SiteMapList>
          </GridItem>
        ))}

        <GridItem item xs={12} md={2} sx={{ p: 1 }}>
          <SiteMapTitle variant="h6">Connect with Us</SiteMapTitle>
          <Stack direction="column" alignItems="left" spacing={3.2}>
            {Connect.map((item) => (
              <Stack
                direction="column"
                alignItems="left"
                spacing={0.8}
                key={item.id}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Flags src={item.flag} alt="Kapil Technologies Locations" />
                  <Typography variant="body">{item.title}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {item.phone}
                  <SiteMapLink to={item.phoneto}>{item.mobile}</SiteMapLink>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {item.mail}
                  <SiteMapLink to={item.mailto}>{item.mailid}</SiteMapLink>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </MainSiteMap>
  );
}

export default SiteMap;
