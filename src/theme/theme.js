import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    tabs: {
      "& .MuiTabs-indicator": {
        backgroundColor: "orange",
        height: 3,
      },
      "& .MuiTab-root.Mui-selected": {
        color: "red",
      },
    },
    
  },

  palette: {
    primary: {
      main: "#012C54",
    },
  },
  typography: {
    fontFamily: ["Montserrat", " sans-serif"].join(","),

    // h2: {
    //   fontFamily: ["Dancing Script", "cursive"].join(","),
    // },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});
