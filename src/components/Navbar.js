import React, { Fragment, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import KTLogo from "../assets/Logo/KTlogo.png";
import { JoinUsData, NavData, Services, Solutions } from "../mock/NavbarData";
import ServiceIcon from "../assets/IconImages/Services.png";
import SolutionIcon from "../assets/IconImages/solutions.png";

// -------------------------------------------------------- Styled Component

export const UpArrow = styled(FiChevronUp)(({ theme, image }) => ({}));

export const DownArrow = styled(FiChevronDown)(({ theme, image }) => ({}));

export const Menu = styled(FiMenu)(({ theme, image }) => ({}));

export const CloseMenu = styled(FiX)(({ theme, image }) => ({}));

export const RightArrow = styled(FiArrowRight)(({ theme, image }) => ({}));

export const MainHeader = styled("header")(
  ({ InforColor, theme, image, topvisibile, Hover }) => ({
    width: "100%",
    height: "15vh",
    background: Hover ? "whitesmoke" : "transperant",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: Hover ? "fixed" : "absolute",
    // top: topvisibile ? 0 : "-15vh",
    zIndex: 999,
    [theme.breakpoints.down("md")]: {
      // background: "#012c54",
      position: "fixed",
    },
    // border:'1px solid white'
  })
);

export const MainNavList = styled("ul")(({ theme, image, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    top: "15vh",
    background: "whitesmoke",
    display: "block",
    width: "100%",
    height: "100%",
    left: open ? "0" : "-1000%",
  },
}));

export const MainNavItem = styled("li")(({ theme, image }) => ({
  listStyle: "none",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "15px",
  },
}));

export const MainNavLink = styled(NavLink)(
  ({ theme, image, homeColor, sapColor, careers, Hover, Infor, Contact }) => ({
    textDecoration: "none",
    // color: homeColor || sapColor || careers ? "white" : "#012c54",
    color: Hover || Infor || Contact ? "#012c54" : "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      color: "red",
    },
    "&.active": {
      color: "red",
    },
    [theme.breakpoints.down("md")]: {
      color: "#012c54",
      "&:hover": {
        color: "red",
        fontWeight:'bold'
      },
    },
  })
);

export const MainNavText = styled(Stack)(
  ({ theme, image, condition, Hover, Infor, Contact }) => ({
    // color: condition ? "white" : "#012c54",
    color: Hover || Infor || Contact ? "#012c54" : "white",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
    },

    [theme.breakpoints.down("md")]: {
      color: "#012c54",
    },
  })
);

export const SubNavList = styled("ul")(({ theme, image, mainid }) => ({
  position: "fixed",
  background: "whitesmoke",
  width: "100%",
  borderTop: "1px solid #012c54",
  right: 0,
  top: "15vh",
  height: mainid === 4 ? "10vh" : "85vh",
  overflowY: mainid === 4 ? "" : "scroll",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SubNavItem = styled("li")(({ theme, image }) => ({
  listStyle: "none",
  padding: "10px",
  display: "flex",
}));

export const SubNavLink = styled(NavLink)(({ theme, image }) => ({
  textDecoration: "none",
  color: "black",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: 'bold',
  fontFamily: theme.typography.fontFamily,
  "&:hover": {
    textDecoration: "underline",
    color: "red",
  },

  "&.active": {
    color: "red",
    fontWeight:'bold'
  },
}));

export const ResponsiveMenu = styled(Stack)(({ theme, image, condition }) => ({
  color: condition ? "white" : "#012c54",
  display: "none",
  fontSize: "28px",
  // padding: "10px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "block",
    padding: "10px",
  },
}));

export const Logo = styled("img")(({ theme, image }) => ({
  width: "53px",
  height: "72px",
  padding: "5px",
  [theme.breakpoints.down("md")]: {
    width: "45px",
    height: "62px",
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
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const SubNavItemMobile = styled("li")(({ theme, image }) => ({}));

export const SubNavLinkMobile = styled(NavLink)(({ theme, image }) => ({}));

export const SubNavTextMobile = styled(Stack)(({ theme, image }) => ({}));

// -------------------------------------------------------- Main Component

function Navbar() {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [SubMenuHover, setSubMenuHover] = useState(false);
  const [menuid, setMenuid] = useState(0);
  const [Submenuid, setSubmenuid] = useState(0);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleMouseEnter = (id) => {
    console.log(id);
    setMenuid(id);
    setHover(true);
  };

  const handleMouseLeaves = () => {
    setHover(false);
  };

  const handleClickOpen = () => {
    setClick(!click);
  };

  const handleCickClose = () => {
    setClick(false);
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

  const handleSubMouseEnter = (id) => {
    console.log(id);
    setSubmenuid(id);
    setHover(true);
  };

  const handleSubMouseLeaves = () => {
    setHover(false);
  };

  const infor =
    pathname === "/what-we-do/services/enterprise-software/erp/infor";
  const sap = pathname === "/what-we-do/services/enterprise-software/erp/SAP";
  const oracle =
    pathname === "/what-we-do/services/enterprise-software/erp/infor";
  const home = pathname === "/home";
  const contact = pathname === "/contact-us";

  return (
    <MainHeader topvisibile={visible} Hover={hover} onMouseEnter={handleMouseLeaves}>
      <LogoContainer to="/home">
        <Logo src={KTLogo} alt="Kapil Techlogoies Pvt ltd" />
      </LogoContainer>
      <MainNavList open={click} className="NavList">
        {NavData.map((item) => (
          <MainNavItem key={item.id}>
            {item.path ? (
              <MainNavLink
                to={item.path}
                onMouseEnter={handleMouseLeaves}
                // onClick={handleCickClose}

                Contact={contact}
                Infor={infor}
                Hover={hover}
              >
                {item.title}
              </MainNavLink>
            ) : (
              <MainNavText
                alignItems="center"
                direction="row"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onClick={handleClickOpen}
                Hover={hover}
                Infor={infor}
                Contact={contact}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                {item.submenu && hover
                  ? item.openicon
                  : item.submenu
                  ? item.closeicon
                  : null}
              </MainNavText>
            )}
            {/* {item.submenu && click ? (
              <SubNavListMobile>
                {item.submenu.map((item) => (
                  <Stack direction="row" alignItems="center"  onClick={handleClickOpen}>
                    <img
                      src={item.mainIcon}
                      alt="Kapil Technology Services"
                      height="15px"
                      width="auto"
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.Mtitle}
                    </Typography>
                    {item.menu3 && click
                      ? item.closeicon
                      : item.menu3
                      ? item.openicon
                      : null}
                  </Stack>
                ))}
              </SubNavListMobile>
            ) : null} */}

            {item.submenu && hover && menuid === 2 ? (
              <SubNavList>
                <Stack
                  direction="column"
                  alignItems="left"
                  justifyContent="center"
                  spacing={1}
                  sx={{ p: 2 }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <img
                        src={ServiceIcon}
                        alt="Kapil Technology Services"
                        height="30px"
                        width="auto"
                      />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                      >
                        Services
                      </Typography>
                    </Stack>

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

                  <Stack
                    direction="column"
                    alignItems="left"
                    justifyContent="left"
                  >
                    {Services.map((item) => (
                      <Fragment>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{ width: "100%", py: 1 }}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{ width: "30%" }}
                          >
                            <img
                              src={item.icon}
                              alt="Services"
                              width="30px"
                              height="30px"
                            />
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {item.Mtitle}
                            </Typography>
                          </Stack>

                          <Grid
                            container
                            columnGap={1}
                            rowGap={1}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "left",
                            }}
                          >
                            {item.menu3.map((item) => (
                              <Grid
                                xs={3.5}
                                sx={{ px: 1 }}
                                key={item.id}
                                onClick={handleMouseLeaves}
                              >
                                {item.path ? (
                                  <SubNavLink to={item.path} on>
                                    {item.title}
                                    {SubMenuHover ? <RightArrow /> : null}
                                  </SubNavLink>
                                ) : (
                                  <Typography variant="body2">
                                    {item.title}
                                  </Typography>
                                )}
                              </Grid>
                            ))}
                          </Grid>
                        </Stack>
                        <HLine />
                      </Fragment>
                    ))}
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: "10px" }}
                  >
                    <img
                      src={SolutionIcon}
                      alt="Kapil Technology Services"
                      height="30px"
                      width="auto"
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      Solutions
                    </Typography>
                  </Stack>
                  <HLine />

                  <Grid container columnGap={2} rowGap={2}>
                    {Solutions.map((item) => (
                      <SubNavItem component={Grid} item xs={3}>
                        {item.path ? (
                          <SubNavLink
                            to={item.path}
                            target={item.title === "Infor" ? "_blank" : null}
                            onClick={handleMouseLeaves}
                          >
                            {item.title}
                          </SubNavLink>
                        ) : (
                          <Typography variant="body2">{item.title}</Typography>
                        )}
                      </SubNavItem>
                    ))}
                  </Grid>

                  <HLine />
                </Stack>
              </SubNavList>
            ) : item.submenu && hover && menuid === 4 ? (
              <SubNavList mainid={menuid}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ padding: "10px" }}
                >
                  {JoinUsData.map((item) => (
                    <SubNavItem to={item.id}>
                      {item.path ? (
                        <SubNavLink to={item.path} onClick={handleMouseLeaves}>
                          {item.title}
                        </SubNavLink>
                      ) : (
                        <Typography variant="body1">{item.title}</Typography>
                      )}
                    </SubNavItem>
                  ))}
                </Stack>
              </SubNavList>
            ) : null}
          </MainNavItem>
        ))}
      </MainNavList>
      <ResponsiveMenu
        onClick={handleClickOpen}
        // condition={home || sap || careers}
      >
        {click ? <CloseMenu /> : <Menu />}
      </ResponsiveMenu>
    </MainHeader>
  );
}

export default Navbar;
