import React, { useEffect, useRef, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
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
  FiDollarSign,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import { TbCertificate2 } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import Page from "../../components/Page";
import {
  BannerImageContainer,
  BannerImageLayer,
  BannerImage,
} from "../../components/common/MainBanners";
import { TabContext, TabList, TabPanel } from "@mui/lab";

// ----------------------------------------------------------------

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

// export const BannerImage = styled("img")(({ theme, image, path }) => ({
//   width: " 100%",
//   maxWidth: "100%",
//   height: 500,
// }));

export const BannerLayer = styled(Stack)(({ theme, image, path }) => ({
  width: " 100%",
  height: 500,
  background: "transprent",
  position: "absolute",
  top: 0,
}));

export const JobOpeningCard = styled(Card)(({ theme, image, path }) => ({
  width: " 100%",
  height: "auto",
  borderRadius: "25px",
  border: "1px solid #d3e1ea",
  padding: "15px",
}));

export const SkillTag = styled(Box)(({ theme, image, path }) => ({
  width: " auto",
  height: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "5px",
  paddingBottom: "5px",
  border: "1px solid #162438",
  borderRadius: "20px",
}));

// ---------------------------------------------------------------

function Careers() {
  const checkboxesRef = useRef([]);
  const [checkedState, setcheckedState] = useState();
  const [selectedFilters, setselectedFilters] = useState([]);
  const [filteredList, setFilteredList] = useState(CareersArray);

  const handleFilterQuery = (filter, id) => {
    console.log(id.target.value, id.target.checked);
    setcheckedState(id.target.checked);
    if (selectedFilters.includes(filter)) {
      let filters = selectedFilters.filter((el) => el !== filter);
      setselectedFilters(filters);
    } else {
      setselectedFilters([...selectedFilters, filter]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  console.log(selectedFilters);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        console.log(selectedCategory);
        let temp1 = CareersArray.filter(
          (item) => item.deptvalue === selectedCategory
        );
        return temp1;
      });

      console.log(tempItems.flat());
      setFilteredList(tempItems.flat());
    } else {
      setFilteredList([...CareersArray]);
    }
  };

  const uncheckAll = () => {};

  const handleReset = (e) => {
    setselectedFilters("");
    checkboxesRef.current.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  // ---------------------------------------------------- Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // -------------------------------------------------------------

  const [tabValue, settabValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    settabValue(newValue);
  };

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

      <Stack
        sx={{ py: 2, width: "100%", textAlign: "left" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          Open Positions
        </Typography>

        <TabContext value={tabValue} >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& button": {
                // borderRadius: 2,
                fontSize: "18px",
                fontWeight: "bold",
              },

              ".Mui-selected": {
                color: "#162438",
                fontWeight: "bold",
                fontSize: "18px",
              },
            }}
          >
            {CarrersTabs.map((item) => (
              <Tab
                key={item.id}
                label={
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <img src={item.tabflag} width="30px" height="30px" />
                    <Typography
                      variant="h6"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {item.tabName}
                    </Typography>
                  </Stack>
                }
                value={item.tabvalue}
                sx={{
                  textTransform: "capitalize",
                }}
              />
            ))}
          </TabList>

          {carrersArray.map((item) => (
            <TabPanel
              value={item.tabvalue}
              sx={{ width: "90%", flexWrap: "wrap" }}
            >
              <Grid
                container
                columnGap={1}
                rowGap={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  width: "100%",
                  // background: "blue",
                }}
              >
                {item.careers.map((item) => (
                  <Grid
                    item
                    xs={3.5}
                    component={Stack}
                    direction="column"
                    alignItems="left"
                    justifyContent="left"
                    spacing={3}
                    sx={{ background: "#F7F7F7", p: 2, height: 220 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {item.dept}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        mb: "5px",
                      }}
                    >
                      {item.jobTitle}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="body1">Experience:</Typography>
                      <Typography variant="body1">{item.exp}</Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      sx={{ mb: "10px" }}
                    >
                      <Typography variant="body1">
                        No. of Position(s):
                      </Typography>
                      <Typography variant="body1">{item.positions}</Typography>
                    </Stack>

                    <Typography
                      variant="body"
                      sx={{
                        textTransform: "capitalize",
                        // fontWeight: "bold",
                        mb: "5px",
                      }}
                    >
                      {item.type}
                    </Typography>

                    <Typography
                      variant="body1"
                      component={Link}
                      to={`mailto:hr@kcs-tech.com?subject=Application Regarding ${item.jobTitle}`}
                      sx={{
                        textTransform: "uppercase",
                        textDecoration: "none",
                      }}
                    >
                      Apply Now
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabContext>
      </Stack>
    </MainContainer>
  );
}

export default Careers;
