import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import { Logo } from "../Navbar";
import KapilLogo from "../../assets/Logo/KTlogo2.png";

function JobClosed() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ width: "100%", height: "100vh", textAlign: "center" }}
    >
      <Logo src={KapilLogo} />

      <Typography variant="h4" sx={{ fontWeight: "bold", color: "red" }}>
        Job Position Closed !
      </Typography>
      <Typography variant="body1" sx={{ width: "60%" }}>
        The position you were seeking has been filled. We encourage you to
        persist in exploring opportunities with us and wish you the utmost
        success in your job search. <br /> Thank you once more for considering
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          Kapil Technologies Pvt Ltd
        </Typography>
        .
      </Typography>

      <Button variant="contained" href="/join-us/search-jobs">
        Explore Jobs
      </Button>
    </Stack>
  );
}

export default JobClosed;
