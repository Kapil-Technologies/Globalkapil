import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import SAPBanner from "../../../../../assets/Banners/SAPV.png";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ERPDataSAP, SAPIndustres, SAPZigZag } from "../../../../../mock/ERP";
import Page from "../../../../../components/Page";
import SAPI1 from "../../../../../assets/SAP/SAPIndutries/1.jpg";

// ------------------------------------------ Reusable Components

export const ERPBanner = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  // background: "#1661be",
  // padding:'10px'

  // position:'relative'
}));

export const BannerImage = styled("img")(({ theme }) => ({
  //   maxWidth: "100%",
  width: "100%",
  height: "auto",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

export const ZZImage = styled("img")(({ theme }) => ({
  //   maxWidth: "100%",
  width: "100%",
  height: 400,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "400px",
  },
}));

export const IndustryImage = styled("img")(({ theme,Hover }) => ({
  height: 350,
  width: Hover ? 325: 319,
  [theme.breakpoints.down("md")]: {
    height: 350,
  },
}));

export const TextContainer = styled(Stack)(({ theme }) => ({
  paddingTop: "70px",
  paddingBottom: "70px",
  paddingLeft: "80px",
  paddingRight: "80px",
  textAlign: "justify",
  textJustify: "inner-word",
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
        name="ERP | SAP"
        content="sap,sap erp ,sap software,sap hana, Kapil Technologies, kcs Technologies, Ptkcs Technologies,sap business one,abap,sap system,sap mm,sap fico,sap abap,sap marketplace,sap analytics cloud,sap s 4hana,Kapil-Infor-Alliance partner,sap bw,s4 hana,sap sd,sap consultant,sap ecc,sap netweaver,sap crm,sap logon,sap program,sap modules,sap basis,sap support launchpad,sap hcm,sap s4 hana,sap oss,sap gui,
s 4hana,sap r3,sap b1,sap products,sap pp,sap india post,Kapil SAP Services,sap pm,sap company,sap labs,sap bi,sap hr,sap bpc,sap rise,sap cloud,sap one support launchpad,sap bo,sap apo,sap sac,sap 4 hana,erp solutions,erp afni,sap business objects,sap consulting sevices,sap pi,ariba sap,sapui5"
        keywords="sap,sap erp ,sap software,sap hana, Kapil Technologies, kcs Technologies, Ptkcs Technologies,sap business one,abap,sap system,sap mm,sap fico,sap abap,sap marketplace,sap analytics cloud,sap s 4hana,Kapil-Infor-Alliance partner,sap bw,s4 hana,sap sd,sap consultant,sap ecc,sap netweaver,sap crm,sap logon,sap program,sap modules,sap basis,sap support launchpad,sap hcm,sap s4 hana,sap oss,sap gui,
s 4hana,sap r3,sap b1,sap products,sap pp,sap india post,Kapil SAP Services,sap pm,sap company,sap labs,sap bi,sap hr,sap bpc,sap rise,sap cloud,sap one support launchpad,sap bo,sap apo,sap sac,sap 4 hana,erp solutions,erp afni,sap business objects,sap consulting sevices,sap pi,ariba sap,sapui5"
      />
      <ERPBanner>
        <BannerImage src={SAPBanner} alt="ERP SAPnConsulting Services" />
      </ERPBanner>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ background: "#012c54", marginTop: "-4px" }}
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
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          // border: "1px solid blue",
        }}
      >
        {SAPZigZag.map((item) => {
          if (item.type === "text") {
            return (
              <Grid item xs={6} sx={{ height: 400 }} key={item.id}>
                <TextContainer
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Typography variant="body1">{item.textData1}</Typography>

                  <Typography variant="body1">{item.textData2}</Typography>
                </TextContainer>
              </Grid>
            );
          } else {
            return (
              <Grid item xs={6} sx={{ height: 400 }}>
                <ZZImage src={item.image} alt="SAP Consulting Services" />
              </Grid>
            );
          }
        })}
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* <Grid
          item
          xs={3}
          sx={{ height: 350, border: "1px solid blue",  }}
        >
          <IndustryImage src={SAPI1} />
        </Grid> */}
        {SAPIndustres.map((item) => (
          <Grid
            item
            xs={3}
            sx={{ height: 350, position: "relative" }}
            onMouseEnter={() => {
              handleMouseEnter(item.id);
            }}
            className="Image-Transition"
          >
            <IndustryImage
              src={item.indusImage}
              Hover={hover && item.id === hoverid}
              className="Image-Transition"
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              className="Image-Transition"
              sx={{
                color: hover && item.id === hoverid? "Orange" : "White",
                background:
                  hover && item.id === hoverid
                    ? "rgba(0,0,0,0.3)"
                    : "rgba(0,0,0,0.7)",
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                {item.indusName}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SAP;
