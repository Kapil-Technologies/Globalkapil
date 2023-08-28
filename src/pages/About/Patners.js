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
import nttdata from "../../assets/Partners/nttdata.png";
import tatat from "../../assets/Partners/tatat.png";
import cloud4c from "../../assets/Partners/cloud.jpg";

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
    width: 200,
    height: "auto",
  },
 
];

export const Technical = [
  {
    id: 6,
    image: ness,
    width: 100,
    height: 100,
  },

  {
    id: 7,
    image: massteh,
    width: 200,
    height: "auto",
  },
  {
    id: 8,
    image: nttdata,
    width: 200,
    height: "auto",
  },
  {
    id: 9,
    image: tatat,
    width: 200,
    height: "auto",
  },
  {
    id: 10,
    image: cloud4c,
    width: 200,
    height: "auto",
  },
];

function Patners() {
  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="Our Alliance" content="" />
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
        <Typography variant="h5" >
          <b>Portfolio of World Class Alliances</b>
        </Typography>
        <Grid
          container
          columnGap={1}
          rowGap={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {PartnerList.map((item) => (
            <img
              src={item.image}
              alt="Kapil Partners"
              key={item.id}
              width={item.width}
              height={item.height}
            />
          ))}
        </Grid>
        <Typography variant="h5"  >
          <b>Portfolio of Technical Alliances</b>
        </Typography>
        <Grid
          container
          columnGap={2}
          rowGap={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         
          }}

        >
          {Technical.map((item) => (
            <img
              src={item.image}
              alt="Kapil Patners"
              key={item.id}
              width={item.width}
              height={item.height}
            />
          ))}
        </Grid>
      </Stack>
    </div>
  );
}

export default Patners;
