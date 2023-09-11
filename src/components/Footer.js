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
    link: "https://www.google.com/maps/place/Kapil+Technologies/@17.4215664,78.3480859,15z/data=!4m6!3m5!1s0x3bcb93b176920779:0x37fb7ad50cd439fb!8m2!3d17.4215664!4d78.3480859!16s%2Fg%2F11fv1kkttf?entry=ttu",
    title: "INDIA",
  },
  {
    id: 2,
    link: "https://www.google.com/maps/place/Pt.+KCS+Technologies+Indonesia/@-6.2297209,106.6647007,11z/data=!3m1!4b1!4m6!3m5!1s0x898152fa673815f7:0x3acad220793f1fd5!8m2!3d-6.2297465!4d106.829518!16s%2Fg%2F11v0zlpnhz?entry=ttu",
    title: "INDONESIA",
  },
  {
    id: 3,
    link: "https://www.google.com/maps/place/Kapil+Technologies/@17.4215664,78.3480859,15z/data=!4m6!3m5!1s0x3bcb93b176920779:0x37fb7ad50cd439fb!8m2!3d17.4215664!4d78.3480859!16s%2Fg%2F11fv1kkttf?entry=ttu",
    title: "USA",
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
            <MapLink to={item.link} target="blank" key={item.id}>
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
              ? "mailto:contact@ptkcs.com"
              : HostName === "kcs-tech.com"
              ? "mailto:marketing@kcs-tech.com"
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
