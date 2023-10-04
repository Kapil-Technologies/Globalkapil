import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import SAPBanner from "../../../../../assets/Banners/SAPV.png";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ERPDataSAP, SAPIndustres, SAPZigZag } from "../../../../../mock/ERP";
import Page from "../../../../../components/Page";
import SAPI1 from "../../../../../assets/SAP/SAPIndutries/1.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

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
    height: "400px",
    width: "100%",
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

export const IndustryImage = styled("img")(({ theme, Hover }) => ({
  height:Hover ? 360: 350,
  width: Hover ? 329 : 319,
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
        spacing={1}
        sx={{ background: "#012c54", marginTop: "-4px",py:1 }}
      >
        <Typography
          variant="h4"
          color="white"
          sx={{ fontWeight: "bold", p: 2 }}
        >
          Why to Choose SAP ?
        </Typography>

        <Grid
          container
          columnGap={4}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            width: "100%",
            // border: "1px solid white",
            p: 1,
          }}
        >
          {ERPDataSAP.map((item) => (
            <Grid
              item
              xs={3.3}
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                flexDirection: "column",
                position: "relative",
                height: 180,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "orange", textTransform: "uppercase" }}
              >
                {item.mtitle}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                {item.desc}
              </Typography>
              <Stack
                component={Link}
                to="/"
                sx={{
                  color: hover && item.id === hoverid ? "orange" : "white",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  textDecoration: "none",
                  fontWeight: hover && item.id === hoverid ? "bold" : "normal",
                }}
                spacing={1}
                direction="row"
                alignItems="center"
                onMouseEnter={() => handleMouseEnter(item.id)}
              >
                <Typography variant="body1" sx={{}}>
                  Read More
                </Typography>
                {hover && item.id === hoverid ? <FiArrowRight /> : null}
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
              <Grid
                item
                xs={4}
                sx={{ height: 400, width: "auto", position: "" }}
              >
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
            sx={{ height: 350, position: "relative",overflow:"hidden" }}
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
                color: hover && item.id === hoverid ? "Orange" : "White",
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
