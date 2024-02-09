import React, { useEffect, useRef, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Tab,
  TablePagination,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CareersImage from "../../assets/Banners/Careers.jpg";
import {
  CareersArray,
  CarrersTabs,
  Department,
  DepartmentList,
  Locations,
  Modes,
  carrersArray,
  filters,
} from "../../mock/CareersData";
import {
  FiChevronDown,
  FiDollarSign,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import Pagination from "../../components/Pagination";
import { Link, useNavigate } from "react-router-dom";
import { TbCertificate2 } from "react-icons/tb";
import { FaDotCircle, FaRupeeSign } from "react-icons/fa";
import Page from "../../components/Page";
import {
  BannerImageContainer,
  BannerImageLayer,
  BannerImage,
} from "../../components/common/MainBanners";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { getOpenings, getPositions } from "../../api/Main";

// ----------------------------------------------------------------

const filtersData = [
  {
    id: 1,
    filtername: "All",
    filtervalue: "All",
  },
  {
    id: 2,
    filtername: "Infor",
    filtervalue: "Infor",
  },
  {
    id: 3,
    filtername: "SAP",
    filtervalue: "SAP",
  },
  {
    id: 4,
    filtername: "Web Technologies",
    filtervalue: "Web Technologies",
  },
  {
    id: 5,
    filtername: "Oracle",
    filtervalue: "Oracle",
  },
  {
    id: 6,
    filtername: "Others",
    filtervalue: "Others",
  },
];

export const MainContainer = styled(Stack)(({ theme, image, path }) => ({
  // backgroundColor: "#162438",
  width: "100%",
  height: "auto",
  objectFit: "contain",
  // backgroundSize: "contain",
  // backgroundImage: `url(${image})`,
  // backgroundRepeat: `no-repeat`,
  // backgroundPosition: "center",
  [theme.breakpoints.up("xl")]: {
    position: path ? "absolute" : null,
    bottom: path ? 0 : null,
  },
}));

export const BannerLayer = styled(Stack)(({ theme, image, path }) => ({
  width: " 100%",
  height: 500,
  background: "transprent",
  position: "absolute",
  top: 0,
}));

export const JobContainer = styled(Stack)(({ theme, image, path }) => ({
  width: "100%",
  height: "auto",
  // border: "1px solid #d3e1ea",
  padding: "20px",

  marginBottom: "10px",
}));

export const FilterContainer = styled(Grid)(({ theme, image, path }) => ({
  height: "auto",
  border: "1px solid blue",
  padding: "10px",
  display: "flex",
  alignItems: "start",
  justifyContent: "left",
  flexDirection: "column",
}));

export const OpeningsContainer = styled(Grid)(({ theme, image, path }) => ({
  height: 200,
  width: 100 % 0,
  // border: "1px solid blue",
  padding: "10px",
  display: "flex",
  alignItems: "start",
  justifyContent: "left",
  flexDirection: "column",
  backgroundColor: "#fff",
  gap: 2,
  position: "relative",
  borderRadius: "10px",
  border: "1px solid #d3e1ea",
  boxShadow: "inset #fff 0px 0px 60px -12px",
}));

export const JobOpeningCard = styled(Card)(({ theme, image, path }) => ({
  width: "100%",
  border: "1px solid #d3e1ea",
  padding: "10px",
  borderRadius: "10px",
}));

export const JobDot = styled(Box)(({ theme, image, path }) => ({
  width: 8,
  height: 8,
  background: "black",
  borderRadius: "50%",
  position: "relative",
  top: "10px",
}));

// ---------------------------------------------------------------

function Careers({ careersid }) {
  const Navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleNavigate = (job) => {
    if (job.status === "active") {
      Navigate(`/join-us/application/${job.jobid}`);
    } else if (job.status === "closed") {
      Navigate(`/join-us/application/${job.jobid}/closed`);
    }
  };

  // -------------------------------------------------------------

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const Desktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const Large = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));

  const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const { enqueueSnackbar } = useSnackbar();

  const [currentOPenings, setCurrentOpenings] = useState([]);

  useEffect(() => {
    getOpenings()
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status === true) {
          // enqueueSnackbar(res.data.message, { variant: "success" });
          setCurrentOpenings(res.data.response);
        } else {
          // enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        // console.log(err);
        enqueueSnackbar(err.message, { variant: "error" });
        enqueueSnackbar(err, { variant: "error" });
      });
  }, []);

  // -------------------------------------------------------------

  return (
    <MainContainer
      direction="column"
      alignItems="center"
      justifyContent="start"
    >
      <Page name="Join Us | Search jobs" content="" keywords="" />

      <BannerImageContainer
        smHeight="auto"
        mdHeight="auto"
        lgHeight="auto"
        xlHeight="auto"
        mainHeight="auto"
      >
        <BannerImage
          src={CareersImage}
          smHeight="auto"
          mdHeight="auto"
          lgHeight="auto"
          xlHeight="auto"
          mainHeight="auto"
        />
        <BannerImageLayer
          textcolor="white"
          layercolor="transperent"
          smHeight="100%"
          mdHeight="100%"
          lgHeight="100%"
          xlHeight="100%"
          mainHeight="100%"
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "whitesmoke" }}
            >
              Find Your Dream Job
            </Typography>

            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              New opportunities to explore every day - find your perfect fit!
            </Typography>
          </Stack>
        </BannerImageLayer>
      </BannerImageContainer>

      <Typography variant="h5" sx={{ p: 2, fontWeight: "bold" }}>
        Current Openings
      </Typography>

      {/* <Grid
        container
        sx={{
          width: "60%",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {filtersData.map((item) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            key={item.id}
            sx={{
              py: 1,
              px: 3,
              bgcolor: "#012C54",
              color: "white",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.filtername}
            </Typography>
          </Stack>
        ))}
      </Grid> */}

      <JobContainer
        direction="row"
        alignItems="start"
        justifyContent="center"
        component={Grid}
        container
        columnGap={1}
        rowGap={1}
      >
        {currentOPenings.length === 0 ? (
          <Typography>No Positions Found</Typography>
        ) : (
          currentOPenings.map((item) =>
            item.status === "active" ? (
              <Accordion
                sx={{ width: "90%", background: "#d3e1ea" }}
                key={item.id}
              >
                <AccordionSummary
                  expandIcon={<FiChevronDown />}
                  aria-controls="panel1-content"
                  id={item.id}
                  sx={{ borderBottom: "1px solid grey" }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: "100%" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.jobtitle}
                    </Typography>
                    {Mobile || Tab ? (
                      <Button
                        variant="contained"
                        onClick={() => handleNavigate(item.jobid)}
                        sx={{ mr: 3 }}
                      >
                        Apply
                      </Button>
                    ) : (
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ width: "30%" }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ pr: 2, fontWeight: "bold" }}
                        >
                          {item.jobid}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ pr: 2, fontWeight: "bold" }}
                        >
                          {item.category}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={() => handleNavigate(item)}
                          sx={{ mr: 3 }}
                        >
                          Apply
                        </Button>
                      </Stack>
                    )}
                  </Stack>
                </AccordionSummary>
                <AccordionDetails sx={{ width: "100%" }}>
                  <Stack
                    direction="column"
                    alignItems="left"
                    justifyContent="left"
                    spacing={2}
                    sx={{ width: "100%" }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ width: "100%%" }}
                      spacing={1}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Experience
                      </Typography>
                      <Typography variant="body1">:</Typography>
                      <Typography variant="body1">{item.experience}</Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ width: "100%%" }}
                      spacing={1}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Job Type
                      </Typography>
                      <Typography variant="body1">:</Typography>
                      <Typography variant="body1">{item.jobtype}</Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ width: "100%%" }}
                      spacing={1}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Duration
                      </Typography>
                      <Typography variant="body1">:</Typography>
                      <Typography variant="body1">{item.duration}</Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ width: "100%%" }}
                      spacing={1}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Job Mode
                      </Typography>
                      <Typography variant="body1">:</Typography>
                      <Typography variant="body1">{item.jobmode}</Typography>
                    </Stack>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ) : null
          )
        )}
      </JobContainer>
    </MainContainer>
  );
}

export default Careers;
