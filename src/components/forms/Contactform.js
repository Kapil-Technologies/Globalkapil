import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { VscSend } from "react-icons/vsc";

const FormsData = [
  {
    id: 1,
    label: "First Name",
    name: "fname",
    type: "text",
  },
  {
    id: 2,
    label: "Last Name",
    name: "lname",
    type: "text",
  },
  {
    id: 3,
    label: "Company",
    name: "company",
    type: "text",
  },
  {
    id: 3,
    label: "Email",
    name: "cemail",
    type: "email",
  },
  {
    id: 4,
    label: "Location",
    name: "location",
    type: "text",
  },

  {
    id: 4,
    label: "Country & Code",
    name: "ccode",
    type: "dropdown",
  },

  {
    id: 5,
    label: "Phone Number",
    name: "mobile",
    type: "text",
  },
  {
    id: 6,
    label: "Business Vertical",
    name: "industry",
    type: "text",
  },
  {
    id: 7,
    label: "Your Message",
    name: "comments",
    type: "text",
  },
];

function Contactform() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="start"
      spacing={2}
      sx={{ p: 2, width: "50%", height: "auto" }}
    >
      <Typography variant="h5">Reach Our Team!</Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ width: "100%" }}
      >
        <TextField label="First Name" fullWidth />
        <TextField label="Last Name" fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField label="Company" fullWidth />
        <TextField label="Email" fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField label="Phone Number" fullWidth />
        <TextField label="Business Vertical" fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField label="Country" fullWidth />
        <TextField label="Location" fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <TextField label="Your Message" multiline rows={3} fullWidth />
      </Stack>
      <Stack
        direction="row"
        alignItems="left"
        justifyContent="left"
        sx={{ width: "100%" }}
      >
        <Button variant="contained" endIcon={<VscSend />}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
}

export default Contactform;
