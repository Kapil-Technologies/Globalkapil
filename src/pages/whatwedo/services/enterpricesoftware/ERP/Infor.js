import React, { Fragment, useRef, useState } from "react";
import Page from "../../../../../components/Page";
import { Link, useParams } from "react-router-dom";

import InforBanner1 from "../../../../../assets/Partners/infor1.png";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Card, Grid, Stack, Tab, Typography } from "@mui/material";
import {
  CustomizationBenefits,
  ERPDataInfor,
  ERPDataSAP,
  InforCategories,
  InforLevel,
  InforTProducts,
  InforTrainigBenefits,
  InforTrainingTabs,
  InforTrainingTabs1,
  InforUpgradesServices,
  InforUpgradesTypes,
  MigrationBenefits,
  Recruiting,
  TraiingList,
  whyUs,
} from "../../../../../mock/ERP";
import {
  FaArrowRight,
  FaAsterisk,
  FaFlag,
  FaListOl,
  FaRoad,
  FaThumbsUp,
} from "react-icons/fa6";
import { TbSettingsUp } from "react-icons/tb";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import InforBanner from "../../../../../assets/Banners/BInfor1.png";
import InforCustomization from "../../../../../components/Sliders/InforCustomization";
import InforManagement from "../../../../../components/Sliders/InforManagement";
import { FiArrowRight } from "react-icons/fi";
import {
  FaArrowAltCircleRight,
  FaCogs,
  FaSortAmountDown,
  FaSortAmountDownAlt,
  FaUsers,
} from "react-icons/fa";

// ---------------------------------------------------------------------- Styled Components

export const ERPBanner = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  // position:'relative'
}));

export const BannerImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  width: "100%",
  height: "auto",
  position: "relative",
}));

export const Section = styled("section")(({ theme, backcolor }) => ({
  width: "100%",
  height: "auto",
  paddingTop: "30px",
  paddingBotttom: "5px",
  paddingRight: "0",
  paddingLeft: "0",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: backcolor,
  flexDirection: "column",
}));

export const IconBase = styled(Stack)(({ theme, image }) => ({
  color: "white",
  background: "#CB333B",
  padding: "5px",
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
}));

export const RightArraow = styled(FaArrowRight)(({ theme, image }) => ({
  fontSize: "20px",
  color: "#CB333B",
}));

const INFOR = ({
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
      scrollRef2();
    } else if (mid === 6) {
      scrollRef5();
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
        width: 250,
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        position: "relative",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 2,
        background: hover ? color : "white",
        borderBottom: `2px solid ${color}`,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid #d3e1ea",
          borderRadius: 2,
          color: color,
          fontSize: 40,
          background: hover ? "white" : iconBack,
        }}
      >
        {icon}
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
        <Typography variant="body">{desc}</Typography>
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
// -------------------------------------------------

function Infor() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [hover, setHover] = useState(false);

  const MouseEnter = () => {
    setHover(true);
  };

  const MouseLeave = () => {
    setHover(false);
  };

  const { subpage } = useParams();

  //  const CapitalizedHeading =
  //    subpage.charAt(0).toUpperCase() + subpage.slice(1);

  // console.log(CapitalizedHeading);

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
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
 const handleClick6 = () => {
   ref5.current?.scrollIntoView({ behavior: "smooth" });
 };

  return (
    <div>
      <Page name="ERP | Infor" />
      <ERPBanner>
        <BannerImage src={InforBanner} alt="Kapil Technologies Infor" />
      </ERPBanner>

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 1 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ p: 1 }}
        >
          <img
            src={InforBanner1}
            alt="Infor Services"
            width="60px"
            height="60px"
          />
          <Typography variant="h4">
            <b>Services</b>
          </Typography>
        </Stack>
        {/* <Typography variant="subtitle1" gutterBottom>
          Develop digital agility to satisfy business demands with Infor
        </Typography> */}
        <Typography variant="subtitle1" gutterBottom sx={{ width: 900 }}>
          Metamorphose your business, deliver customer satisfaction, and improve
          efficiency with Kapil Technologies the foremost trusted Infor alliance
          partner. Our Infor experts are committed to meet client’s business
          objectives by delivering best in class solutions and services.
        </Typography>
      </Stack>

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
        {ERPDataInfor.map((item) => (
          <INFOR
            id={item.id}
            mtitle={item.mtitle}
            desc={item.desc}
            icon={item.icon}
            color={item.color}
            desc1={item.desc1}
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

      {/* Upgrade Services */}

      <Section ref={ref1} backcolor="trasperant">
        <Stack direction="column" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ p: 1 }}
          >
            <img
              src={InforBanner1}
              alt="Infor Services"
              width="60px"
              height="60px"
            />
            <Typography
              variant="h4"
              sx={{
                color: "#D5000E",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Upgrade Services
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 80,
              p: 0.1,
              height: "3px",
              background: "#CB333B",
              borderRadius: "5px",
              color: "#CB333B",
              marginBottom: "15px",
            }}
          ></Box>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ width: "90%", textAlign: "justify", textJustify: "inner-word" }}
        >
          <Typography variant="body1">
            Kapil Tech Infor upgrade services aids business to gain the
            efficiency and flexibility by keeping employees focused on customers
            and core business. We help in mitigate risks and save on costs
            correlated with the upgrade.
          </Typography>
          <Typography variant="body1">
            We can help in upgrading Infor applications, freeing up valuable IT
            resources in process so that employees can focus on organization’s
            core business.
          </Typography>
        </Stack>
        <Grid
          container
          // columnGap={1}
          // rowGap={1}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={3.5}
          >
            <IconBase>
              <FaAsterisk />
            </IconBase>
            <Stack
              direction="column"
              alignItems="left"
              sx={{
                width: "80%",
              }}
              spacing={1}
            >
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                EVERY UPGRADE IS UNIQUE
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "justify",
                  textJustify: "inner-word",
                  lineHeight: "22px",
                }}
              >
                We understand the complexities that IT team faces in keeping
                application up to date and supported. We aids in making the
                procedure smoother as we are aware that each client and each
                upgrade is unique.
              </Typography>
              <Typography
                sx={{ textAlign: "justify", textJustify: "inner-word" }}
              >
                Kapil Tech upgrade assessment service is offered as a
                stand-alone service to make sure a smooth and timely upgrade.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={4}
          >
            <IconBase>
              <FaListOl />
            </IconBase>
            <Stack direction="column" alignItems="start" sx={{ width: "80%" }}>
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                UPGRADES TYPES
              </Typography>
              {InforUpgradesTypes.map((item) => (
                <Stack
                  direction="row"
                  alignItems="start"
                  key={item.id}
                  spacing={1}
                >
                  <Box
                    sx={{
                      color: "#CB333B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", textJustify: "inner-word" }}
                  >
                    {item.desc}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={3.5}
          >
            <IconBase>
              <FaCogs />
            </IconBase>
            <Stack direction="column" alignItems="left" sx={{ width: "80%" }}>
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                UPGRADE SERVICES
              </Typography>
              {InforUpgradesServices.map((item) => (
                <Stack
                  direction="row"
                  alignItems="start"
                  key={item.id}
                  spacing={1}
                >
                  <Box
                    sx={{
                      color: "#CB333B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                  </Box>
                  <Typography variant="body1">{item.li}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Section>

      {/* Migrations Services */}
      <Section ref={ref2} backcolor="#F1F7FD">
        <Stack direction="column" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ p: 1 }}
          >
            <img
              src={InforBanner1}
              alt="Infor Services"
              width="60px"
              height="60px"
            />
            <Typography
              variant="h4"
              sx={{
                color: "#D5000E",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Data Migration Services
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 80,
              p: 0.1,
              height: "3px",
              background: "#CB333B",
              borderRadius: "5px",
              color: "#CB333B",
              marginBottom: "15px",
            }}
          ></Box>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ width: "90%" }}
        >
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", textJustify: "inner-word" }}
          >
            For successful data migration accuracy is vital, whether it is
            moving to the cloud or an on-premises solution. Most of the
            companies won't give much preference to the data migration. As a
            result, they don’t have a systematic methodology for the process and
            often lacks experience in successful data migration projects.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", textJustify: "inner-word" }}
          >
            Well managed data migration team not only ensure on time delivery,
            but also offers better data management for future.
          </Typography>
        </Stack>
        <Grid
          container
          columnGap={1}
          rowGap={1}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={5}
          >
            <IconBase>
              <FaSortAmountDown />
            </IconBase>
            <Stack direction="column" alignItems="left" sx={{ width: "80%" }}>
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                MINIMIZING DATA MIGRATIONS RISKS
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: "22px",
                  textAlign: "justify",
                  textJustify: "inner-word",
                }}
              >
                Data migration come with many hidden costs and risks. Having an
                in-house team to execute it is not advisable, if they are not
                familiar with the procedure as they might use unproductive
                processes that prove costly in the long term. Using an Infor
                experts can keep costs and risks as lowest as possible.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={5}
          >
            <IconBase>
              <FaFlag />
            </IconBase>
            <Stack direction="column" alignItems="left" sx={{ width: "90%" }}>
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                SUCCESS FROM THE START
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: "22px",
                  textAlign: "justify",
                  textJustify: "inner-word",
                }}
              >
                The common challenges of in-house migrations are go-live delays
                and production problems due to inefficient data migration
                processes. Instead of gambling on the outcome of a critical
                software implementation, use Kapil Tech Infor Data Migration
                Services to grow the success of implementation, decrease the
                costs resulting from errors and develop a strong foundation for
                future migration.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={5}
          >
            <IconBase>
              <FaRoad />
            </IconBase>
            <Stack direction="column" alignItems="left" sx={{ width: "80%" }}>
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                LONG TERM SUCCESS
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: "22px",
                  textAlign: "justify",
                  textJustify: "inner-word",
                }}
              >
                Successful software implementation is important for any
                company’s long-term growth. With the assistance of an experts
                who follows a structure approach to execute data migration, it
                can be ensured of higher standard of data management and data
                quality, prominent to success due to enhanced efficiencies and
                better results.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="start"
            spacing={1}
            component={Grid}
            item
            xs={5}
          >
            <IconBase>
              <FaThumbsUp />
            </IconBase>
            <Stack direction="column" alignItems="left" sx={{ width: "80%" }}>
              <Typography variant="h6" sx={{ color: "#CB333B" }}>
                BENEFITS
              </Typography>
              {MigrationBenefits.map((item) => (
                <Stack
                  direction="row"
                  alignItems="start"
                  key={item.id}
                  spacing={1}
                >
                  <Box
                    sx={{
                      color: "#CB333B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                  </Box>
                  <Typography>{item.li}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Section>
      {/* Customizations Services */}
      <Section ref={ref3} backcolor="transperant">
        <Stack direction="column" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ p: 1 }}
          >
            <img
              src={InforBanner1}
              alt="Infor Services"
              width="60px"
              height="60px"
            />
            <Typography
              variant="h4"
              sx={{ color: "#D5000E", textTransform: "uppercase" }}
            >
              <b>Customization Services</b>
            </Typography>
          </Stack>
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

          <Typography
            variant="body"
            width="70%"
            sx={{ py: 2, textAlign: "justify", textJustify: "inner-word" }}
          >
            Every enterprise is unique and operates in its own way. As a result,
            rather than using the standard software that is commonly available
            in their industry segment, many enterprises need customized services
            that aids them to manage their operations efficiently.
          </Typography>
        </Stack>
        <InforCustomization />
      </Section>
      {/* Management Services */}
      <Section ref={ref4} backcolor="#F1F7FD">
        <Stack direction="column" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ p: 1 }}
          >
            <img
              src={InforBanner1}
              alt="Infor Services"
              width="60px"
              height="60px"
            />
            <Typography
              variant="h4"
              sx={{ color: "#D5000E", textTransform: "uppercase" }}
            >
              <b>Management Consulting </b>
            </Typography>
          </Stack>
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

          <Typography
            variant="body"
            width="70%"
            sx={{ py: 2, textAlign: "justify", textJustify: "inner-word" }}
          >
            Kapil Technologies collaborative approach in solving complex
            end-to-end problems, which helps dramatically cut down costs,
            transform organizations and improve performance. We combine world
            class consulting and industry experts to deliver a strategic
            approach to delivering bottom-line results.
          </Typography>
        </Stack>

        <InforManagement />
      </Section>
      {/* Trainig Services */}
      <Section ref={ref5} backcolor="transperant">
        <Stack direction="column" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ p: 1 }}
          >
            <img
              src={InforBanner1}
              alt="Infor Services"
              width="60px"
              height="60px"
            />
            <Typography
              variant="h4"
              sx={{ color: "#D5000E", textTransform: "uppercase" }}
            >
              <b>Training Services</b>
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 80,
              p: 0.1,
              height: "3px",
              background: "#CB333B",
              borderRadius: "5px",
              color: "#CB333B",
              marginBottom: "15px",
            }}
          ></Box>
        </Stack>
        <Stack
          direction="column"
          alignItems="left"
          sx={{ width: "80%", textAlign: "justify", textJustify: "inner-word" }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Training is important component required to utilize the full value
            of investment and attain unparalleled advantages for business. Kapil
            Technologies Training is a critical component needed to utilize the
            full value of your investment and achieve unparalleled benefits for
            your business.
          </Typography>
          <Typography variant="subtitle1">
            Kapil Technologies provide Learning Solutions for each stage of
            product lifecycle including:
          </Typography>
          {TraiingList.map((item) => (
            <Stack direction="row" alignItems="start" key={item.id} spacing={1}>
              <Box
                sx={{
                  color: "#CB333B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
              </Box>
              <Typography>{item.li}</Typography>
            </Stack>
          ))}

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
                  textColor="#CB333B"
                  sx={{
                    "& button": {
                      // borderRadius: 2,
                      fontSize: "18px",
                      margin: "5px",
                    },
                    "& button:hover": {
                      // background: "#CB333B",
                      borderBottom: "3px solid #CB333B",
                      // color: "white",
                    },
                    ".Mui-selected": {
                      color: "#CB333B",
                      // borderBottom: "3px solid #CB333B",
                      // borderRadius: 2,
                      fontSize: "18px",
                    },
                  }}
                >
                  {InforTrainingTabs1.map((item) => (
                    <Tab
                      key={item.id}
                      label={
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <IconBase>{item.tabicon}</IconBase>
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
                      alignItems="start"
                      key={item.id}
                      spacing={1}
                      component={Grid}
                      item
                      xs={2.8}
                    >
                      <Box
                        sx={{
                          color: "#CB333B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                      </Box>
                      <Typography>{item.pname}</Typography>
                    </Stack>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                {InforCategories.map((item) => (
                  <Stack
                    direction="column"
                    alignItem="center"
                    justifyContent="left"
                  >
                    <Stack direction="row" alignItems="start" spacing={1}>
                      <Box
                        sx={{
                          color: "#CB333B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                      </Box>
                      <Stack direction="column" alignItems="left">
                        <Typography>
                          <b>{item.desc1}</b>
                        </Typography>
                        <Typography>{item.desc2}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel value="3">
                {InforLevel.map((item) => (
                  <Stack
                    direction="column"
                    alignItem="center"
                    justifyContent="left"
                  >
                    <Stack direction="row" alignItems="start" spacing={1}>
                      <Box
                        sx={{
                          color: "#CB333B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaArrowAltCircleRight style={{ marginTop: "5px" }} />
                      </Box>
                      <Stack direction="column" alignItems="left">
                        <Typography>
                          <b>{item.desc1}</b>
                        </Typography>
                        <Typography>{item.desc2}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </TabPanel>
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
                      <Typography variant="subtitle1">{item.title}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </TabPanel>
            </Card>
          </TabContext>
        </Stack>
      </Section>
      {/* Recruiting Services */}
      <Section backcolor="#F1F7FD">
        <Stack direction="column" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ p: 1 }}
          >
            <img
              src={InforBanner1}
              alt="Infor Services"
              width="60px"
              height="60px"
            />
            <Typography
              variant="h4"
              sx={{ color: "#D5000E", textTransform: "uppercase" }}
            >
              <b>Recruiting & Staffing</b>
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 80,
              p: 0.1,
              height: "3px",
              background: "#CB333B",
              borderRadius: "5px",
              color: "#CB333B",
              marginBottom: "15px",
            }}
          ></Box>
        </Stack>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography variant="body1">
            Kapil Technologies Recruiting & Staffing services is one of the
            leading Infor related services in Wyoming.
          </Typography>

          <Card sx={{ width: "80%", p: 5 }}>
            <Stack direction="row" alignItems="start" spacing={1}>
              <IconBase>
                <FaUsers />
              </IconBase>
              <Stack
                direction="column"
                alignItems="left"
                sx={{ width: "80%" }}
                spacing={2}
              >
                <Typography variant="h6" sx={{ color: "#CB333B" }}>
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
                          color: "#CB333B",
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
              sx={{ p: 1 }}
            >
              {/* <img
                src={InforBanner1}
                alt="Infor Services"
                width="60px"
                height="60px"
              /> */}
              <Typography
                variant="h4"
                sx={{ color: "#D5000E", textTransform: "uppercase" }}
              >
                <b>WHY CHOOSE US</b>
              </Typography>
            </Stack>
            <Box
              sx={{
                width: 80,
                p: 0.1,
                height: "3px",
                background: "#CB333B",
                borderRadius: "5px",
                color: "#CB333B",
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
            {whyUs.map((item) => (
              <Grid
                item
                xs={5}
                component={Card}
                sx={{ p: 2, height: 180 }}
                key={item.id}
              >
                <Stack direction="row" alignItems="start" spacing={1}>
                  <IconBase>{item.icon}</IconBase>
                  <Stack direction="column" alignItems="left" width="70%">
                    <Typography variant="body1" sx={{ color: "#CB333B" }}>
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
    </div>
  );
}

export default Infor;
