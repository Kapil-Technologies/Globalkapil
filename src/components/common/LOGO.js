import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

export const LogoBox = styled(Stack)(({ theme, image, path }) => ({
  color: "white",
  background: "#A41843",
  textTransform: "capitalize",
  width: "auto",
  height: 25,
}));

function LOGO() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={0.5}
      sx={{ fontSize: "28px" }}
    >
      <LogoBox
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ fontWeight: "bold" }}
      >
        <Typography variant="h6">KAPIL</Typography>
      </LogoBox>
      <Typography variant="h6">TECH</Typography>
    </Stack>
  );
}

export default LOGO;
