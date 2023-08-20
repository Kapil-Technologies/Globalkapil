import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { NavDiv } from "../pages/Home";
import NotFoundImg from '../assets/Banners/NotFound.png'

function NotFound() {
  return (
    <div>
        

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", height: "100vh", textAlign: "center" }}
        spacing={1}
      >
        <img src={NotFoundImg} alt="Not Found" width="500px" height="500px" style={{marginBottom:'-120px'}} />
        <Typography variant="body1">
          <b>
            We're sorry, the page you requested could not be found <br /> Please
            go back to Home !
          </b>
        </Typography>
        <Button variant="contained" component={Link} to="/home">
          Home
        </Button>
      </Stack>
    </div>
  );
}

export default NotFound;
