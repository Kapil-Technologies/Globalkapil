import React, { Fragment, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import KTLogo from "../assets/Logo/KTlogo.png";

import {
  About,
  AboutData,
  ContactData,
  NavData,
  Services,
  Solutions,
} from "../mock/NavbarData";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FaX } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

// -------------------------------------------------------------------------------

export const MainHeader = styled("header")(({ theme }) => ({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "15vh",
  backgroundColor: "#162438",
  zIndex: 999,
}));

export const Logo = styled("img")(({ theme }) => ({
  height: "70px",
  width: "55px",
  paddingLeft: "15px",
}));

export const MainNavList = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "10px",
}));

export const MainNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "12px",
  "&:hover": {
    color: "orange",
  },
}));

export const SubmenuList = styled("div")(({ theme, click, mid }) => ({
  display: "flex",
  alignItems: mid === 3 ? "start" : "center",
  justifyContent: "space-between",
  position: "fixed",
  // flexDirection:mid === 3 ? "column" : null,
  top: click ? "15vh" : "-100%",
  backgroundColor: "#162438",
  color: "black",
  height: mid === 3 ? "85vh" : "80px",
  opacity: 1,
  // right: 0,
  width: "100%",
  borderTop: "1px solid white ",
  zIndex: 10,
}));

export const SubNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "15px",
}));

export const SpanItem = styled("span")(({ theme }) => ({
  paddingTop: "5px",
  fontSize: "20px",
}));

export const ButtonBase = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "50%",
  color: "white",
  marginRight: "10px",

  "&:hover": {
    background: "white",
    color: "#162438",
  },
}));

export const HLine = styled("hr")(({ theme }) => ({
  width: "100%",
  color: "white",
}));

// ------------------------------------------------------------------------------ Services List

export const ServicesList = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // paddingRight: "10px",
  flexWrap: "wrap",
  color: "white",
  width: "100%",
}));

export const ServicesItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "5px",
  width: "32%",
  fontSize: "14px",
  color: "white",
  "&:hover": {
    color: "orange",
  },
  //  border:'1px solid blue'
}));

export const RightArrow = styled(FiExternalLink)(({ theme }) => ({
  marginTop: "3px",
}));

// ------------------------------------------------------------------------------
export const KapilNavStyle = ({ isActive }) => {
  return {
    // color: isActive ? "#ff8217" : "#174F7A",
    color: isActive ? "orange" : "white",
    textDecoration: "none",
    // textTransform: "uppercase",
    "&:hover": {
      color: "orange",
    },
    display: "flex",
    alignItems: "center",
    '&:hover': {
      color:'orange'
    }
  };
};

export const KapilNavStyle2 = ({ isActive }) => {
  return {
    // color: isActive ? "#ff8217" : "#174F7A",
    color: isActive ? "orange" : "white",
    // color:'black',
    textDecoration: "none",

    // textTransform: "uppercase",
    "&:hover": {
      color: "orange",
    },
    display: "flex",
    alignItems: "center",
  };
};

function Navbar() {
  const [open, setopen] = useState(false);
  const [id, setid] = useState(0);
  const [show, setShow] = useState(false);

  const handleOpen = (menuid) => {
    setid(menuid);
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <>
      <MainHeader>
        <Link
          to="/home"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo src={KTLogo} alt="Kapil Technologies Logo" />
        </Link>

        <MainNavList>
          {NavData.map((item) => (
            <MainNavItem key={item.id} onClick={() => handleOpen(item.id)}>
              {!item.path ? (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ color: "white" }}
                  key={item.id}
                >
                  <Typography variant="body" sx={{ cursor: "pointer" }}>
                    {item.title}
                  </Typography>
                  <SpanItem>
                    {item.submenudata === id && item.submenu && open
                      ? item.closeicon
                      : item.submenu
                      ? item.openicon
                      : null}
                  </SpanItem>
                </Stack>
              ) : (
                <NavLink style={KapilNavStyle} to={item.path}>
                  {item.title}
                </NavLink>
              )}
            </MainNavItem>
          ))}
        </MainNavList>
      </MainHeader>
      {id === 3 ? (
        <SubmenuList mid={id} click={open} className="main-submenu">
          <Stack
            direction="column"
            alignItems="start"
            sx={{ width: "100%", p: 3 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%", p: 1, color: "white" }}
            >
              <Typography variant="body1">
                <b>Services</b>
              </Typography>
              <ButtonBase onClick={handleClose}>
                <FaX />
              </ButtonBase>
            </Stack>
            <HLine />
            {id === 3
              ? Services.map((item) => (
                  <Fragment>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="start"
                      sx={{ width: "100%", p: 1 }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ width: 150, color: "white" }}
                      >
                        <b>{item.Mtitle}</b>
                      </Typography>

                      <Grid container>
                        {item.menu3.map((item) => (
                          <ServicesItem key={item.tlmenuid}>
                            <NavLink
                              to={item.path}
                              style={KapilNavStyle2}
                              onClick={handleClose}
                            >
                              {item.title}
                            </NavLink>
                          </ServicesItem>
                        ))}
                      </Grid>
                    </Stack>
                    <HLine />
                  </Fragment>
                ))
              : null}
          </Stack>
        </SubmenuList>
      ) : id === 2 ? (
        <SubmenuList mid={id} click={open} className="main-submenu">
          <Stack direction="row" alignItems="center" sx={{ p: 1 }}>
            {AboutData.map((item) => (
              <SubNavItem key={item.submenuid} onClick={handleClose}>
                <NavLink to={item.path} style={KapilNavStyle2}>
                  {item.title}
                </NavLink>
              </SubNavItem>
            ))}
          </Stack>

          <ButtonBase onClick={handleClose}>
            <FaX />
          </ButtonBase>
        </SubmenuList>
      ) : id === 4 ? (
        <SubmenuList mid={id} click={open} className="main-submenu">
          <Stack direction="row" alignItems="center" sx={{ p: 1 }}>
            {Solutions.map((item) => (
              <SubNavItem key={item.submenuid} onClick={handleClose}>
                <NavLink to={item.path} style={KapilNavStyle2}>
                  {item.title}
                </NavLink>
              </SubNavItem>
            ))}
          </Stack>

          <ButtonBase onClick={handleClose}>
            <FaX />
          </ButtonBase>
        </SubmenuList>
      ) : id === 6 ? (
        <SubmenuList mid={id} click={open} className="main-submenu">
          <Stack direction="row" alignItems="center" sx={{ p: 1 }}>
            {ContactData.map((item) => (
              <SubNavItem key={item.submenuid} onClick={handleClose}>
                <NavLink to={item.path} style={KapilNavStyle2}>
                  {item.title}
                </NavLink>
              </SubNavItem>
            ))}
          </Stack>

          <ButtonBase onClick={handleClose}>
            <FaX />
          </ButtonBase>
        </SubmenuList>
      ) : null}
    </>
  );
}

export default Navbar;
