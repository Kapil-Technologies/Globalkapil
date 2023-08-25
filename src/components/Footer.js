import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { SocialMedia } from "./SiteMap";
import { FaCopyright } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

// ----------------------------------------------------------------

export const MainFooter = styled("footer")(({ theme, image ,path}) => ({
  backgroundColor: "#162438",
  position: path? "fixed" :null,
  bottom:path?  0 :null,
  width:'100%'
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
  return (
    <MainFooter path={pathname === '/our-alliance'}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ color: "white", height: "inherit", p: 2 }}
      >
        <Typography variant="body1">
          <b>INDIA | INDONESIA | USA</b>
        </Typography>
        <Copyright />
      </Stack>
    </MainFooter>
  );
}

export default Footer;
