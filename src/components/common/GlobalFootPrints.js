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
        justifyContent: "left",
        width: "100%",
        gap: 2,
      }}
    >
      {OfficeAddress.sort(function (a, b) {
        if (a.country < b.country) {
          return -1;
        }
        if (a.country > b.country) {
          return 1;
        }
        return 0;
      })
        .filter((item) =>
          item.countryCode.includes(SelectedCountry)
        )
        .map((item) => (
          <Grid
            item
            sx={{
              border: "1px solid black",
              p: 1,
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              flexDirection: "column",
              gap: 0.5,
              height: 300,
            }}
            xs={12}
            sm={12}
            md={3.8}
            lg={3.8}
            xl={3.8}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                {item.country}
              </Typography>
            </Stack>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {item.compName}
            </Typography>

            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              {item.SubComp}
            </Typography>

            <Typography variant="body1">{item.add1},</Typography>
            <Typography variant="body1">{item.add2},</Typography>
            {/* <Typography variant="body1">{item.add3}</Typography> */}
            {item.add3 ? (
              <Typography variant="body1">{item.add3},</Typography>
            ) : null}
            {item.add4 ? (
              <Typography variant="body1">{item.add4}</Typography>
            ) : null}
            {item.contactManager ? (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1">Contact Person :</Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {item.contactManager}
                </Typography>
              </Stack>
            ) : null}
            <Stack direction="row" alignItems="center" spacing={1}>
              <FiMail />
              <NavigateLink to={item.mailto}>{item.email}</NavigateLink>
            </Stack>
          </Grid>
        ))}
    </Grid>
  );
}

export default GlobalFootPrints;
