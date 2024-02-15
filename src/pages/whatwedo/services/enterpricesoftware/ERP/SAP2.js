import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Page from "../../../../../components/Page";
import { FiBox } from "react-icons/fi";
import SapBenifits from "../../../../../sections/SapBenifits";
import SAPImg1 from "../../../../../assets/New/Pic.png";

// ---------------------------------------------------------  Mockdata

const sapdata = [
  {
    id: 1,
    title: "SAP BTP",
    subtitle:
      "SAP BTP integrates database management, analytics, app development, and more, empowering businesses to innovate, integrate, and scale in the digital era.",
  },
  {
    id: 2,
    title: "SAP Advisory ",
    subtitle:
      "SAP Advisory offers expert guidance in ERP, business intelligence, cloud services, digital transformation, and related areas for comprehensive solutions.",
  },
  {
    id: 3,
    title: "SAP Consulting",
    subtitle:
      "SAP Consulting services provided by consultants or consulting firms to assist organizations in planning, implementing, and optimizing SAP  solutions.",
  },
  {
    id: 4,
    title: "SAP CPI",
    subtitle:
      "SAP CPI service is an integrated platform facilitating seamless connections among diverse applications, systems, and services within an organization's landscape.",
  },
];

// ---------------------------------------------------------  Styled Components

export const BannerImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  position: "relative",
  background: "#4983F8",
  display: "flex",
  alignItems: "end",
  color: "white",
  justifyContent: "space-between",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
    height: "400px",
  },
}));

export const IconBox = styled(FiBox)(({ theme }) => ({
  fontWeight: "20px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "500px",
  height: "500px",

  [theme.breakpoints.between("xs", "md")]: {
    width: "400px",
    height: "400px",
  },
}));

function SAP2() {
  // -------------------------------------------  Responsive

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "md")
  );

  const Desktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const TV = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));

  const GTV = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // ------------------------------------------- Responsive
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Page name="SAP" />
      <BannerImage>
        <Typography
          variant="h1"
          sx={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "left",
            fontSize: "150px",
          }}
        >
          SAP
        </Typography>

        <Typography
          variant="body1"
          sx={{ padding: "10px", textAlign: "left", width: "30%" }}
        >
          Unlock the potential of your business with tailored SAP consulting
          services by KCS Technologies, delivering expertise to drive growth and
          efficiency.
        </Typography>
      </BannerImage>
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "96%", height: "auto", p: 2 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ width: "45%", height: "100%" }}
        >
          {/* <img src={SAPImg1} alt="Kapil Technologies" /> */}
          <Image src={SAPImg1} alt="Kapil Technologies" />
        </Stack>

        <Stack
          direction="column"
          alignItems="left"
          justifyContent="center"
          spacing={2}
          sx={{ width: Mobile ? "100%" : "40%", height: "inherit" }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Tailored SAP Consulting Services for Improved Efficiency
          </Typography>
          <Typography variant="body1">
            At KCS Technologies, we provide SAP consulting services that are
            designed to improve efficiency and streamline operations. Our team
            of experts will work closely with your manufacturing business to
            tailor solutions that meet your specific needs. With our expertise
            and support, you can optimize your SAP system and achieve maximum
            efficiency.
          </Typography>
          <Stack
            direction={{ sm: "column", sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
            spacing={3}
          >
            <Stack
              direction="column"
              alignItems="left"
              justifyContent="left"
              spacing={1}
            >
              <FiBox size="20px" />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Tailored Support
              </Typography>
              <Typography variant="body1">
                Our SAP consulting services offer tailored support to ensure
                your system operates at its best.
              </Typography>
            </Stack>
            <Stack
              direction="column"
              alignItems="left"
              justifyContent="left"
              spacing={1}
            >
              <FiBox size="20px" />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Improved ROI
              </Typography>
              <Typography variant="body1">
                By leveraging our SAP consulting services, you can achieve
                improved ROI and business outcomes.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <SapBenifits />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 2, width: "90%" }}
        spacing={1}
      >
        <Typography
          variant={Mobile ? "h6" : "h4"}
          sx={{
            fontWeight: "bold",
          }}
        >
          Transform Your Business with SAP Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: Mobile ? "left" : "center",

            width: Mobile ? "90%" : "70%",
          }}
        >
          At KCS Technologies, we provide an extensive suite of SAP services,
          encompassing SAP ERP, SAP S/4HANA, and industry-specific solutions.
          Our expert team collaborates closely with you to implement and
          optimize these robust tools, enhancing business processes, boosting
          productivity, and fostering growth.
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          alignItems="start"
          justifyContent="space-between"
          sx={{ width: "95%", p: 2 }}
          component={Grid}
          columnGap={2}
          rowGap={3}
          container
        >
          {sapdata.map((item) => (
            <Stack
              key={item.id}
              direction="column"
              alignItems={{ sm: "left", md: "center" }}
              justifyContent={{ sm: "left", md: "center" }}
              spacing={1}
              component={Grid}
              item
              xs={12}
              md={2.8}
            >
              <FiBox size="25px" />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: Mobile ? "left" : "center",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: Mobile ? "left" : "center" }}
              >
                {item.subtitle}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SAP2;
