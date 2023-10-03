import React, { Fragment, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import KTLogo from "../assets/Logo/KTlogo.png";
import { JoinUsData, NavData, Services, Solutions } from "../mock/NavbarData";
import ServiceIcon from "../assets/IconImages/Services.png";
import SolutionIcon from "../assets/IconImages/solutions.png";

// -------------------------------------------------------- Styled Component

export const UpArrow = styled(FiChevronUp)(({ theme, image }) => ({
  fontWeight: "bold",
}));

export const DownArrow = styled(FiChevronDown)(({ theme, image }) => ({
  fontWeight: "bold",
}));

export const Menu = styled(FiMenu)(({ theme, image }) => ({}));

export const CloseMenu = styled(FiX)(({ theme, image }) => ({}));

export const RightArrow = styled(FiArrowRight)(({ theme, image }) => ({}));

export const MainHeader = styled("header")(({ theme, image, condition }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "15vh",
  // background: "transperant",
  background: condition ? "white" : "transperant",
  position: condition ? "fixed" : "absolute",
  zIndex: 9999,
  width: "100%",

  [theme.breakpoints.down("md")]: {
    // border: "1px solid white",
    background: "transperant",
    height: "15vh",
  },
}));

export const MainNavList = styled("ul")(({ theme, image }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    position: "fixed",
    top: "15vh",
    background: "whitesmoke",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    height: "85vh",
    width: "100%",
    left: "-100%",
  },
}));

export const MainNavItem = styled("li")(({ theme, image }) => ({
  listStyle: "none",
  padding: "10px",
  textTransform: "uppercase",
  fontFamily: theme.typography.fontFamily,
}));

export const MainNavTextContainer = styled(Stack)(
  ({ theme, image, condition, Infor }) => ({
    color: condition || Infor ? "#001e3a" : "white",
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
    },
    [theme.breakpoints.down("md")]: {
      color: "#001e3a",
    },
  })
);

export const MainNavText = styled(Typography)(({ theme, image }) => ({}));

export const MainNavLink = styled(NavLink)(
  ({ theme, image, condition, Infor }) => ({
    color: condition || Infor ? "#001e3a" : "white",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
    },
    "&.active": {
      color: "red",
    },
    [theme.breakpoints.down("md")]: {
      color: "#001e3a",
    },
  })
);

export const SubNavList = styled("ul")(
  ({ theme, image, condition, Hover }) => ({
    position: "absolute",
    top: "15vh",
    color: "#012c54",
    background: "white",
    width: condition ? "100%" : null,
    right: condition ? 0 : null,
    textAlign: "left",
    padding: condition ? "" : "10px",
    height: condition ? "85vh" : null,
    borderTop: Hover ? "1px solid black" : null,
  })
);

export const SubNavItem = styled("li")(({ theme, image }) => ({
  listStyle: "none",
  padding: "10px",
}));

export const SubNavText = styled(Typography)(({ theme, image }) => ({
  textTransform: "capitalize",
}));

export const SubNavLink = styled(NavLink)(({ theme, image }) => ({
  textDecoration: "none",
  color: "#001e3a",
  fontWeight: "bold",
}));

export const ResponsiveMenu = styled(Stack)(({ theme, image, condition }) => ({
  color: condition ? "#012c54" : "white",
  display: "none",
  fontSize: "28px",
  // padding: "10px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    padding: "10px",
  },
}));

export const Logo = styled("img")(({ theme, image }) => ({
  width: "53px",
  height: "72px",
  padding: "5px",
  maxWidth: "100%",
  [theme.breakpoints.down("md")]: {
    width: "35px",
    height: "48px",
  },
}));

export const LogoContainer = styled(Link)(({ theme, image }) => ({
  textDecoration: "none",
  color: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const HLine = styled("hr")(({ theme, image }) => ({
  width: "100%",
  color: "black",
}));

export const ButtonBase = styled(Stack)(({ theme, image }) => ({
  width: 50,
  height: 50,
  background: "white",
  color: "black",
  borderRadius: "50%",
  fontWeight: "bold",
  fontSize: "25px",
  cursor: "pointer",
  "&:hover": {
    background: "black",
    color: "white",
  },
}));

// -------------------------------------------------------- Responsive Components

export const SubNavListMobile = styled("ul")(({ theme, image }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
}));

export const SubNavItemMobile = styled("li")(({ theme, image }) => ({
  listStyle: "none",
  paddingTop: "15px",
}));

export const SubNavLinkMobile = styled(NavLink)(({ theme, image }) => ({
  textDecoration: "none",
  color: "#001e3a",
}));

export const SubNavTextMobile = styled(Stack)(({ theme, image }) => ({
  display: "flex",
  alignItems: "left",
}));

export const SubNavListMobileL3 = styled("ul")(({ theme, image }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
}));

export const SubNavItemMobileL3 = styled("li")(({ theme, image }) => ({
  listStyle: "none",
  paddingTop: "15px",
}));

export const SubNavLinkMobileL3 = styled(NavLink)(({ theme, image }) => ({
  textDecoration: "none",
  color: "#001e3a",
}));

export const SubNavTextMobileL3 = styled(Stack)(({ theme, image }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "left",
}));

// -------------------------------------------------------- Main Component

function Navbar() {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [hover, setHover] = useState(false);
  const [menuid, setMenuid] = useState(0);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleMouseEnter = (id) => {
    setMenuid(id);
    setHover(true);
  };

  const handleMouseLeaves = () => {
    setHover(false);
  };

  const handleClickOpen = (id) => {
    setMenuid(id);
    setClick(!click);
  };

  const handleCickClose = () => {
    setClick(false);
  };

  const handleSubMenuOpen = (id) => {
    setMenuid(id);
    setClick1(!click);
  };

  const handleSubMenuClose = () => {
    setClick1(false);
  };

  // ---------------------------------------------------------- Scrolling
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

  // --------------------------------------------------------------- Scrolling
  const { pathname } = useLocation();

  const infor = pathname === "/services/enterprise-software/erp/infor";
  const sap = pathname === "/services/enterprise-software/erp/SAP";
  const oracle = pathname === "services/enterprise-software/erp/infor";
  const Alliances = pathname === "/our-alliances";
  const contact = pathname === "/contact-us";

  const clickCondition = "";
  const hoverContion = "";

  return (
    <MainHeader condition={hover}>
      <LogoContainer to="/home">
        <Logo src={KTLogo} alt="Kapil Techlogoies Pvt ltd" />
      </LogoContainer>

      <MainNavList>
        {NavData.map((item) => (
          <MainNavItem key={item.id}>
            {item.path ? (
              <MainNavLink
                to={item.path}
                condition={hover}
                Infor={infor || Alliances || contact }
                onClick={handleMouseLeaves}
              >
                {item.title}
              </MainNavLink>
            ) : (
              <MainNavTextContainer
                direction="row"
                alignItems="center"
                justifyContent="center"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onClick={() => {
                  handleSubMenuOpen(item.id);
                }}
                condition={hover}
                Infor={infor || Alliances || contact }
              >
                <MainNavText variant="body1" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </MainNavText>
                {window.innerWidth > 900
                  ? item.submenu && hover && menuid === item.submenudata
                    ? item.openicon
                    : item.submenu
                    ? item.closeicon
                    : null
                  : null}
              </MainNavTextContainer>
            )}
            {window.innerWidth > 900 ? (
              item.submenu && hover && menuid === item.submenudata ? (
                <SubNavList condition={menuid === 2} Hover={hover}>
                  {menuid === 2 ? (
                    <Stack
                      direction="column"
                      alignItems="left"
                      spacing={1}
                      sx={{ py: 0.5, px: 2 }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ width: "100%" }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {item.title}
                        </Typography>
                        <ButtonBase
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                          onClick={handleMouseLeaves}
                        >
                          <CloseMenu />
                        </ButtonBase>
                      </Stack>
                      <HLine />
                      {item.submenu.map((item) => (
                        <Fragment key={item.id}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="left"
                              spacing={2}
                              sx={{ width: "500px" }}
                            >
                              <img
                                src={item.icon}
                                width="50px"
                                height="50px"
                                style={{ filter: "saturate(500%)" }}
                              />
                              <Typography
                                variant="body1"
                                sx={{ fontWeight: "bold" }}
                              >
                                {item.Mtitle}
                              </Typography>
                            </Stack>
                            <Grid container columnGap={1} rowGap={1} sx={{}}>
                              {item.menu3.map((item) => (
                                <Grid key={item.id} item xs={3.5}>
                                  {item.path ? (
                                    <SubNavLink
                                      to={item.path}
                                      onClick={handleMouseLeaves}
                                    >
                                      {item.title}
                                    </SubNavLink>
                                  ) : (
                                    <SubNavText>{item.title}</SubNavText>
                                  )}
                                </Grid>
                              ))}
                            </Grid>
                          </Stack>
                          <HLine />
                        </Fragment>
                      ))}
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Solutions
                      </Typography>
                      <HLine />
                      <Grid container columnGap={1} rowGap={1} sx={{}}>
                        {Solutions.map((item) => (
                          <Grid key={item.id} item xs={2}>
                            {item.path ? (
                              <SubNavLink
                                to={item.path}
                                onClick={() => handleMouseLeaves()}
                              >
                                {item.title}
                              </SubNavLink>
                            ) : (
                              <SubNavText>{item.title}</SubNavText>
                            )}
                          </Grid>
                        ))}
                      </Grid>
                    </Stack>
                  ) : menuid === 3 || 5 ? (
                    item.submenu.map((item) => (
                      <SubNavItem key={item.id}>
                        {item.path ? (
                          <SubNavLink
                            to={item.path}
                            onClick={() => handleMouseLeaves()}
                            target={item.target}
                          >
                            {item.title}
                          </SubNavLink>
                        ) : (
                          <SubNavText>{item.title}</SubNavText>
                        )}
                      </SubNavItem>
                    ))
                  ) : null}
                </SubNavList>
              ) : null
            ) : null}
          </MainNavItem>
        ))}
      </MainNavList>

      <ResponsiveMenu
        onClick={handleClickOpen}
        display="flex"
        alignItems="center"
        justifyContent="center"
        condition={click}
      >
        {click ? <CloseMenu /> : <Menu />}
      </ResponsiveMenu>
    </MainHeader>
  );
}

export default Navbar;
