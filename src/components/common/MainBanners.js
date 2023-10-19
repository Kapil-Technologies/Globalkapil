import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

// -----------------------------------------------------------------  Styled Components

export const BannerImageContainer = styled(Box)(
  ({ theme, smHeight, mdHeight, lgHeight, xlHeight, mainHeight }) => ({
    width: "100%",
    height: mainHeight,
    position: "relative",

    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: smHeight,
    },

    [theme.breakpoints.between("sm", "md")]: {
      // tab
      width: "100%",
      height: mdHeight,
    },

    [theme.breakpoints.between("md", "lg")]: {
      // Desktop
      width: "100%",
      height: lgHeight,
    },

    // [theme.breakpoints.between("lg", "xl")]: {
    //   // large
    //   width: "100%",
    //   height: 'auto',
    // },

    [theme.breakpoints.up("xl")]: {
      // xlarge
      width: "100%",
      height: xlHeight,
    },
  })
);

export const BannerImage = styled("img")(
  ({ theme, smHeight, mdHeight, lgHeight, xlHeight, mainHeight }) => ({
    width: "100%",
    height: mainHeight,

    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: smHeight,
    },

    [theme.breakpoints.between("sm", "md")]: {
      // tab
      width: "100%",
      height: mdHeight,
    },

    [theme.breakpoints.between("md", "lg")]: {
      // Desktop
      width: "100%",
      height: lgHeight,
    },

    // [theme.breakpoints.between("lg", "xl")]: {
    //   // large
    //   width: "100%",
    //   height: 'auto',
    // },

    [theme.breakpoints.up("xl")]: {
      // xlarge
      width: "100%",
      height: xlHeight,
    },
  })
);

export const BannerImageLayer = styled(Box)(
  ({
    theme,
    textcolor,
    layercolor,
    smHeight,
    mdHeight,
    lgHeight,
    xlHeight,
    mainHeight,
  }) => ({
    background: layercolor,
    width: "100%",
    height: "inherit",
    position: "absolute",
    color: textcolor,
    top: 0,

    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: smHeight,
    },

    [theme.breakpoints.between("sm", "md")]: {
      // tab
      width: "100%",
      height: mdHeight,
    },

    [theme.breakpoints.between("md", "lg")]: {
      // Desktop
      width: "100%",
      height: lgHeight,
    },

    [theme.breakpoints.between("lg", "xl")]: {
      // large
      width: "100%",
      height: mainHeight,
    },

    [theme.breakpoints.up("xl")]: {
      // xlarge
      width: "100%",
      height: xlHeight,
    },
  })
);

// -----------------------------------------------------------------  Styled Components
