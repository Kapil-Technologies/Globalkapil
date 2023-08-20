import React from "react";
import "./App.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./theme/theme";
// Caruseols
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Routes from "./router/Routes";
import SiteMap from "./components/SiteMap";
import Footer from "./components/Footer";
import BreadCrums from "./components/BreadCrums";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";


function App() {

  const {pathname} = useLocation()
  return (
    <ThemeProvider theme={customTheme}>
      <HelmetProvider>
        <ScrollToTop />
        {pathname !== "/404" ? <Navbar /> : null}
        {/* <BreadCrums /> */}

        <Routes />
        {pathname !== "/404" ? <SiteMap /> : null}
        {pathname !== "/404" ? <Footer /> : null}
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
