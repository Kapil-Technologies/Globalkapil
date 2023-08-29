import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { NavDiv } from "../Home";
import SAPBanner from "../../assets/Banners/SAP2.png";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ERPDataSAP } from "../../mock/ERP";


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
  width: "680px",
  height: "500px",
  position: "relative",
    
  padding: "20px",
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
      <ERPBanner>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ background: "inherit", py: 6 }}
        >
          <BannerImage src={SAPBanner} />
          <Typography
            variant="h2"
            sx={{ color: "white", p: 1, fontWeight: "bold" }}
          >
            SAP Consulting Services
          </Typography>
        </Stack>
      </ERPBanner>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ py: 1 }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Explore Our Services
          </Typography>
          <Box
            sx={{
              width: 70,
              height: 5,
              background: "#1661be",
              color: "#1661be",
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
                <Stack alignItems="center" justifyContent="start">
                  <img
                    src={item.icon}
                    alt="SAP Services"
                    width="45px"
                    height="45px"
                    color={item.color}
                  />
                </Stack>
                <Stack direction="column" alignItems="left" spacing={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color:
                        hover && item.id === hoverid ? item.color : "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {item.mtitle}
                  </Typography>
                  <Typography variant="body1" sx={{textAlign:'justify',textJustify:'inner-word'}}>{item.desc}</Typography>
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