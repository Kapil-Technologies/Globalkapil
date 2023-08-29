import React, { Fragment, useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
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

export const Header = styled("header")(
  ({ theme, InforColor, click, SAPColor }) => ({
    // position: "absolute",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    width: "100%",
    // height: "15vh",
    backgroundColor: click ? "#F5F5F5" : "transparent",
    // zIndex: 999,
  })
);

export const MainHeader = styled("nav")(
  ({ theme, InforColor, click, SAPColor, topvisibile, listid }) => ({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: InforColor ? "60%" : "100%",
    height: "15vh",
    backgroundColor:
      click && listid === 3
        ? "rgba(0,0,0,0.4)"
        : listid === 2
        ? "white"
        : "transperant",
    zIndex: 999,
    top: topvisibile ? 0 : "-15vh",
    [theme.breakpoints.up("xl")]: {
      height: "10vh",
    },
  })
);

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

export const SubmenuList = styled("div")(({ theme, click, mid, SAP }) => ({
  display: "flex",
  alignItems: mid === 3 ? "start" : "center",
  justifyContent: "space-between",
  position: "fixed",
  // flexDirection:mid === 3 ? "column" : null,
  top: click ? "15vh" : "-100%",
  backgroundColor: "whitesmoke",
  color: "#162438",
  height: mid === 3 ? "85vh" : "80px",
  opacity: 1,
  // right: 0,
  width: "100%",
  borderTop: "1px solid white ",
  zIndex: 10,

  [theme.breakpoints.up("xl")]: {
    top: click ? "10vh" : "-100%",
  },
}));

export const SubNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "15px",
}));

export const SpanItem = styled("span")(({ theme, color }) => ({
  paddingTop: "5px",
  fontSize: "20px",
  cursor: "pointer",
  color: color ? "" : "black",
  "&:hover": {
    color: "red",
  },
}));

export const ButtonBase = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "50%",
  color: "#162438",
  marginRight: "10px",

  "&:hover": {
    background: "#162438",
    color: "white",
  },
}));

export const HLine = styled("hr")(({ theme }) => ({
  width: "100%",
  color: "#162438",
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
export const NavLinkStyle = styled(NavLink)(
  ({ theme, contactus, patners, infor }) => ({
    color: contactus || patners || infor ? "#012C54" : "white",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "red",
    },
  })
);

// ------------------------------------------------------------------------------
export const KapilNavStyle = ({ isActive }) => {
  return {
    // color: isActive ? "#ff8217" : "#174F7A",
    // color: isActive ? "orange" : "#012a5c",
    color: isActive ? "orange" : "#012a5c",
    fontWeight: "bold",
    textDecoration: "none",
    // textTransform: "uppercase",
    "&:hover": {
      color: "orange",
    },
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "orange",
    },
  };
};

export const KapilNavStyle2 = ({ isActive }) => {
  return {
    // color: isActive ? "#ff8217" : "#174F7A",
    color: isActive ? "orange" : "#162438",
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
  const { pathname } = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // --------------------------------------------------------------------

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  // -----------------------------------------------------------------------------

  const Infor = "/offerings/enterprise-software/erp/infor";
  const SAP = "/offerings/enterprise-software/erp/SAP";
  const Oracle = "/offerings/enterprise-software/erp/SAP";

  const KapilNavStyle = ({ isActive }) => {
    return {
      // color: isActive ? "#ff8217" : "#174F7A",
      color: isActive ? "orange" : "#012a5c",
      textDecoration: "none",
      // textTransform: "uppercase",
      "&:hover": {
        color: "orange",
      },
      display: "flex",
      alignItems: "center",
      "&:hover": {
        color: "orange",
      },
    };
  };

  const KapilNavStyle2 = ({ isActive }) => {
    return {
      // color: isActive ? "#ff8217" : "#174F7A",
      color: isActive ? "orange" : "#162438",
      // color:'black',
      textDecoration: "none",

      // textTransform: "uppercase",
      "&:hover": {
        color: "red",
      },
      display: "flex",
      alignItems: "center",
    };
  };

  const condition1 = pathname.split("/")[1];

  console.log(condition1);

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
      <MainHeader
        InforColor={pathname === Infor}
        SAPColor={pathname === SAP}
        oracleColor={pathname === Oracle}
        click={open}
        topvisibile={visible}
        listid={id}
        className="MainNav"
      >
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
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                  key={item.id}
                >
                  <Typography
                    variant="body"
                    sx={{
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontFamily: "fontFamily",
                      fontSize: "16px",
                      color:
                        pathname === "/contact-us" ||
                        pathname === "/our-alliances" ||
                        pathname === "/offerings/enterprise-software/erp/infor"
                          ? "#012C54"
                          : "white",
                      "&:hover": {
                        color: "red",
                      },
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}

                    {item.submenudata === id && item.submenu && open
                      ? item.closeicon
                      : item.submenu
                      ? item.openicon
                      : null}
                  </Typography>
                </Stack>
              ) : (
                <NavLinkStyle
                  to={item.path}
                  click={open}
                  listid={id}
                  contactus={pathname === "/contact-us"}
                  patners={pathname === "/our-alliances"}
                  sap={pathname === SAP}
                  infor={pathname === Infor}
                  home={pathname === "/home"}
                >
                  {item.title}
                </NavLinkStyle>
              )}
            </MainNavItem>
          ))}
        </MainNavList>
      </MainHeader>
      {id === 3 ? (
        <SubmenuList
          mid={id}
          click={open}
          className="main-submenu"
          sapColor={pathname === SAP}
        >
          <Stack
            direction="column"
            alignItems="start"
            sx={{ width: "100%", p: 3 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%", p: 1, color: "#162438" }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Services
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
                        sx={{
                          width: 150,
                          color: "#162438",
                          fontWeight: "bold",
                        }}
                      >
                        {item.Mtitle}
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
      ) : null}
    </>
  );
}

export default Navbar;
