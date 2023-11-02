import React, { Fragment, useRef, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import SAPBanner from "../../../../../assets/Banners/SAPV.jpg";
import { Box, Card, Grid, Stack, Tab, Typography } from "@mui/material";
import {
  ERPDataSAP,
  Recruiting,
  SAPAMS1,
  SAPAMSData2,
  SAPFiori,
  SAPFiori1,
  SAPFiori2,
  SAPHCServices,
  SAPHMServices,
  SAPHSServicesM,
  SAPImplementation,
  SAPRPartner,
  SAPSupportList,
  SAPSupports,
  SAPTabs,
  SAPTraining,
  SAPTrainingList,
  SAPZigZag,
  whyUs,
  whyUsSAP,
} from "../../../../../mock/ERP";
import Page from "../../../../../components/Page";
import SAPI1 from "../../../../../assets/SAP/SAPIndutries/1.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { INFOR } from "./Infor";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SAPlogo from "../../../../../assets/Partners/saplogo.png";
import { FaArrowAltCircleRight, FaUsers } from "react-icons/fa";
import SAPIntegration from "../../../../../components/Sliders/SAPIntegration";
import SAPAMS from "../../../../../components/Sliders/SAPAMS";

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

export const IconBase = styled(Box)(({ theme, visibile }) => ({
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
  visibility: visibile,
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
  // paddingBotttom: "30px",
  // paddingRight: "0",
  // paddingLeft: "0",
  // marginBottom: "15px",

  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  background: backcolor,
}));

const Titles = ({ title }) => {
  return (
    <Stack direction="column" alignItems="center">
      <Stack direction="row" alignItems="center" justifyContent="center">
        <img
          src={SAPlogo}
          alt="sap,sap erp ,sap software,sap hana, Kapil Technologies, kcs Technologies, Ptkcs Technologies,sap business one,abap,sap system,sap mm,sap fico,sap abap,sap marketplace,sap analytics cloud,sap s 4hana,Kapil-Infor-Alliance partner,sap bw,s4 hana,sap sd,sap consultant,sap ecc,sap netweaver,sap crm,sap logon,sap program,sap modules,sap basis,sap support launchpad,sap hcm,sap s4 hana,sap oss,sap gui,
s 4hana,sap r3,sap b1,sap products,sap pp,sap india post,Kapil SAP Services,sap pm,sap company,sap labs,sap bi,sap hr,sap bpc,sap rise,sap cloud,sap one support launchpad,sap bo,sap apo,sap sac,sap 4 hana,erp solutions,erp afni,sap business objects,sap consulting sevices,sap pi,ariba sap,sapui5"
          width="auto"
          height="60px"
          style={{ marginTop: "10px" }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          {title}
        </Typography>
      </Stack>

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
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  let Country;

  const Hostname = window.location.hostname;
  const condition =
    Hostname === "kapiltech.com" || "www.kapiltech.com"
      ? Country === "India"
      : Hostname === "kcs-tech.com"
      ? (Country = "Wymoing")
      : Hostname === "ptkcs.com"
      ? (Country = "Indonesia")
      : (Country = "India");

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

      {/* <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ py: 2 }}
      >
        <Titles title="Services" />
        <Typography variant="body1" sx={{ width: "80%" }}>
          Transform your business, enhance customer satisfaction, and boost
          efficiency with Kapil Technologies. Our dedicated team of SAP experts
          is fully committed to helping you achieve your business goals by
          providing top-notch services.
        </Typography>
      </Stack> */}

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
        spacing={2}
      >
        {/* <Typography variant="h4" sx={{ py: 1 }}>
          Why Choose SAP ?
        </Typography> */}

        {/* <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
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
        </Grid> */}

        <Section backcolor="#F1F7FD">
          <Stack direction="column" alignItems="center">
            <Titles title="Recruiting and Staffing" />
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            spacing={1}
            sx={{ marginTop: "15px" }}
          >
            <Typography variant="body1">
              Kapil Technologies Recruiting & Staffing services is one of the
              leading SAP related services in India
            </Typography>

            <Card sx={{ width: "80%", p: 3 }}>
              <Stack direction="row" alignItems="start" spacing={1}>
                <IconBase>
                  <FaUsers />
                </IconBase>
                <Stack
                  direction="column"
                  alignItems="left"
                  sx={{ width: "80%" }}
                  spacing={1}
                >
                  <Typography variant="h6" sx={{ color: "#1A69C3" }}>
                    OUR SERVICES INCLUDE
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={1}>
                    {Recruiting.map((item) => (
                      <Stack
                        direction="row"
                        alignItems="start"
                        key={item.id}
                        spacing={1}
                      >
                        <Box
                          sx={{
                            color: "#1A69C3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                        </Box>
                        <Typography>{item.desc1}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Card>

            <Stack direction="column" alignItems="center">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                {/* <img
                src={InforBanner1}
                alt="Infor Services"
                width="60px"
                height="60px"
              /> */}
                <Typography
                  variant="h4"
                  sx={{ color: "black", textTransform: "uppercase" }}
                >
                  <b>WHY CHOOSE US</b>
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: 80,
                  p: 0.1,
                  height: "3px",
                  background: "#1A69C3",
                  borderRadius: "5px",
                  color: "#1A69C3",
                  marginBottom: "15px",
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
              }}
            >
              {whyUsSAP.map((item) => (
                <Grid
                  item
                  xs={5}
                  component={Card}
                  sx={{ p: 1, height: 150, marginBottom: "10px" }}
                  key={item.id}
                >
                  <Stack direction="row" alignItems="start" spacing={1}>
                    <IconBase>{item.icon}</IconBase>
                    <Stack direction="column" alignItems="left" width="70%">
                      <Typography variant="body1" sx={{ color: "#1A69C3" }}>
                        {item.desc1}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", textJustify: "inner-word" }}
                      >
                        {item.desc2}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Section>

        <Section ref={ref1} backcolor="transperant" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="Resourcing" />
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ width: "100%" }}
            >
              <Stack direction="column" alignItems="left" sx={{ width: "85%" }}>
                <TabContext value={value}>
                  <Card sx={{ border: "1px solid #d3e1ea", marginTop: "10px" }}>
                    <Card
                      sx={{
                        borderBottom: "1px solid #d3e1ea",
                        display: "flex",
                        alignItems: "left",
                        justifyContent: "left",
                      }}
                    >
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        indicatorColor="white"
                        textColor="#1A69C3"
                        sx={{
                          "& button": {
                            // borderRadius: 2,
                            fontSize: "18px",
                            margin: "5px",
                          },
                          "& button:hover": {
                            // background: "#1A69C3",
                            borderBottom: "3px solid #1A69C3",
                            // color: "white",
                          },
                          ".Mui-selected": {
                            color: "#1A69C3",
                            // borderBottom: "3px solid #1A69C3",
                            // borderRadius: 2,
                            fontSize: "18px",
                          },
                        }}
                      >
                        {SAPTabs.map((item) => (
                          <Tab
                            key={item.id}
                            label={
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                              >
                                <Typography>{item.tabname}</Typography>
                              </Stack>
                            }
                            value={item.tabvalue}
                            sx={{
                              textTransform: "capitalize",
                            }}
                          />
                        ))}
                      </TabList>
                    </Card>

                    {SAPSupportList.map((item) => (
                      <TabPanel value={item.panel} key={item.id}>
                        <Grid
                          container
                          columnGap={1}
                          rowGap={1}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifycontent: "left",
                            p: 1,
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          {item.sublist.map((item) => (
                            <Stack
                              direction="row"
                              alignItems="start"
                              key={item.id}
                              spacing={1}
                              component={Grid}
                              item
                              xs={2.8}
                            >
                              <Box
                                sx={{
                                  color: "#1A69C3",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FaArrowAltCircleRight
                                  style={{ marginTop: "5px" }}
                                />
                              </Box>
                              <Typography>{item.li}</Typography>
                            </Stack>
                          ))}
                        </Grid>
                      </TabPanel>
                    ))}
                  </Card>
                </TabContext>
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                If we Partner, You Can Expect
              </Typography>

              <Grid
                container
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
                        height: 130,
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

        <Section ref={ref2} backcolor="#F1F7FD" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="Training" />
            <Typography variant="h6">
              Empowering your SAP Users and Consultants to leverage the best
              value from your SAP investment
            </Typography>
            <Typography variant="body1">
              We need to guarantee that users can continue with their daily
              operations without disruption.
            </Typography>
            

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Our SAP Training services include:
            </Typography>

            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap:2
              }}
            >
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    height: 130,
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
                      width: "100%",
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
                        width: "auto",
                      }}
                    >
                      SAP Implementation Training as part of your project:
                    </Typography>
                    <Stack direction="column" spacing={2}>
                      {SAPTrainingList.map((item) => (
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
                            {item.li}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                sx={{width:'83%'}}
              >
                {SAPTraining.map((item) => (
                  <Grid item xs={item.size} key={item.id}>
                    <Box
                      sx={{
                       
                        height: 130,
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
                          width: "100%",
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
                            width: "auto",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body1">{item.text}</Typography>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Stack>
            </Grid>
          </Stack>
        </Section>

        <Section ref={ref3} backcolor="trasperant" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="FIORI AND ENTERPRISE MOBILITY" />

            <Grid
              container
              columnGap={1}
              rowGap={1}
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Grid
                // key={item.id}
                item
                xs={5.8}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {SAPFiori1.map((item) => (
                  <Stack
                    direction="row"
                    alignItems="start"
                    justifyContent="start"
                    spacing={1}
                    key={item.id}
                  >
                    <IconBase>
                      <FaStar />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="left"
                      justifyContent="left"
                      sx={{
                        width: "100%",
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
                      <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", textJustify: "inter-word" }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Grid>
              <Grid
                // key={item.id}
                item
                xs={5.8}
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
                    Our Expertise in Enterprise Mobility
                  </Typography>
                  <Typography variant="body1">
                    At Kapil Technologies, we have a dedicated team of mobile
                    specialists with extensive experience in SAP mobile
                    solutions. We can assist you in defining your enterprise
                    mobile strategy, designing and developing mobile apps, and
                    implementing tailored solutions. Our expertise includes:
                  </Typography>
                  <Stack direction="column" spacing={2}>
                    {SAPFiori2.map((item) => (
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
                          {item.li}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Section>

        <Section ref={ref4} backcolor="#F1F7FD" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ height: "inherit" }}
          >
            <Titles title="Application Management services" />

            <Typography variant="body1">
              We provide comprehensive SAP system support to optimize your IT
              landscape. Our offerings include:
            </Typography>

            <Grid
              container
              columnGap={2}
              rowGap={2}
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              {SAPAMSData2.map((item) => (
                <Grid
                  key={item.id}
                  item
                  xs={item.size}
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

                    <Stack direction="column" spacing={2}>
                      {item.list.map((item) => (
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
                            {item.li}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5">Choose SAP AMS for:</Typography>

            <SAPAMS />
          </Stack>
        </Section>

        {/* SAP HANA */}
        <Section ref={ref5} backcolor="trasperant" sx={{ py: "20px" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "inherit" }}
          >
            <Titles title="S/4 HANA Services" />
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
                  height: 530,
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
                  height: 530,
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
                  height: 530,
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
            <Titles title=" Integration Services" />
            <SAPIntegration />
          </Stack>
        </Section>
      </Stack>
    </div>
  );
}

export default SAP;
