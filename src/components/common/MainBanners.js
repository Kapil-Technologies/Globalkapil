import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

// -----------------------------------------------------------------  Styled Components

export const BannerImageContainer = styled(Box)(
  ({ theme, contHeight, mobileHeight, tabHeight }) => ({
    width: "100%",
    height: contHeight,
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: mobileHeight,
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: tabHeight,
    },
  })
);

export const BannerImage = styled("img")(
  ({ theme, imgHeight, mobileHeight, tabHeight }) => ({
    width: "100%",
    height: imgHeight,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: mobileHeight,
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: tabHeight,
    },
  })
);

export const BannerImageLayer = styled(Box)(
  ({ theme, textcolor, layercolor, mobileHeight, tabHeight }) => ({
    background: layercolor,
    width: "100%",
    height: "inherit",
    position: "absolute",
    color: textcolor,
    top: 0,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: mobileHeight,
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: tabHeight,
    },
  })
);

// -----------------------------------------------------------------  Styled Components


