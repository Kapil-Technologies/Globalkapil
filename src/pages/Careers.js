import React, { useState } from "react";
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
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import CareersImage from "../assets/Banners/Careers.png";
import {
  CareersArray,
  Department,
  DepartmentList,
  Locations,
  Modes,
} from "../mock/CareersData";
import { FiDollarSign, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { TbCertificate2 } from "react-icons/tb";

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

export const BannerImage = styled("img")(({ theme, image, path }) => ({
  width: " 100%",
  // maxWidth: "100%",
  height: 500,
}));

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
  const [dept, setdept] = useState([]);
  const [mode, setmode] = useState([]);
  const [locations, setlocations] = useState([]);

  const handleReset = () => {
    setdept("");
    setmode("");
    setlocations("");
  };

  // ---------------------------------------------------- Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - CareersArray.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // -------------------------------------------------------------

  const [fIndex, setFindex] = useState(0);
  const [lastIndex, setlastIndex] = useState(0);
  const [CRecords, setCRecords] = useState([]);

  const getFirstIndex = (number) => {
    setFindex(number);
  };

  const getLastIndex = (number) => {
    setlastIndex(number);
  };

  const getRecords = (records) => {
    console.log(records);
    setCRecords(records);
  };

  const CareersLength = CareersArray.length;

  const filteredList = CareersArray.filter(
    (item) =>
      item.deptvalue === dept ||
      item.modevalue === mode ||
      item.lvalue === locations
  );

  console.log(filteredList);

  return (
    <MainContainer
      direction="column"
      alignItems="center"
      justifyContent="start"
    >
      <BannerImage src={CareersImage} />
      <BannerLayer
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 10 }}
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

        {/* <Button
            variant="contained"
            sx={{
              background: "white",
              color: "primary.main",
              fontWeight: "bold",
              "&:hover": {
                background: "white",
                color: "primary.main",
              },
            }}
          >
            See Open Positions
          </Button> */}
      </BannerLayer>

      <Stack
        sx={{ py: 2, width: "100%" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h4">Kapil Departments</Typography>
        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "95%",
          }}
        >
          {Department.map((item) => (
            <Grid
              key={item.id}
              component={Card}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #E3E3E4",
                // boxShadow: 2,
                flexDirection: "column",
                gap: 2,
                width: 180,
                height: 180,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <img
                src={item.icon}
                alt="Kapil Departments"
                width="auto"
                height="50px"
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid
          component={"form"}
          container
          columnGap={1}
          sx={{
            py: 2,
            width: "90%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Grid
            xs={3.5}
            sx={{ p: 2, border: "1px solid  #d3e1ea", height: 750 }}
            component={Card}
          >
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="left"
              spacing={2}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <Typography variant="h6">Filter by</Typography>

                <Button variant="contained" type="button" onClick={handleReset}>
                  Reset
                </Button>
              </Stack>

              <Stack direction="column" alignItems="left" spacing={1}>
                <Typography variant="h6">Departments</Typography>

                <FormGroup>
                  {DepartmentList.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          value={item.value}
                          name="departments"
                          onChange={(e) => setdept(e.target.value)}
                        />
                      }
                      label={item.title}
                    />
                  ))}
                </FormGroup>
              </Stack>

              <Stack direction="column" alignItems="left" spacing={1}>
                <Typography variant="h6">Work Mode</Typography>

                <FormGroup>
                  {Modes.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          value={item.value}
                          name="modes"
                          onChange={(e) => setmode(e.target.value)}
                        />
                      }
                      label={item.title}
                    />
                  ))}
                </FormGroup>
              </Stack>

              <Stack direction="column" alignItems="left" spacing={1}>
                <Typography variant="h6">Locations</Typography>

                <FormGroup>
                  {Locations.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          value={item.value}
                          name="location"
                          onChange={(e) => setlocations(e.target.value)}
                        />
                      }
                      label={
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <img
                            src={item.img}
                            alt="Kapil Technologies Global Locations"
                            width="20px"
                            height="20px"
                          />
                          <Typography>{item.title}</Typography>
                        </Stack>
                      }
                    />
                  ))}
                </FormGroup>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            xs={8}
            sx={{ py: 2, px: 4, border: "1px solid  #d3e1ea", height: 'auto' }}
            component={Card}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Stack direction="row" alignItems="center" justifyContent="left">
                <TablePagination
                  rowsPerPageOptions={[2, 4, 6, 8]}
                  component="div"
                  count={CareersArray.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelRowsPerPage="Jobs per page"
                  labelDisplayedRows={({ from, to, count }) =>
                    `Showing ${from}-${to} of  ${count} Jobs`
                  }
                />
              </Stack>
              {CareersArray.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((item) => (
                <JobOpeningCard>
                  <Stack
                    direction="column"
                    alignItems="left"
                    justifyContent="left"
                    spacing={1}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ width: "100%" }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        {item.deptimg ? (
                          <img
                            src={item.deptimg}
                            alt="Kapil Tech Departments"
                            width="auto"
                            height="25px"
                            style={
                              {
                                // marginTop: "-3px",
                              }
                            }
                          />
                        ) : null}
                        <Typography
                          variant="body1"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item.department}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                      >
                        <Button
                          variant="contained"
                          component={Link}
                          to={item.linkedin}
                          target="_blank"
                          startIcon={<FiLinkedin style={{ marginBottom: 2 }} />}
                        >
                          Apply through Linkedin
                        </Button>
                        <Button
                          variant="contained"
                          component={Link}
                          to={item.mailto}
                          startIcon={<FiMail />}
                        >
                          Send mail to HR
                        </Button>
                      </Stack>
                    </Stack>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                    >
                      {item.job_title}
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={2}
                      sx={{ width: "100%" }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <img
                          src={item.locationFlag}
                          width="20px"
                          height="20px"
                        />
                        <Typography>{item.location}</Typography>
                      </Stack>

                      <Typography
                        variant="body1"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {item.type}
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <FiDollarSign />
                        <Typography
                          variant="body1"
                          sx={{ textTransform: "capitalize" }}
                        >
                          Salary : {item.salary}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <TbCertificate2 />
                        <Typography
                          variant="body1"
                          sx={{ textTransform: "capitalize" }}
                        >
                          Experience : {item.experience}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Box sx={{ width: "100%" }}>
                      <hr />
                    </Box>
                    <Stack
                      direction="column"
                      alignItems="left"
                      justifyContent="left"
                      spacing={1.5}
                    >
                      <Typography variant="h6">Requirement</Typography>
                      <Typography variant="body">
                        We are looking for the candidates with the following
                        skills
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="left"
                        justifyContent="left"
                        spacing={2}
                      >
                        {item.skillset.map((item) => (
                          <SkillTag key={item.id}>
                            <Typography
                              variant="body1"
                              sx={{ textTransform: "capitalize" }}
                            >
                              {item.skill}
                            </Typography>
                          </SkillTag>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </JobOpeningCard>
              ))}

              {/* <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant="body1">
                  Interested Candidate can send their resumes  to
                </Typography>
                <Link to="mailto:hr@kcs-tech.com">hr@kcs-tec.com</Link>
              </Stack> */}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </MainContainer>
  );
}

export default Careers;
