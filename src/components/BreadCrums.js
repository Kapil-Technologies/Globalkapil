import React from "react";
import { Stack, Typography } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

// ---------------------------------------------------------------------- Styled Components

export const BCLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  textTransform: "capitalize ",
  color: "white",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const RightArrow = styled(FiChevronRight)(({ theme }) => ({
  paddingTop: "3px",
}));
// ---------------------------------------------------------------------- Main Components

function BreadCrums() {
  const { pathname } = useLocation();
  console.log(pathname);

  const urlData1 = pathname.split("/")[1];
  const url1 = `/${urlData1}`
  const urlData2 = pathname.split("/")[2];
  // const url2 = urlData2.replace(/-/g, " ");
  const urlData3 = pathname.split("/")[3];
  // const url3 = urlData3.replace(/-/g, " ");
  const urlData4 = pathname.split("/")[4];
  // const url4 = urlData4.replace(/-/g, " ");
  const urlData5 = pathname.split("/")[5];
  // const url5 = urlData5.replace(/-/g, " ");

  // console.log(url1);

  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="left"
        spacing={1}
        sx={{
          width: "100%",
          height: 60,
          background: "#162438",
          color: "white",
          position: "relative",
          top: "15vh",
          borderTop: "1px solid white",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="left"
          spacing={2}
          sx={{ marginLeft: "15px" }}
        >
          <Typography variant="h6" sx={{ marginLeft: "15px" }}>
            <b>You are in :</b>
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="left">
            <BCLink to={url1}>
              {urlData1.includes("-") ? urlData1.replace(/-/g, " ") : urlData1}
            </BCLink>

            {urlData2 ? <RightArrow /> : null}
            {urlData2 ? (
              <BCLink>
                {urlData2.includes("-")
                  ? urlData2.replace(/-/g, " ")
                  : urlData2}
              </BCLink>
            ) : null}

            {urlData3 ? <RightArrow /> : null}
            {urlData3 ? (
              <BCLink>
                {urlData3.includes("-")
                  ? urlData3.replace(/-/g, " ")
                  : urlData3}
              </BCLink>
            ) : null}
            {urlData4 ? <RightArrow /> : null}
            {urlData4 ? (
              <BCLink>
                {urlData4.includes("-")
                  ? urlData4.replace(/-/g, " ")
                  : urlData4}
              </BCLink>
            ) : null}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default BreadCrums;
