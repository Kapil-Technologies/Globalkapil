import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { SocialMedia } from "./SiteMap";
import { FaCopyright } from "react-icons/fa6";

// ----------------------------------------------------------------

export const MainFooter = styled("footer")(({ theme, image }) => ({
  backgroundColor: "#162438",
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
      <Typography>All rights reserved by Pt KCS Technologies Indonesia 2023</Typography>
    </Stack>
  );
};

function Footer() {
  return (
    <MainFooter>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ color: "white", height: "inherit", p: 2 }}
      >
        <Copyright />
      </Stack>
    </MainFooter>
  );
}

export default Footer;