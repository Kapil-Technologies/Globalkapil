import React, { useState } from "react";
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
  const { pathname } = useLocation();

  const cid = pathname.split("/")[3];
  const condition1 = pathname === "/404";

  const condition2 = pathname === `/join-us/application/${cid}`;
  const condition3 = pathname === `/join-us/application/${cid}/closed`;

  return (
    <ThemeProvider theme={customTheme}>
      <HelmetProvider>
        <ScrollToTop />
        {!condition1 ? <Navbar jobid={cid} /> : null}
        {/* <BreadCrums /> */}

        <Routes />

        {!condition1 ? <Footer /> : null}
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
