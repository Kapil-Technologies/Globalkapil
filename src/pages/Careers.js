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
  TextField,
  Typography,
} from "@mui/material";
import CareersImage from "../assets/Banners/Careers.png";
import { CareersArray, Department, Locations, Modes } from "../mock/CareersData";
import { FiDollarSign, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

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
  background: "#59719C",
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
  const [dept, setdept] = useState("");
  const [mode, setmode] = useState("");
  const [locations, setlocations] = useState("");

  const filteredList = CareersArray.filter((item) => item.deptvalue === dept || item.modevalue === mode || item.lvalue === locations)

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

        <Button
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
        </Button>
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
              <p>icon</p>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction="row"
          alignItems="start"
          justifyContent="center"
          component={Grid}
          container
          columnGap={1}
          sx={{ py: 2, width: "90%" }}
        >
          <Grid
            xs={3.5}
            sx={{ p: 2, border: "1px solid  #d3e1ea" }}
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

                <Button variant="contained">Reset</Button>
              </Stack>

              <Stack direction="column" alignItems="left" spacing={1}>
                <Typography variant="h6">Departments</Typography>

                <FormGroup>
                  {Department.map((item) => (
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
                      label={<Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                        <img src={item.img}  alt="Kapil Technologies Global Locations" width='20px' height='20px' />
                        <Typography>
                          {item.title}
                        </Typography>
                      </Stack>}
                    />
                  ))}
                </FormGroup>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            xs={8}
            sx={{ py:2, px:4,  border: "1px solid  #d3e1ea" }}
            component={Card}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
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
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      dept
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Button
                        variant="contained"
                        startIcon={<FiLinkedin style={{ marginBottom: 2 }} />}
                      >
                        Apply through Linkedin
                      </Button>
                      <Button variant="contained" startIcon={<FiMail />}>
                        Send mail to HR
                      </Button>
                    </Stack>
                  </Stack>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Job title
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="left"
                    spacing={2}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      spacing={1}
                    >
                      <FiMapPin />
                      <Typography
                        variant="body1"
                        sx={{ textTransform: "capitalize" }}
                      >
                        JobType : Job Location
                      </Typography>
                    </Stack>

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
                        Salary : Salary Deatails
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
                    >
                      <SkillTag>
                        <Typography
                          variant="body1"
                          sx={{ textTransform: "capitalize" }}
                        >
                          Soumya
                        </Typography>
                      </SkillTag>
                    </Stack>
                  </Stack>
                </Stack>
              </JobOpeningCard>

              
            </Stack>
          </Grid>
        </Stack>
      </Stack>
    </MainContainer>
  );
}

export default Careers;
