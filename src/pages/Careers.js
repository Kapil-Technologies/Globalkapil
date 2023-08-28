import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { NavDiv } from "./Home";
import Page from "../components/Page";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  Stack,
  TableCell,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  FaCalendar,
  FaMagnifyingGlass,
  FaMapLocation,
  FaMapPin,
  FaXmark,
  FaBusinessTime,
} from "react-icons/fa6";
import {
  FiMapPin,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiSend,
  FiMail,
} from "react-icons/fi";
import {
  CareersArray,
  Department,
  Locations,
  Modes,
} from "../mock/CareersData";
import { Link } from "react-router-dom";
import CareersBannerImage from '../assets/Banners/Careers.png'


// ----------------------------------------------------------------------------------------

export const CareersBanner = styled("div")(({ theme, image }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
 
  justifyContent: "center",
  // backgroundImage: `url(${image})`,
  // backgroundRepeat: `no-repeat`,
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
  height: "N",
  fontSize:"80px"
}));

export const Flags = styled("img")(({ theme, image }) => ({
  width: "25px",
  height: "20px",
}));

export const PBox = styled(Box)(({ theme, image }) => ({
  width: "25px",
  height: "20px",
  background: "#d3e1ea",
  color: "#162438",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "10px",
  borderRadius: "5px",
}));

// ----------------------------------------------------------------------------------------

const PaginationComponent = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ fontFamily: "typography.fontFamily" }}
    >
      <IconButton>
        <FiChevronLeft />
      </IconButton>
      <PBox>
        <Typography
          variant="subtitle1"
          sx={{ color: "#162438", fontWeight: "bold" }}
        >
          1
        </Typography>
      </PBox>
      <IconButton>
        <FiChevronRight />
      </IconButton>
    </Stack>
  );
};

const JobItemComponent = ({
  location,
  locationflag,
  mode,
  type,
  title,
  dept,
  link,mailto
}) => {
  return (
    <Stack
      direction="column"
      alignItems="left"
      spacing={2}
      sx={{ marginBottom: "15px" }}
    >
      <Card sx={{ p: 2, border: "1px solid #d3e1ea" }}>
        <Stack sx={{ p: 1 }} direction="row" alignItems="center" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Flags src={locationflag} alt="Kapil Tehnologies Offices" />
            <Typography variant="body">{location}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <FiBriefcase />
            <Typography variant="body">{mode}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <FaBusinessTime />
            <Typography variant="body">{type}</Typography>
          </Stack>
        </Stack>
        <Typography variant="h5" sx={{ p: 1 }}>
          <b>{title}</b>
        </Typography>
        <Stack
          sx={{ p: 1 }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="body"
            sx={{ p: 1, background: "lightblue", borderRadius: 1 }}
          >
            {dept}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="contained"
              startIcon={<FiMail />}
              component={Link}
              target="blank"
              to={mailto}
              sx={{ background: " #CB333B" }}
            >
              Send Email
            </Button>
            <Button
              variant="contained"
              startIcon={<FiSend />}
              component={Link}
              target="blank"
              to={link}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

function Careers() {
  const [filterName, setFilterName] = useState("");
  const [FilteredLocations, setFilteredLocations] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  // ----------------------------------------------------------- Pagination

  const defaultValues = {
    role: "",
    location: "",
    mode: "",
    department: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const values = watch();

  console.log(values.location);

  const locations = CareersArray.filter(
    (item) => item.location === values.location  == "Indonesia" || "India"
  );

  const mode = CareersArray.filter(
    (item) => item.mode === values.mode);
  // const dept = CareersArray.filter(
  //   (item) => item.dept === values.dept.includes(item.department));
  // const role = CareersArray.filter(
  //   (item) => item.job_title === values.role.includes(item.job_title));
  
  console.log(locations)
  
  // --------------------------------------------------------

  // console.log(FilteredLocations);

  const handleReset = () => {
    reset({
      role: "",
      location: "",
      mode: "",
      department: "",
    });
  }

  

  return (
    <div>
      <Page name="Careers" content="" />
      <CareersBanner>
        <img src={CareersBannerImage} alt="Kapil Technologies Careers" width="100%" height='auto' />
      </CareersBanner>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          marginTop: "15px",
          p: 1,
        }}
        columnGap={2}
        rowGap={2}
      >
        {/* <Grid
          item
          xs={3.2}
          sx={{
            border: "1px solid #d3e1ea",
            p: 1,
          }}
          component={Paper}
        >
          <Stack direction="column" alignItems="left" spacing={2}>
            <Stack direction="column" alignItems="left" spacing={1}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6">
                  <b>Search Job</b>
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<FaXmark />}
                  onClick={handleReset}
                >
                  Clear All
                </Button>
              </Stack>
              <TextField
                size="small"
                label="Find you job"
                {...register("role")}
              />
            </Stack>
            <Stack direction="column" alignItems="left" spacing={1}>
              <Typography variant="h6">
                <b>Locations</b>
              </Typography>
              <FormGroup>
                {Locations.map((item) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={item.title}
                    key={item.id}
                    value={item.title}
                    {...register("location")}
                  />
                ))}
              </FormGroup>
            </Stack>
            <Stack direction="column" alignItems="left" spacing={1}>
              <Typography variant="h6">
                <b>Work Mode</b>
              </Typography>
              <FormGroup>
                {Modes.map((item) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={item.title}
                    key={item.id}
                    {...register("mode")}
                  />
                ))}
              </FormGroup>
            </Stack>
            <Stack direction="column" alignItems="left" spacing={1}>
              <Typography variant="h6">
                <b>Departments</b>
              </Typography>
              <FormGroup>
                {Department.map((item) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={item.title}
                    key={item.id}
                    {...register("dept")}
                  />
                ))}
              </FormGroup>
            </Stack>
          </Stack>
        </Grid> */}
        <Grid item xs={7.5}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Box sx={{ width: "100%" }}>
              {CareersArray.map((item) => (
                <Fragment>
                  <JobItemComponent
                    title={item.job_title}
                    location={item.location}
                    locationflag={item.locationFlag}
                    mode={item.mode}
                    dept={item.department}
                    link={item.linkedin}
                    type={item.type}
                    mailto={item.mail}
                  />
                </Fragment>
              ))}
              {/* <PaginationComponent  /> */}
            </Box>
            <PaginationComponent />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Careers;
