import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

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
   
    fontFamily:"",
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});