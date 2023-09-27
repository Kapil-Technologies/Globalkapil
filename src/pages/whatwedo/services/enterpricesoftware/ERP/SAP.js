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
  height: "600px",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "600px",
  },
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
      <Page
        name="ERP|SAP "
        content="sap,sap erp ,sap software,sap hana, Kapil Technologies, kcs Technologies, Ptkcs Technologies,sap business one,abap,sap system,sap mm,sap fico,sap abap,sap marketplace,sap analytics cloud,sap s 4hana,Kapil-Infor-Alliance partner,sap bw,s4 hana,sap sd,sap consultant,sap ecc,sap netweaver,sap crm,sap logon,sap program,sap modules,sap basis,sap support launchpad,sap hcm,sap s4 hana,sap oss,sap gui,
s 4hana,sap r3,sap b1,sap products,sap pp,sap india post,Kapil SAP Services,sap pm,sap company,sap labs,sap bi,sap hr,sap bpc,sap rise,sap cloud,sap one support launchpad,sap bo,sap apo,sap sac,sap 4 hana,erp solutions,erp afni,sap business objects,sap consulting sevices,sap pi,ariba sap,sapui5"
        keywords="sap,sap erp ,sap software,sap hana, Kapil Technologies, kcs Technologies, Ptkcs Technologies,sap business one,abap,sap system,sap mm,sap fico,sap abap,sap marketplace,sap analytics cloud,sap s 4hana,Kapil-Infor-Alliance partner,sap bw,s4 hana,sap sd,sap consultant,sap ecc,sap netweaver,sap crm,sap logon,sap program,sap modules,sap basis,sap support launchpad,sap hcm,sap s4 hana,sap oss,sap gui,
s 4hana,sap r3,sap b1,sap products,sap pp,sap india post,Kapil SAP Services,sap pm,sap company,sap labs,sap bi,sap hr,sap bpc,sap rise,sap cloud,sap one support launchpad,sap bo,sap apo,sap sac,sap 4 hana,erp solutions,erp afni,sap business objects,sap consulting sevices,sap pi,ariba sap,sapui5"
      />
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
