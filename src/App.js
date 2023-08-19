import React from 'react'
import './App.css'
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { customTheme } from './theme/theme';
// Caruseols
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import { HelmetProvider } from "react-helmet-async";
import Navbar from './components/Navbar';
import Routes from './router/Routes';
import SiteMap from './components/SiteMap';
import Footer from './components/Footer'
import BreadCrums from './components/BreadCrums';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HelmetProvider>
        <ScrollToTop />
        <Navbar />
        {/* <BreadCrums /> */}
        
        <Routes />
        <SiteMap />
        <Footer />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App
