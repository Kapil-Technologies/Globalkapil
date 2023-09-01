import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { SocialMedia } from "./SiteMap";
import { FaCopyright } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

// ----------------------------------------------------------------

export const MainFooter = styled("footer")(({ theme, image, path }) => ({
  backgroundColor: "#162438",
  width: "100%",
  [theme.breakpoints.up("xl")]: {
    position: path ? "absolute" : null,
    bottom: path ? 0 : null,
  },
}));

// ---------------------------------------------------------------

export const Copyright = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <FaCopyright />
      <Typography>All rights reserved by Kapil Technologies 2023</Typography>
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
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          INDIA | INDONESIA | USA
        </Typography>
        <Copyright />
        <Typography
          variant="body1"
          component={Link}
          to={
            HostName === "kapiltech"
              ? "mailto:info@kapiltech.com"
              : HostName === "ptkcs"
              ? "mailto:contact@ptkcs.com"
              : HostName === "kcs-tech"
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
          {HostName === "kapiltech"
            ? "info@kapiltech.com"
            : HostName === "ptkcs"
            ? "contact@ptkcs.com"
            : HostName === "kcs-tech"
            ? "marketing@kcs-tech.com"
            : 'infor@kapiltech.com'}
        </Typography>
      </Stack>
    </MainFooter>
  );
}

export default Footer;
