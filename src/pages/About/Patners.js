import React from "react";
import { NavDiv } from "../Home";
import Page from "../../components/Page";
import { Grid, Stack, Typography } from "@mui/material";
import Infor from "../../assets/Partners/Infor.png";
import Mobillor from "../../assets/Partners/Mobillor.png";
import enstrap from "../../assets/Partners/Enstrapp.png";
import Expenz from "../../assets/Partners/Expenz.png";
import QR from "../../assets/Partners/QR.png";
import ness from "../../assets/Partners/Ness.png";
import massteh from "../../assets/Partners/masstek.png";
import bitrix from "../../assets/Partners/bitrix.png";
import tatat from "../../assets/Partners/tatat.png";
import cloud4c from "../../assets/Partners/cloud.jpg";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const PartnerList = [
  {
    id: 1,
    image: Infor,
    width: 200,
    height: "auto",
  },
  {
    id: 2,
    image: QR,
    width: 200,
    height: "auto",
  },

  {
    id: 3,
    image: Expenz,
    width: 200,
    height: "auto",
  },
  {
    id: 4,
    image: Mobillor,
    width: 200,
    height: "auto",
  },
  {
    id: 5,
    image: enstrap,
    width: 'auto',
    height: "auto",
  },
  {
    id: 6,
    image: bitrix,
    width: "250px",
    height: "auto",
  },
];

export const Technical = [
  {
    id: 1,
    image: ness,
    width: 100,
    height: 100,
  },

  {
    id: 2,
    image: massteh,
    width: 200,
    height: "auto",
  },

  {
    id: 3,
    image: tatat,
    width: 200,
    height: "auto",
  },
  {
    id: 4,
    image: cloud4c,
    width: 200,
    height: "auto",
  },
];

export const Main = styled(Stack)(({ theme }) => ({
  // background: "blue",
  width: "100%",
  // height: "75vh",
  [theme.breakpoints.up("xl")]: {
    height: "85vh",
  },
}));

function Patners() {
  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="Our Alliance" content="" />
      <Main direction="column" alignItems="center" justifyContent="center">
        <Stack
          direction="column"
          alignItem="center"
          spacing={2}
          sx={{ py: 1, width: "100%", textAlign: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Portfolio of World Class Alliances
          </Typography>
          <Grid
            container
            columnGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
              // border: "1px solid blue",
            }}
          >
            {PartnerList.map((item) => (
              <Grid
                item
                xs={12}
                md={2.5}
                xl={2}
                sx={{
                  // border: "1px solid blue",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  width: "auto",
                  height: "auto",
                }}
              >
                <img
                  src={item.image}
                  alt="Kapil Technologies Alliances"
                  width={item.width}
                  height={item.height}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack
          direction="column"
          alignItem="center"
          spacing={2}
          sx={{ p: 1, width: "80%", textAlign: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Our Technical Alliances
          </Typography>
          <Grid
            container
            columnGap={2}
            rowGap={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              // border: "1px solid blue",
            }}
          >
            {Technical.map((item) => (
              <Grid
                item
                
                xs={12}
                md={2.3}
                xl={1.8}
                sx={{
                  // border: "1px solid blue",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  width: "auto",
                  height: "auto",
                }}
              >
                <img
                  src={item.image}
                  alt="Kapil Technologies Alliances"
                  width={item.width}
                  height={item.height}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Main>
    </div>
  );
}

export default Patners;
