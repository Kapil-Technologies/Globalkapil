import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import SAPBanner from "../../../../../assets/Banners/SAPV.gif";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ERPDataSAP } from "../../../../../mock/ERP";
import Page from "../../../../../components/Page";

// ------------------------------------------ Reusable Components

export const ERPBanner = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  background: "#1661be",
  // padding:'10px'

  // position:'relative'
}));

export const BannerImage = styled("img")(({ theme }) => ({
  //   maxWidth: "100%",
  width: "100%",
  height: "580px",
  position: "relative",

 
}));

// ------------------------------------------ Main Components

function SAP() {
  const [hover, setHover] = useState(false);
  const [hoverid, setHoverid] = useState(0);

  const handleMouseEnter = (id) => {
    setHoverid(id);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <Page name="ERP | SAP " />
      <ERPBanner>
       <BannerImage src={SAPBanner} alt="ERP SAP" />
      </ERPBanner>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ background: "#012c54" }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ py: 2 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "white" }}
          >
            Why Choose SAP ?
          </Typography>
          <Box
            sx={{
              width: 70,
              height: 5,
              background: "orange",
              color: "orange",
              borderRadius: 3,
            }}
          ></Box>
        </Stack>

        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          {ERPDataSAP.map((item) => (
            <Grid
              item
              xs={3.5}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              component={Stack}
              direction="row"
              alignItems="left"
              justifyContent="center"
              spacing={2}
            >
              <Stack
                direction="row"
                alignItems="left"
                justifyContent="center"
                spacing={2}
              >
                
                <Stack
                  direction="column"
                  alignItems="left"
                  spacing={1}
                  sx={{ width: "auto" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "Orange",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {item.mtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "justify",
                      textJustify: "inner-word",
                      color: "white",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}

export default SAP;
