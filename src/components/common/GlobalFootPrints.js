import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import {
  CountriesData,
  CountryTabs,
  OfficeAddress,
} from "../../mock/ContactData";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

export const NavigateLink = styled(Link)(({ theme, color }) => ({
  color: "#162438",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const NotAvailable = () => {
  return (
    <Grid
      item
      sx={{
        border: "1px solid black",
        p: 2,
        display: "flex",
        alignItems: "left",
        justifyContent: "left",
        flexDirection: "column",
        gap: 0.5,
      }}
      xs={12}
      sm={12}
      md={4}
      lg={4}
      xl={4}
    >
      Not Available
    </Grid>
  );
};

function GlobalFootPrints({ SelectedCountry }) {
  const [value, setValue] = React.useState("1");

  const [countryValue, setCountryValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let Offices;

  return (
    <Grid
      container
      rowGap={1}
      columnGap={1}
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        width: "100%",
        gap: 2,
      }}
    >
      {OfficeAddress.filter((item) =>
        item.countryCode.includes(SelectedCountry)
      ).map((item) => (
        <Grid
          item
          key={item.id}
          sx={{
            border: "1px solid black",
            p: 1,
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            flexDirection: "column",
            gap: 0.5,
            height: "auto",
          }}
          xs={12}
          sm={12}
          md={4}
          lg={4.8}
          xl={4}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#D6000D",
              }}
            >
              {item.country}
            </Typography>
          </Stack>

          {item.compName ? (
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {item.compName}
            </Typography>
          ) : item.careof ? (
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {item.careof}
            </Typography>
          ) : null}
          {item.SubComp ? (
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              {item.SubComp}
            </Typography>
          ) : null}

          <Typography variant="body1">{item.add1}</Typography>
          {item.add2 ? (
            <Typography variant="body1">{item.add2}</Typography>
          ) : null}

          {item.add3 || item.add4 ? (
            <Typography variant="body1">
              {item.add3},{item.add4}
            </Typography>
          ) : null}

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {item.contactManager}
            </Typography>

            {/* <Typography variant="body1">|</Typography> */}

            <NavigateLink to={item.mailto}>{item.email}</NavigateLink>
          </Stack>
          {/* 
          <Stack direction="row" alignItems="center" spacing={1}>
            <FiMail />
          </Stack> */}
        </Grid>
      ))}
    </Grid>
  );
}

export default GlobalFootPrints;
