import React from "react";
import { NavDiv } from "../Home";
import Page from "../../components/Page";
import { Grid, Stack, Typography } from "@mui/material";
import { Stragetic, growing } from "../../mock/CCData";

function Customers() {
  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name="Our Customers" content="" />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{marginBottom:'10px'}}
      >
        <Typography variant="h5" sx={{p:2}}>
          <b>Our Growing Clientel</b>
        </Typography>

        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          {growing.map((item) => (
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                height: 200,
                width: 200,
                border: "1px solid #d3e1ea",
                boxShadow: 3,
              }}
            >
              <img
                src={item.logo}
                alt="Kapil Growing"
                height={item.height}
                width={item.width}
              />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" sx={{p:2}}>
          <b>Our Stragetic Clientel</b>
        </Typography>

        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Stragetic.map((item) => (
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                height: 200,
                width: 200,
                border: "1px solid #d3e1ea",
                boxShadow: 3,
              }}
            >
              <img
                src={item.logo}
                alt="Kapil Growing"
                height={item.height}
                width={item.width}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}

export default Customers;
