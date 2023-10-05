import React, { useRef, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import SAPBanner from "../../../../../assets/Banners/SAPV.png";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import {
  ERPDataSAP,
  SAPHCServices,
  SAPHMServices,
  SAPHSServicesM,
  SAPImplementation,
  SAPIndustres,
  SAPRPartner,
  SAPZigZag,
} from "../../../../../mock/ERP";
import Page from "../../../../../components/Page";
import SAPI1 from "../../../../../assets/SAP/SAPIndutries/1.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { INFOR } from "./Infor";
import { FaArrowRight, FaStar } from "react-icons/fa6";

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
  height: Hover ? 360 : 350,
  width: Hover ? 329 : 319,
  [theme.breakpoints.down("md")]: {
    height: 350,
  },
}));

export const IconBase = styled(Box)(({ theme ,visibile}) => ({
  background: "#1A69C3",
  color: "white",
  padding: "5px",
  borderRadius: "50%",
  width: 18,
  height: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  visibility:visibile
}));

export const TextContainer = styled(Stack)(({ theme }) => ({
  paddingTop: "70px",
  paddingBottom: "70px",
  paddingLeft: "80px",
  paddingRight: "80px",
  textAlign: "justify",
  textJustify: "inner-word",
}));

export const Section = styled(Stack)(({ theme, backcolor }) => ({
  width: "100%",
  height: "auto",
  // paddingTop: "30px",
  // paddingBotttom: "5px",
  // paddingRight: "0",
  // paddingLeft: "0",
  // marginBottom: "15px",
  height: "520px",

  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  background: backcolor,
}));

const Titles = ({ title }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="start"
      spacing={1}
      sx={{ p: 1 }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        {title}
      </Typography>

      <Box
        sx={{ width: 100, background: "#1A69C3", height: 5, borderRadius: 2 }}
      ></Box>
    </Stack>
  );
};

const SAPLAYOUT = ({
  icon,
  mtitle,
  desc,
  color,
  id,
  desc1,
  iconBack,
  scrollRef1,
  scrollRef2,
  scrollRef3,
  scrollRef4,
  scrollRef5,
  scrollRef6,
}) => {
  const [selid, setselId] = useState(0);

  const [hover, setHover] = useState(false);

  const handleScroll = (mid) => {
    if (mid === 1) {
      scrollRef1();
    } else if (mid === 2) {
      scrollRef2();
    } else if (mid === 3) {
      scrollRef3();
    } else if (mid === 4) {
      scrollRef4();
    } else if (mid === 5) {
      scrollRef5();
    } else if (mid === 6) {
      scrollRef6();
    }
  };

  const MouseEnter = (id) => {
    setselId(id);
    setHover(true);
  };

  const MouseLeave = () => {
    setHover(false);
  };
  return (
    <Card
      onMouseEnter={() => MouseEnter(id)}
      onMouseLeave={MouseLeave}
      sx={{
        py: "60px",
        px: "30px",
        width: 300,
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        position: "relative",
        flexDirection: "column",
        borderRadius: 2,
        border: "1px solid #d3e1ea",
        boxShadow: 2,
        background: hover ? color : "white",
        borderBottom: `2px solid ${color}`,
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #d3e1ea",
          borderRadius: "50%",
          color: color,
          fontSize: 40,
          background: hover ? "white" : iconBack,
        }}
      >
        <img src={icon} alt="SAP Services" width="70px" />
      </Box>
      <Typography
        variant="h6"
        sx={{
          textTransform: "uppercase",
          color: hover ? "white" : "black",
          fontSize: "17px",
        }}
      >
        <b>{mtitle}</b>
      </Typography>
      <Stack
        sx={{
          textAlign: "justify",
          color: hover ? "white" : "black",
          width: "100%",
          textJustify: "inter-word",
        }}
        spacing={2}
      >
        <Typography variant="body">{desc1}</Typography>
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "absolute",
          bottom: 0,
          p: 3,
          color: hover ? "white" : color,
          cursor: "pointer",
        }}
        onClick={() => {
          handleScroll(id);
        }}
      >
        <Typography>
          <b>...Read More</b>
        </Typography>
        <FaArrowRight style={{ marginTop: "3px" }} />
      </Stack>
    </Card>
  );
};

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

  // --------------------------------------------------  SAP

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const handleClick1 = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick5 = () => {
    ref5.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick6 = () => {
    ref6.current?.scrollIntoView({ behavior: "smooth" });
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
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Typography variant="h4" sx={{ py: 1 }}>
          Why Choose SAP ?
        </Typography>

        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {ERPDataSAP.map((item) => (
            <SAPLAYOUT
              id={item.id}
              mtitle={item.mtitle}
              desc={item.desc}
              icon={item.icon}
              color={item.color}
              desc1={item.desc}
              iconBack={item.iconback}
              scrollRef1={handleClick1}
              scrollRef2={handleClick2}
              scrollRef3={handleClick3}
              scrollRef4={handleClick4}
              scrollRef5={handleClick5}
              scrollRef6={handleClick6}
            />
          ))}
        </Grid>

        <Section ref={ref1} backcolor="transperant" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="SAP Resourcing" />
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                If we Partner, You Can Expect
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
                {SAPRPartner.map((item) => (
                  <Grid item xs={3.5} key={item.id}>
                    <Box
                      sx={{
                        width: 360,
                        height: 140,
                        p: 1,
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "start",
                        gap: 1.5,
                      }}
                    >
                      <IconBase>
                        <FaStar />
                      </IconBase>
                      <Stack
                        direction="column"
                        alignItems="left"
                        justifyContent="left"
                        sx={{
                          width: "90%",
                          textAlign: "justify",
                          textJustify: "inter-word",
                          position: "relative",
                          top: "-2px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            // color: "white",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body1">{item.text}</Typography>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Section>

        {/* <Section ref={ref2} backcolor="#F1F7FD" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="SAP Training" />
            <Typography variant="h6">
              Empowering your SAP Users and Consultants to leverage the best
              value from your SAP investment
            </Typography>
          </Stack>
        </Section> */}

        {/* <Section ref={ref3} backcolor="trasperant" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="SAP FIORI AND ENTERPRISE MOBILITY" />
          </Stack>
        </Section> */}

        {/* <Section ref={ref4} backcolor="#F1F7FD" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="SAP Application Management services" />
          </Stack>
        </Section> */}

        {/* SAP HANA */}
        <Section ref={ref5} backcolor="trasperant" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "inherit" }}
          >
            <Titles title="SAP S/4 HANA Services" />
            <Grid
              container
              columnGap={2}
              rowGap={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                // height:'inherit'
                // border: "1px solid blue",
              }}
            >
              <Grid
                item
                xs={3.8}
                sx={{
                  // border: "1px solid blue",
                  height: 500,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "left",
                  flexDirection: "column",
                  p: 1,
                  gap: 1,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase>
                    <FaStar />
                  </IconBase>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: "-5 px" }}
                  >
                    Consulting Services
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", textJustify: "inner-word" }}
                  >
                    Our SAP S/4HANA Consultants are here to help you on how to
                    accelerate and simplify your digital transformation.
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", textJustify: "inner-word" }}
                  >
                    Our S/4HANA consultants team ensures the following
                    revolutionary results for your business;
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Stack direction="column" spacing={2}>
                    {SAPHCServices.map((item) => (
                      <Stack
                        direction="row"
                        alignItems="start"
                        justifyContent="start"
                        spacing={1}
                        key={item.id}
                      >
                        <FaArrowRight
                          style={{ color: "#1A69C3", marginTop: "6px" }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            // textAlign: "justify",
                            // textJustify: "inner-word",
                            width: "90%",
                            pt: "2px",
                          }}
                        >
                          {item.list}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={3.8}
                sx={{
                  // border: "1px solid blue",
                  height: 500,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "left",
                  flexDirection: "column",
                  p: 1,
                  gap: 1,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase>
                    <FaStar />
                  </IconBase>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Support Services
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", textJustify: "inner-word" }}
                  >
                    Kapil Technologies provides S/4HANA post-implementation
                    support, including patch upgrades and landscape
                    optimization.
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", textJustify: "inner-word" }}
                  >
                    We have dedicated Support team for all the following
                    modules:
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Stack direction="column" spacing={2}>
                    {SAPHSServicesM.map((item) => (
                      <Stack
                        direction="row"
                        alignItems="start"
                        justifyContent="start"
                        spacing={1}
                        key={item.id}
                      >
                        <FaArrowRight
                          style={{ color: "#1A69C3", marginTop: "6px" }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            // textAlign: "justify",
                            // textJustify: "inner-word",
                            width: "100%",
                            pt: "2px",
                          }}
                        >
                          {item.list}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={3.8}
                sx={{
                  // border: "1px solid blue",
                  height: 500,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "left",
                  flexDirection: "column",
                  p: 1,
                  gap: 1,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase>
                    <FaStar />
                  </IconBase>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Managed Services
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconBase visibile="hidden">
                    <FaStar />
                  </IconBase>
                  <Stack direction="column" spacing={1}>
                    {SAPHMServices.map((item) => (
                      <Stack
                        direction="row"
                        alignItems="Start"
                        spacing={0.5}
                        key={item.id}
                      >
                        <FaArrowRight
                          style={{ color: "#1A69C3", marginTop: "9px" }}
                        />

                        <Stack
                          direction="column"
                          alignItems="left"
                          width="100%"
                          sx={{
                            textAlign: "justify",
                            textJustify: "inner-word",
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body1">{item.text}</Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Section>

        <Section ref={ref6} backcolor="#F1F7FD" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ px: 10, height: "inherit" }}
          >
            <Titles title=" SAP Integration Services" />

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
              {SAPImplementation.map((item) => (
                <Grid
                  key={item.id}
                  item
                  xs={5.5}
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: 1,
                  }}
                >
                  <IconBase>
                    <FaStar />
                  </IconBase>
                  <Stack
                    direction="column"
                    alignItems="left"
                    justifyContent="left"
                    sx={{
                      width: "90%",
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.text}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Section>
      </Stack>
    </div>
  );
}

export default SAP;
