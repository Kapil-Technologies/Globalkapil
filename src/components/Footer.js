import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { SocialMedia } from "./SiteMap";
import { FaCopyright } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

// ----------------------------------------------------------------

const Address = [
  {
    id: 1,
    link: "/contact-us",
    title: "INDIA",
  },
  {
    id: 2,
    title: "INDONESIA",
    link: "/contact-us",
  },
  {
    id: 3,
    title: "USA",
    link: "/contact-us",
  },
];

// ----------------------------------------------------------------

export const MainFooter = styled("footer")(({ theme, image, path }) => ({
  backgroundColor: "#162438",
  width: "100%",
  [theme.breakpoints.up("xl")]: {
    position: path ? "absolute" : null,
    bottom: path ? 0 : null,
  },
}));

export const MapLink = styled(Link)(({ theme, image, path }) => ({
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
}));

// ---------------------------------------------------------------

export const Copyright = () => {
  const HostName = window.location.hostname;

  const condition =
    HostName === "www.kapiltech.com"
      ? "Kapil Technologies Pvt Ltd"
      : HostName === "ptkcs.com"
      ? "PTKCS Technologies Indonesia"
      : HostName === "kcs-tech.com"
      ? "KCS Technologies Inc"
      : "Kapil Technologies Pvt Ltd";

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{textAlign:'center'}}
    >
      <FaCopyright />
      <Typography>All rights reserved by {condition} 2023</Typography>
    </Stack>
  );
};

function Footer() {
  const { pathname } = useLocation();

  const HostName = window.location.hostname;

  return (
    <MainFooter path={pathname === "/our-alliances"}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ color: "white", height: "inherit", p: 2 }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
          {Address.map((item) => (
            <MapLink to={item.link}  key={item.id}>
              {item.title}
            </MapLink>
          ))}
        </Stack>
        <Copyright />
        <Typography
          variant="body1"
          component={Link}
          to={
            HostName === "www.kapiltech.com"
              ? "mailto:info@kapiltech.com"
              : HostName === "ptkcs.com"
              ? "mailto:info@ptkcs.com"
              : HostName === "kcs-tech.com"
              ? "mailto:info@kcs-tech.com"
              : "mailto:info@kapiltech.com"
          }
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {HostName === "www.kapiltech.com"
            ? "info@kapiltech.com"
            : HostName === "ptkcs.com"
            ? "contact@ptkcs.com"
            : HostName === "kcs-tech.com"
            ? "marketing@kcs-tech.com"
            : "info@kapiltech.com"}
        </Typography>
      </Stack>
    </MainFooter>
  );
}

export default Footer;
