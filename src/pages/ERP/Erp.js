import React from "react";
import Page from "../../components/Page";
import { CTA, NavDiv } from "../Home";

import {
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FaCloud } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { ERPServices } from "../../mock/ERP";
import ErpImage from '../../assets/Banners/erp.png'
import InforLogo from '../../assets/Partners/Infor.png'

// ---------------------------------------------------------------------- Styled Components

export const Cloud = styled(FaCloud)(({ theme }) => ({
  fontSize: "28px",
  paddingRight: "10px",
}));
export const NavigateLink = styled(Link)(({ theme }) => ({
  color: "black",
  fontSize: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  // position: "relative",
  // bottom: 0,
  width: "100%",
  height: "20vh",
  // border: "1px solid blue",
}));

export const BannerImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
}));

export const CareersBanner = styled("div")(({ theme, image }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  color: "#063072",
}));

// ---------------------------------------------------------------------- Main Components

function Erp() {
  return (
    <div>
      {/* <NavDiv>.</NavDiv> */}
      <Page name="ERP" content="" />
      <CareersBanner>
        <BannerImage src={ErpImage} alt="Kapil Technologies Erp Services" />
      </CareersBanner>

      <Stack
        direction="column"
        alignItem="center"
        spacing={1}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ p: 2 }}></Typography>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          columnGap={2}
          rowGap={2}
        >
          {ERPServices.map((item) => (
            <Stack
              direction="column"
              alignItems="left"
              spacing={2}
              component={Card}
              sx={{
                border: "2px solid #d3e1ea",
                width: 350,
                height: 310,
                p: 1,
                textAlign: "left",
                borderRadius: 3,
                position: "relative",
              }}
              key={item.id}
            >
              <Stack
                direction="center"
                alignItems="center"
                spacing={2}
                sx={{ fontSize: "20px" }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{ textAlign: "justify", textJustify: "inner-word" }}
              >
                {item.desc}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: 50,
                  position: "absolute",
                  bottom: 0,
                  width: 350,
                  py: 2,
                }}
              >
                <img
                  src={item.icon}
                  alt="Kapil Technologies Partners"
                  width={item.logowidth}
                  height={item.logoheight}
                />
                <NavigateLink to={item.path}>
                  <FiExternalLink />
                </NavigateLink>
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{
            width: "100%",
            // backgroundImage:
            //   "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
            height: 480,
          }}
        >
          <Typography variant="h5" sx={{ p: 1, fontWeight: "bold" }}>
            Connect With our Experts
          </Typography>
          <Stack
            direction="column"
            alignItem="center"
            justifyContent="center"
            spacing={2}
            sx={{ width: "80%", p: 1 }}
          >
            <Stack
              direction="row"
              alignItem="center"
              justifyContent="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <TextField label="Full Name" sx={{ width: "400px" }} />
              <TextField label="Company" sx={{ width: "400px" }} />
            </Stack>
            <Stack
              direction="row"
              alignItem="center"
              justifyContent="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <TextField label="Work Email Id" sx={{ width: "400px" }} />
              <TextField label="Phone Number" sx={{ width: "400px" }} />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ margin: "auto " }}
            >
              <TextField
                label="Message"
                multiline
                rows={5}
                sx={{ width: "688px" }}
              />
              <Button variant="contained" endIcon={<FiArrowRight />}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default Erp;
