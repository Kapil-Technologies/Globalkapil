import React from "react";
import Page from "../../components/Page";
import { CTA, NavDiv } from "../Home";
import { CareersBanner } from "../Careers";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { FaCloud } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { ERPServices } from "../../mock/ERP";
import ERP from "../../assets/Banners/erp.png";

// ---------------------------------------------------------------------- Styled Components

export const Cloud = styled(FaCloud)(({ theme }) => ({
  fontSize: "28px",
  paddingRight: "10px",
}));
export const NavigateLink = styled(Link)(({ theme }) => ({
  color: "black",
  fontSize: "25px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "end",
  position: "relative",
  bottom: 0,
}));

export const BannerImage = styled("img")(({ theme }) => ({
  width: " inherit",
  maxWidth: " inherit",
  height: "inherit",
}));

// ---------------------------------------------------------------------- Main Components

function Erp() {
  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="ERP" content="" />
      <CareersBanner>
        <BannerImage src={ERP} alt="Kapil Technologies ERP Servies" />
      </CareersBanner>

      <Stack
        direction="column"
        alignContent="center"
        sx={{ textAlign: "center", p: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          <b>Empowering Your Business with Seamless ERP Solutions.</b>
        </Typography>
        <Typography variant="body" gutterBottom>
          Enterprise Resource Planning (ERP) is a comprehensive business
          management system that integrates various departments, processes, and
          data into a single unified platform. By combining a range of functions
          such as finance, human resources, inventory, manufacturing, and
          customer relationship management, ERP enables organizations to
          streamline operations, enhance collaboration, and make informed
          decisions based on real-time data.
        </Typography>
      </Stack>
      <Stack
        direction="column"
        alignItem="center"
        spacing={1}
        sx={{ textAlign: "center", marginBottom: "10px" }}
      >
        <Typography variant="h4" sx={{ p: 2 }}>
          <b>Our ERP Services</b>
        </Typography>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          columnGap={2}
        >
          {ERPServices.map((item) => (
            <Stack
              direction="column"
              alignItems="left"
              spacing={2}
              component={Card}
              sx={{
                border: "1px solid #d3e1ea",
                width: 350,
                height: 300,
                p: 1,
                textAlign: "left",
              }}
              key={item.id}
            >
              <Stack
                direction="center"
                alignItems="center"
                spacing={2}
                sx={{ fontSize: "20px" }}
              >
                <Cloud />
                <Typography variant="h4">{item.title}</Typography>
              </Stack>
              <Typography>{item.desc}</Typography>
              <NavigateLink to={item.path}>
                <FiExternalLink />
              </NavigateLink>
            </Stack>
          ))}
        </Grid>
        <CTA
          buttonText="Connect with us"
          text="Transform Your Business with Our Tailored ERP Solutions. Get Started Today!"
        />
      </Stack>
    </div>
  );
}

export default Erp;
