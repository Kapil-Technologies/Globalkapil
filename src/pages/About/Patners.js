import React from "react";
import { NavDiv } from "../Home";
import Page from "../../components/Page";
import { Grid, Stack, Typography } from "@mui/material";
import Infor from "../../assets/Partners/Infor.png";
import Mobillor from "../../assets/Partners/Mobillor.png";
import enstrap from "../../assets/Partners/Enstrapp.png";
import Expenz from "../../assets/Partners/Expenz.png";
import QR from "../../assets/Partners/QR.png";

const PartnerList = [
  {
    id: 1,
    image: Infor,
    width: 300  ,
    height: 150,
  },
  {
    id: 2,
    image: Mobillor,
    width: 300,
    height: 130,
  },
  {
    id: 3,
    image: enstrap,
    width: 200,
    height: 200,
  },
  {
    id: 4,
    image: Expenz,
    width: 192,
    height: 80,
  },
  {
    id: 5,
    image: QR,
    width: 400,
    height: 150,
  },
];

function Patners() {
  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="Our Partner" content="" />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h5" sx={{ py: 3 }}>
          <b>Our Alliances</b>
        </Typography>
        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
          }}
        >
          {PartnerList.map((item) => (
            <Grid
              key={item.id}
              item
              sx={{
                border: "1px solid #d3e1ea",
                boxShadow: 3,
                width: 480,
                height: 200,
                borderRadius:2,
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                
              }}
            >
              <img src={item.image} alt="Kapil Patners" width={item.width} height={ item.height} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}

export default Patners;
