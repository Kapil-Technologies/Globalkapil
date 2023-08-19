import React, { Fragment, useRef } from "react";
import { CTA, NavDiv } from "../Home";
import Page from "../../components/Page";
import { Link, useParams } from "react-router-dom";
import SAPBanner from '../../assets/Banners/sap.png'
import OracleBanner from "../../assets/Banners/oracle.png";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Card, Grid, Stack, Tab, Typography } from "@mui/material";
import {
  CustomizationBenefits,
  ERPDataInfor,
  ERPDataSAP,
  InforTProducts,
  InforTrainigBenefits,
  InforTrainingTabs,
  InforTrainingTabs1,
  InforUpgradesServices,
  InforUpgradesTypes,
  MigrationBenefits,
  TraiingList,
} from "../../mock/ERP";
import { FaArrowRight, FaAsterisk, FaListOl } from "react-icons/fa6";
import { TbSettingsUp } from "react-icons/tb";
import { TabContext, TabList, TabPanel } from "@mui/lab";

// ---------------------------------------------------------------------- Styled Components

export const ERPBanner = styled("div")(({ theme }) => ({
  width: "100%",
  height: "350px",
  background: "#d3e1ea",
}));

export const BannerImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  width:"100%",
  height: "350px",
  
}));

export const Section = styled("section")(({ theme }) => ({
  width: "90%",
  height: "auto",
  padding: "10px",
  marginBottom: "15px",
}));

export const IconBase = styled(Box)(({ theme, image }) => ({
  color: "white",
  padding: "10px",
  fontSize: "20px",
  // border: '1px solid green',
  borderRadius: "50%",
  //  width: 50,
  // height: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#CB333B",
}));

export const RightArraow = styled(FaArrowRight)(({ theme, image }) => ({
  fontSize: "20px",
  color: "#CB333B",
}));

// ---------------------------------------------------------------------- Layout Components

const InforLayout = ({
  icon,
  title,
  desc,
  id,
  scrollRef1,
  scrollRef2,
  scrollRef3,
  scrollRef4,
  scrollRef5,
}) => {


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
    }
  }
 

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Card
        sx={{
          border: "1px solid #d3e1ea",
          height: "auto",
          borderRadius: 3,
          width: "80%",
          p: 1,
        }}
      >
        <Stack direction="column" sx={{ height: "inherit" }}>
          <Stack
            direction="column"
            alignItems="start"
            spacing={1}
            sx={{
              width: "100%",
              height: "inherit",
              p: 1,
              textAlign: "left",
              flexWrap: "wrap",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                height: 40,
                width: 40,
                background: "#0098DC",
                color: "white",
                borderRadius: "50%",
                p: 1,
                textAlign: "left",
                fontSize: "30px",
               
              }}
            >
              {icon}
            </Stack>
            <Typography variant="h6"  sx={{ color: "#0098DC" }}>
              <b>{title}</b>
            </Typography>
            <Typography variant="body" gutterBottom sx={{ paddingRight: 1 }}>
              {desc}
            </Typography>
          </Stack>
          {/* <Stack
            direction="row"
            alignItems="right"
            justifyContent="right"
            sx={{ cursor: "pointer", textAlign: "right", p: 1 }}
            onClick={() => {
              handleScroll(id);
            }}
          >
            <Typography variant="body" gutterBottom>
              <b>... Read More</b>
            </Typography>
          </Stack> */}
        </Stack>
      </Card>
    </Stack>
  );
};

const SAPLayout = ({ icon, desc, title }) => {
  return (
    <Stack direction="column" alignItems="left">
      <Grid container columnGap={2} rowGap={2}>
        <Card
          sx={{
            width: 350,
            height: 410,
            border: "1px solid #d3e1ea",
            display: "flex",
            alignItems: "left",
            justifyContent: "start",
            flexDirection: "column",
            textAlign: "left",
            gap: 1,
            p: 1,
            borderRadius: 3,
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 15,
              height: 15,
              background: "#CB333B",

              color: "white",
              p: 3,
              borderRadius: "50%",
            }}
          >
            {icon}
          </Stack>
          <Stack
            direction="column"
            alignItems="start"
            justifyContent="center"
            sx={{ textAlign: "left" }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#162438" }}>
              <b>{title}</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {desc}
            </Typography>
          </Stack>
          {/* <Box sx={{ textAlign: "right", cursor: "pointer", p: 1 }}>
            <Typography variant="body2">
              <b>... Read More</b>
            </Typography>
          </Box> */}
        </Card>
      </Grid>
    </Stack>
  );
};

// ---------------------------------------------------------------------- Main Components

function ERPLayout() {
  const { subpage } = useParams();

  const CapitalizedHeading = subpage.charAt(0).toUpperCase() + subpage.slice(1);

  console.log(CapitalizedHeading);

  // ----------------------------------------------------  Scrolling Behaviour

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

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

  // -------------------------------------------------------------------------

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavDiv>.</NavDiv>
      <Page name={CapitalizedHeading} content="" />
      <ERPBanner>
        {subpage === "SAP" ? (
          <BannerImage src={SAPBanner} alt="Kapil SAP Consulting Services"  />
        ) : subpage === "infor" ? (
          "Infor"
        ) : subpage === "Oracle" ? (
          <BannerImage src={OracleBanner} alt="Kapil SAP Consulting Services" />
        ) : null}
      </ERPBanner>
      <Stack
        direction="column"
        alignItems="left"
        justifyContent="center"
        sx={{ textAlign: "center", background: "#F1F7FD" }}
      >
        <Typography variant="h5" sx={{ p: 2, marginBottom: -4 }}>
          <b>   Featured Services</b>
        </Typography>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
          }}
          rowGap={2}
          columnGap={2}
        >
          {subpage === "infor" ? (
            ERPDataInfor.map((item) => (
              <SAPLayout
                icon={item.icon}
                title={item.mtitle}
                desc={item.desc}
                id={item.id}
                scrollRef1={handleClick1}
                scrollRef2={handleClick2}
                scrollRef3={handleClick3}
                scrollRef4={handleClick4}
                scrollRef5={handleClick5}
              />
            ))
          ) : subpage === "SAP" ? (
            ERPDataSAP.map((item) => (
              <InforLayout
                icon={item.icon}
                title={item.mtitle}
                desc={item.desc}
              />
            ))
          ) : subpage === "oracle" ? (
            <InforLayout />
          ) : null}
        </Grid>
        {subpage === "infor" ? (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ p: 1, width: "98%" }}
          >
            <Section ref={ref1}>
              <Stack direction="column" alignItems="center">
                <Typography variant="h4" gutterBottom sx={{ color: "#CB333B" }}>
                  <b>Infor Upgrade Services</b>
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    p: 0.1,
                    height: "3px",
                    background: "#CB333B",
                    borderRadius: "5px",
                    color: "#CB333B",
                  }}
                ></Box>
              </Stack>
              <Stack
                direction="column"
                alignItems="left"
                spacing={2}
                sx={{ p: 1, textAlign: "left", marginTop: "5px  " }}
              >
                <Typography variant="body" gutterBottom>
                  KCS Infor upgrade services aids business to gain the
                  efficiency and flexibility by keeping employees focused on
                  customers and core business. We help in mitigate risks and
                  save on costs correlated with the upgrade.
                </Typography>
                <Typography variant="body" gutterBottom>
                  We can help in upgrading Infor applications, freeing up
                  valuable IT resources in process so that employees can focus
                  on organization’s core business.
                </Typography>
              </Stack>
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
                <Grid item xs={3.5} sx={{ textAlign: "left" }}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1 }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Every Upgrade is Unique</b>
                      </Typography>
                      <Typography variant="body">
                        We understand the complexities that IT team faces in
                        keeping application up to date and supported. We aids in
                        making the procedure smoother as we are aware that each
                        client and each upgrade is unique.
                      </Typography>
                      <br />
                      <Typography variant="body">
                        KCS upgrade assessment service is offered as a
                        stand-alone service to make sure a smooth and timely
                        upgrade.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={3.5} sx={{}}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1 }}
                  >
                    <IconBase>
                      <FaListOl />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={1}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Infor Upgrade Types</b>
                      </Typography>

                      {InforUpgradesTypes.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="start"
                          spacing={2}
                          sx={{ textAlign: "left" }}
                          key={item.id}
                        >
                          <RightArraow />
                          <Typography variant="body" gutterBottom>
                            {item.desc}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={4} sx={{}}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1 }}
                  >
                    <IconBase>
                      <TbSettingsUp />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={1}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Infor Upgrade Services</b>
                      </Typography>

                      {InforUpgradesServices.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="start"
                          spacing={2}
                          sx={{ textAlign: "left" }}
                          key={item.id}
                        >
                          <RightArraow />
                          <Typography variant="body" gutterBottom>
                            {item.li}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Section>
            <Section ref={ref2}>
              <Stack direction="column" alignItems="center">
                <Typography variant="h4" gutterBottom sx={{ color: "#CB333B" }}>
                  <b>Infor Migration Services</b>
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    p: 0.1,
                    height: "3px",
                    background: "#CB333B",
                    borderRadius: "5px",
                    color: "#CB333B",
                  }}
                ></Box>
              </Stack>
              <Stack
                direction="column"
                alignItems="left"
                spacing={2}
                sx={{ p: 1, textAlign: "left", marginTop: "5px  " }}
              >
                <Typography variant="body" gutterBottom>
                  For successful data migration accuracy is vital, whether it is
                  moving to the cloud or an on-premises solution. Most of the
                  companies won't give much preference to the data migration. As
                  a result, they don’t have a systematic methodology for the
                  process and often lacks experience in successful data
                  migration projects.
                </Typography>
                <Typography variant="body" gutterBottom>
                  Well managed data migration team not only ensure on time
                  delivery, but also offers better data management for future.
                </Typography>
              </Stack>
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
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Minimizing Data Migrations Risks</b>
                      </Typography>
                      <Typography variant="body">
                        We understand the complexities that IT team faces in
                        keeping application up to date and supported. We aids in
                        making the procedure smoother as we are aware that each
                        client and each upgrade is unique.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>SUCCESS FROM THE START</b>
                      </Typography>
                      <Typography variant="body">
                        The common challenges of in-house migrations are go-live
                        delays and production problems due to inefficient data
                        migration processes. Instead of gambling on the outcome
                        of a critical software implementation, use KCS Infor
                        Data Migration Services to grow the success of
                        implementation, decrease the costs resulting from errors
                        and develop a strong foundation for future migration.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>LONG TERM SUCCESS</b>
                      </Typography>
                      <Typography variant="body">
                        Successful software implementation is important for any
                        company’s long-term growth. With the assistance of an
                        experts who follows a structure approach to execute data
                        migration, it can be ensured of higher standard of data
                        management and data quality, prominent to success due to
                        enhanced efficiencies and better results.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1 }}
                  >
                    <IconBase>
                      <FaListOl />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={1}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Benefits</b>
                      </Typography>

                      {MigrationBenefits.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="start"
                          spacing={2}
                          sx={{ textAlign: "left" }}
                          key={item.id}
                        >
                          <RightArraow />
                          <Typography variant="body" gutterBottom>
                            {item.li}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Section>
            {/* ------------------- Customization------------------------------------------------------ */}
            <Section ref={ref3}>
              <Stack
                direction="column"
                alignItems="center"
                sx={{ marginBottom: "10px" }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: "#CB333B" }}>
                  <b>Infor Customization Services</b>
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    p: 0.1,
                    height: "3px",
                    background: "#CB333B",
                    borderRadius: "5px",
                    color: "#CB333B",
                  }}
                ></Box>
              </Stack>

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
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>How can KCS Help ?</b>
                      </Typography>
                      <Typography variant="body">
                        At KCS we have a large pool of Infor Technical and
                        Functional consultants who have vast in working with
                        Infor Products
                      </Typography>
                      <Typography variant="body">
                        By Taking advantages of Our Expertise having with Infor
                        Development methodology as well as the internal workings
                        of the many products with in the Infor Suite.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Our Customization Methodology</b>
                      </Typography>
                      <Typography variant="body">
                        Based on the client requirements, we develop customizze
                        processes using a systematic software methodology that
                        ensures every project is delivered at highest possible
                        standard.
                      </Typography>

                      <Typography variant="body">
                        With our expertise in Infor Customization and
                        Development, we guarantee that each project is
                        successfully delivered and results in client
                        satisfaction.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={1}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>What does Customization Invovles ?</b>
                      </Typography>
                      <Typography variant="body" gutterBottom>
                        Developing a new module or customizing existing
                        functionality goes beyond creating code. It needs a
                        proper planing to ensure that the designed code meets
                        the customer's requirements.
                      </Typography>

                      <Typography variant="body">
                        KCS Infor experts has in depth knowledge of techniques,
                        tools and processes necessary for successful
                        implementations
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1 }}
                  >
                    <IconBase>
                      <FaListOl />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={1}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Benefits</b>
                      </Typography>

                      {CustomizationBenefits.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="start"
                          spacing={2}
                          sx={{ textAlign: "left" }}
                          key={item.id}
                        >
                          <RightArraow />
                          <Typography variant="body" gutterBottom>
                            {item.li}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Section>
            {/* ------------------- Management Consulting ------------------------------------------------------ */}

            <Section ref={ref4}>
              <Stack
                direction="column"
                alignItems="center"
                sx={{ marginBottom: "10px" }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: "#CB333B" }}>
                  <b>Infor Management Consulting</b>
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    p: 0.2,
                    height: "3px",
                    background: "#CB333B",
                    borderRadius: "5px",
                    color: "#CB333B",
                  }}
                ></Box>
              </Stack>
              <Grid
                container
                columnGap={2}
                rowGap={2}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Integrated Demand & Supply Planning</b>
                      </Typography>
                      <Typography variant="body">
                        An integrated demand and supply planning practice is
                        only meaningful when inputs and outputs leads to improve
                        decision-making. Our pragmatic approach directs on
                        supply optimization and demand-driven plans in enhance
                        margins, agility, forecast accuracy, lower inventory and
                        business visibility.
                      </Typography>

                      <Typography variant="body">
                        KCS help in end-to-end perspective to plan more
                        efficiently, operate more efficiently and meet client
                        requirements.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Logicstics & Distribution</b>
                      </Typography>
                      <Typography variant="body">
                        The major challenges of Logistics & Distribution are an
                        evolving global network and changing customer demands.
                        Our experienced professionals provide quick results that
                        optimize service through rapid cost reduction,
                        transformation, operational excellence and network
                        strategy design.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Services Delivery Management</b>
                      </Typography>
                      <Typography variant="body">
                        From omnichannel integration to delivery remedy, clients
                        touch points are changing. We work to increase order
                        visibility, returns, manage customer delivery and
                        improve the customer experience.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={5.5}>
                  <Stack
                    direction="row"
                    alignItems="start"
                    spacing={1}
                    sx={{ p: 1, textAlign: "left" }}
                  >
                    <IconBase>
                      <FaAsterisk />
                    </IconBase>
                    <Stack
                      direction="column"
                      alignItems="start"
                      spacing={0.5}
                      sx={{ p: 1 }}
                    >
                      <Typography
                        variant="body"
                        sx={{ color: "#CB333B", textTransform: "uppercase" }}
                      >
                        <b>Manufacturing & Operations</b>
                      </Typography>
                      <Typography variant="body">
                        From job site to shop floor, we take a lean-focused
                        approach in improving quality, productivity, and
                        efficiency in the field. The ability to effectively and
                        quickly respond to client’s requirements by eliminating
                        waste is utmost to our techniques and tactics.
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Section>

            <Section ref={ref5}>
              <Stack direction="column" alignItems="center">
                <Typography variant="h4" gutterBottom sx={{ color: "#CB333B" }}>
                  <b>Infor Training Services</b>
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    p: 0.2,
                    height: "3px",
                    background: "#CB333B",
                    borderRadius: "5px",
                    color: "#CB333B",
                  }}
                ></Box>
              </Stack>
              <Stack
                direction="column"
                alignItems="left"
                spacing={2}
                sx={{ p: 1, textAlign: "left", marginTop: "5px  " }}
              >
                <Typography variant="body" gutterBottom>
                  Training is important component required to utilize the full
                  value of investment and attain unparalleled advantages for
                  business. KCS Training is a critical component needed to
                  utilize the full value of your investment and achieve
                  unparalleled benefits for your business.
                </Typography>
                <Typography variant="body" gutterBottom>
                  KCS provide Learning Solutions for each stage of product
                  lifecycle including:
                </Typography>
                {TraiingList.map((item) => (
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="start"
                    spacing={2}
                    sx={{ textAlign: "left" }}
                    key={item.id}
                  >
                    <RightArraow />
                    <Typography variant="body" gutterBottom>
                      {item.li}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
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
                      indicatorColor="#CB333B"
                      textColor="#CB333B"
                      sx={{
                        "& button": {
                          // borderRadius: 2,
                          fontSize: "18px",
                          margin: "5px",
                        },
                        "& button:hover": {
                          background: "#CB333B",
                          color: "white",
                        },
                        ".Mui-selected": {
                          color: "#CB333B",
                          borderBottom: "3px solid #CB333B",
                          // borderRadius: 2,
                          fontSize: "18px",
                        },
                      }}
                    >
                      {InforTrainingTabs1.map((item) => (
                        <Tab
                          key={item.id}
                          label={item.tabname}
                          value={item.tabvalue}
                          sx={{
                            textTransform: "capitalize",
                          }}
                        />
                      ))}
                    </TabList>
                  </Card>
                  <TabPanel value="1">
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
                      {InforTProducts.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          sx={{ width: 500 }}
                        >
                          <RightArraow />
                          <Typography
                            variant="body1"
                            sx={{ width: "auto", p: 1 }}
                          >
                            {item.pname}
                          </Typography>
                        </Stack>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel value="2">
                    <Stack
                      direction="column"
                      alignItems="left"
                      justifyContent="left"
                    >
                      <RightArraow />
                      <Typography variant="h6" gutterBottom>
                        <b>Title</b>
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Title
                      </Typography>
                    </Stack>
                  </TabPanel>
                  <TabPanel value="3">1</TabPanel>
                  <TabPanel value="4">
                    <Stack
                      direction="column"
                      alignItems="left"
                      justifyContent="left"
                    >
                      {InforTrainigBenefits.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="left"
                          spacing={1}
                          key={item.id}
                        >
                          <RightArraow />
                          <Typography variant="subtitle1">
                            {item.title}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </TabPanel>
                </Card>
              </TabContext>
            </Section>
          </Stack>
        ) : null}
        <CTA
          text="Want To discuss about a Project"
          buttonText="Connect with us"
        />
      </Stack>
    </div>
  );
}

export default ERPLayout;
