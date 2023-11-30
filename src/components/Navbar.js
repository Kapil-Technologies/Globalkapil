import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import KapilLogo from "../assets/Logo/KTlogo2.png";
import { NavData } from "../mock/NavbarData";
import InforAlliancePartner1 from "../assets/Partners/Infor Logos/inforAPTransperant2.png";
import InforAlliancePartner2 from "../assets/Partners/Infor.png";
import LOGO from "./common/LOGO";

// -------------------------------------------------------------  Styled Components

export const MainContainer = styled("header")(
  ({ theme, scroll, condition }) => ({
    width: "100%",
    height: scroll ? "12vh" : "15vh",
    background: condition
      ? "#efefef"
      : scroll
      ? "rgba(22, 36, 56,0.8)"
      : "transperant",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 9999,
    backdropFilter: scroll ? "blur(5px)" : null,
    WebkitBackdropFilter: scroll ? "blur(5px)" : null,

    [theme.breakpoints.between("xs", "sm")]: {
      //  mobile
    },

    [theme.breakpoints.between("sm", "md")]: {
      // tab
    },

    [theme.breakpoints.between("md", "lg")]: {
      // Desktop
    },

    [theme.breakpoints.up("xl")]: {
      height: "10vh",
    },
  })
);

// ----------------------------------------------------- Logo Components

export const LogoContainer = styled(Link)(
  ({ theme, scroll, Infor, condition }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    textDecoration: "none",
    fontSize: "28px",
    color: scroll ? "black" : Infor ? "white" : "white",
    // color: condition ? "white" :"black",
  })
);

export const Logo = styled("img")(({ theme }) => ({
  width: "53px",
  height: "72px",
}));

export const InforLogo = styled("img")(({ theme }) => ({
  width: "auto",
  height: "50px",
}));

// ----------------------------------------------------- Responsive  Components

export const RespContainer = styled(Stack)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  fontSize: "30px",
  color: "white",
  cursor: "pointer",

  [theme.breakpoints.between("xs", "sm")]: {
    //  mobile
    display: "flex",
  },

  [theme.breakpoints.between("sm", "md")]: {
    // tab
    display: "flex",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
    display: "none",
  },

  [theme.breakpoints.up("xl")]: {
    // xlarge
    display: "none",
  },
}));

export const MenuOpen = styled(FiMenu)(({ theme }) => ({}));
export const MenuClose = styled(FiX)(({ theme }) => ({}));

// ----------------------------------------------------- NavList  Components

export const MainNavList = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  // background:'blue'
}));

export const MainNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "15px",
  cursor: "pointer",
}));

export const MainNavLink = styled(NavLink)(
  ({ theme, Infor, scroll, hover }) => ({
    textDecoration: "none",
    textTransform: "uppercase",
    // color: Infor || hover ? "#162438" : Infor && scroll ? "white" : "#162438",
    color: (Infor && !scroll) || hover ? "#162438" : "white",
  })
);

export const MainNavText = styled("div")(({ theme, Infor, scroll, hover }) => ({
  textTransform: "uppercase",
  // color: Infor || hover ? "#162438" : Infor && scroll ? "white" : "#162438",
  color: (Infor && !scroll) || hover ? "#162438" : "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  cursor: "pointer",
}));

// level 2

export const SubNavList = styled("ul")(({ theme, condition, scroll }) => ({
  position: "fixed",
  width: "auto",
  top: "10vh",
  background: "#EFEFEF",
  width: condition ? "100%" : "auto",
  right: condition ? 0 : null,
  height: condition ? "300px" : null,
  top: scroll ? "12vh" : "15vh",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: condition ? null : "column",
  // padding: "5px",

  [theme.breakpoints.up("xl")]: {
    top: "10vh",
  },
}));

export const SubNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  paddingTop: "15px",
  paddingRight: "15px",
  paddingBottom: "15px",
  paddingLeft: "10px",
  textAlign: "left",
}));

export const SubNavLink = styled(NavLink)(({ theme, condition }) => ({
  textDecoration: "none",
  color: condition ? "white" : "#162438",
}));

export const SubNavText = styled("div")(({ theme, condition }) => ({
  color: condition ? "white" : "#162438",
}));

// Level 3

export const SubNavList1 = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
}));

export const SubNavItem1 = styled("li")(({ theme }) => ({
  listStyle: "none",
  paddingBottom: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
}));

export const RightArrow = styled(FiArrowRight)(({ theme }) => ({
  paddingTop: "3px",
  color: "#56c3f3",
  fontWeight: "bold",
}));

export const SubNavText1 = styled("div")(({ theme }) => ({}));

// -------------------------------------------------------------  Main  Components

function Navbar() {
  // ------------------------------------------------------------- Media Quires

  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const isLargeScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );

  const isXLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // ------------------------------------------------------------- States

  const [Hover, setHover] = useState(false);

  const [hoverMenuid, setHoverMenuid] = useState(0);

  const [ClickMenuid, setClickMenuid] = useState(0);

  const [Submenu1Open, setSubmenu1Open] = useState(false);

  const [Submenu2Open, setSubmenu2Open] = useState(false);

  const [MainMenuOpen, setMainMenuOpen] = useState(false);

  const [MainMenuOpen1, setMainMenuOpen1] = useState(false);

  const [MainMenuOpen2, setMainMenuOpen2] = useState(false);

  // ------------------------------------------------------------- Hover Functions

  const handleMouseEnters = (id) => {
    console.log(id);
    setHoverMenuid(id);
    setHover(true);
  };

  const handleMouseLeaves = () => {
    setHover(false);
  };

  const handleMouseDelayLeave = () => {
    setTimeout(() => {
      setHover(false);
    }, 1000);
  };

  // ------------------------------------------------------------- Click Functions

  const handleOpenMainMenu = () => {
    setMainMenuOpen(!MainMenuOpen);
  };

  const handleCloseMainMenu = () => {
    setMainMenuOpen(false);
  };

  // ------------------------------------------------------------- Other Functions
  const [scrollData, setScrollData] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 80) {
      setScrollData(true);
    } else {
      setScrollData(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const { pathname } = useLocation();

  const Infor = pathname === "/services/infor-consulting-services";
  const SAP = pathname === "/services/managed-services-of-sap";

  const HoverCondition =
    (Hover && hoverMenuid === 2) ||
    (Hover && hoverMenuid === 3) ||
    (Hover && hoverMenuid === 4);

  return (
    <MainContainer
      className="MainHeader"
      scroll={scrollData}
      condition={HoverCondition}
      onMouseLeave={handleMouseLeaves}
    >
      <RespContainer onClick={handleOpenMainMenu}>
        {MainMenuOpen ? <MenuClose /> : <MenuOpen />}
      </RespContainer>
      <LogoContainer to="/home" scroll={HoverCondition} Infor={Infor || SAP}>
        <Logo src={KapilLogo}   />
      </LogoContainer>

      <MainNavList>
        {NavData.map((item) => (
          <MainNavItem
            key={item.id}
            onMouseEnter={() => handleMouseEnters(item.id)}
          >
            {item.path ? (
              <MainNavLink
                to={item.path}
                Infor={Infor || SAP}
                scroll={scrollData}
                hover={HoverCondition}
              >
                {item.title}
              </MainNavLink>
            ) : isMobile || isTab ? (
              <MainNavText>
                <Typography variant="body">{item.title}</Typography>
              </MainNavText>
            ) : isDesktop || isLargeScreen || isXLarge ? (
              <MainNavText
                // onMouseLeave={handleMouseDelayLeave}
                Infor={Infor || SAP}
                scroll={scrollData}
                hover={HoverCondition}
              >
                <Typography variant="body">{item.title}</Typography>

                {item.submenu && Hover && item.submenudata === hoverMenuid
                  ? item.openicon
                  : item.submenu
                  ? item.closeicon
                  : null}
              </MainNavText>
            ) : null}
            {isMobile || isTab ? (
              item.submenu &&
              MainMenuOpen1 &&
              item.submenudata === ClickMenuid ? (
                <SubNavList>s</SubNavList>
              ) : null
            ) : null}
            {isDesktop || isLargeScreen || isXLarge ? (
              item.submenu && Hover && item.submenudata === hoverMenuid ? (
                <SubNavList
                  condition={item.submenudata === 3}
                  scroll={scrollData}
                  onMouseLeave={handleMouseLeaves}
                  className="MainHeader"
                >
                  {item.submenudata === 3 ? (
                    <Stack
                      direction="row"
                      alignItems="start"
                      justifyContent="space-between"
                      sx={{ width: "95%", py: 2 }}
                    >
                      <Typography variant="h5" sx={{ color: "#56C3F3" }}>
                        Services We Provide
                      </Typography>

                      {item.submenu.map((item) => (
                        <Stack
                          direction="column"
                          alignItems="left"
                          justifyContent="left"
                          spacing={1.5}
                          key={item.id}
                        >
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {item.title}
                          </Typography>

                          <SubNavList1>
                            {item.submenu.map((item) =>
                              item.submenul3 === 2 ? (
                                <SubNavItem1>
                                  <Stack
                                    direction="column"
                                    alignItems="left"
                                    justifyContent="left"
                                    spacing={1}
                                  >
                                    <Typography
                                      variant="h6"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                      {item.title}
                                    </Typography>

                                    {item.submenu.map((item) => (
                                      <Stack
                                        direction="column"
                                        alignItems="left"
                                        justifyContent="left"
                                      >
                                        {item.path ? (
                                          <Stack
                                            direction="row"
                                            alignItems="left"
                                            justifyContent="left"
                                            spacing={1}
                                            to={item.path}
                                            component={Link}
                                            sx={{
                                              textDecoration: "none",
                                              color: "black",
                                            }}
                                            onClick={handleMouseLeaves}
                                          >
                                            <RightArrow />
                                            <Typography variant="body1">
                                              {item.title}
                                            </Typography>
                                          </Stack>
                                        ) : (
                                          <Stack
                                            direction="row"
                                            alignitems="left"
                                            justifyContent="left"
                                            spacing={1}
                                          >
                                            <RightArrow />
                                            <Typography variant="body1">
                                              {item.title}
                                            </Typography>
                                          </Stack>
                                        )}
                                      </Stack>
                                    ))}
                                  </Stack>
                                </SubNavItem1>
                              ) : (
                                <SubNavItem1>
                                  {item.path ? (
                                    <Stack
                                      direction="row"
                                      alignItems="center"
                                      justifyContent="start"
                                      spacing={1}
                                      to={item.path}
                                      component={Link}
                                      sx={{
                                        textDecoration: "none",
                                        color: "black",
                                      }}
                                      onClick={handleMouseLeaves}
                                    >
                                      <RightArrow />
                                      <Typography variant="body1">
                                        {item.title}
                                      </Typography>
                                    </Stack>
                                  ) : (
                                    <Stack
                                      direction="row"
                                      alignitems="center"
                                      justifyContent="center"
                                      spacing={1}
                                    >
                                      <RightArrow />
                                      <Typography variant="body1">
                                        {item.title}
                                      </Typography>
                                    </Stack>
                                  )}
                                </SubNavItem1>
                              )
                            )}
                          </SubNavList1>
                        </Stack>
                      ))}
                    </Stack>
                  ) : item.submenudata === 2 || item.submenudata === 4 ? (
                    item.submenu.map((item) => (
                      <SubNavItem>
                        {item.path ? (
                          <SubNavLink to={item.path}>{item.title}</SubNavLink>
                        ) : (
                          <SubNavText>
                            <Typography variant="body">{item.title}</Typography>
                          </SubNavText>
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

      {!SAP ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ background: "white", marginRight: "10px" }}
        >
          <InforLogo
            src={InforAlliancePartner2}
            alt="Kapil Technologies and Infor Alliance Partner "
          />
        </Stack>
      ) : null}
    </MainContainer>
  );
}

export default Navbar;
