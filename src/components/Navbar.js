import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import KapilLogo from "../assets/Logo/KTlogo2.png";
import { NavData } from "../mock/NavbarData";
import InforAlliancePartner from "../assets/Partners/Infor Logos/inforAPTransperant2.png";

// -------------------------------------------------------------  Styled Components

export const MainContainer = styled("header")(({ theme, scroll }) => ({
  width: "100%",
  height: "15vh",
  background: "transperant",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  zIndex: 9999,
  backdropFilter: scroll ? "blur(5px)" : null,
  WebkitBackdropFilter: scroll ? "blur(5px)" : null,
  top: scroll ? "-100%" : 0,

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
    // xlarge
  },
}));

// ----------------------------------------------------- Logo Components

export const LogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
}));

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
  
}));

export const MainNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "15px",
}));

export const MainNavLink = styled(NavLink)(({ theme, condition }) => ({
  textDecoration: "none",
  textTransform: "uppercase",
  color: condition ? "#162438" : "white",
}));

export const MainNavText = styled("div")(({ theme, condition }) => ({
  textTransform: "uppercase",
  color: condition ? "#162438" : "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  cursor: "pointer",
}));

// level 2

export const SubNavList = styled("ul")(({ theme, condition }) => ({
  position: "fixed",
  width: "auto",
  top: "10vh",
  background: condition ? "#162438" : "white",
  // padding: "5px",
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

export const SubNavList1 = styled("ul")(({ theme }) => ({}));

export const SubNavItem1 = styled("li")(({ theme }) => ({}));

export const SubNavLink1 = styled(NavLink)(({ theme }) => ({}));

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
    setHoverMenuid(id);
    setHover(!Hover);
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

  return (
    <MainContainer className="MainHeader" scroll={scrollData}>
      <RespContainer onClick={handleOpenMainMenu}>
        {MainMenuOpen ? <MenuClose /> : <MenuOpen />}
      </RespContainer>
      <LogoContainer to="/home">
        <Logo src={KapilLogo} alt="Kapil Technologies" />
      </LogoContainer>
      <MainNavList>
        {NavData.map((item) => (
          <MainNavItem>
            {item.path ? (
              <MainNavLink to={item.path} condition={Infor}>
                {item.title}
              </MainNavLink>
            ) : isMobile || isTab ? (
              <MainNavText>
                <Typography variant="body">{item.title}</Typography>
              </MainNavText>
            ) : isDesktop || isLargeScreen || isXLarge ? (
              <MainNavText
                onMouseEnter={() => handleMouseEnters(item.id)}
                onMouseLeave={handleMouseDelayLeave}
                condition={Infor}
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
                <SubNavList condition={Infor} >
                  {item.submenu.map((item) => (
                    <SubNavItem>
                      {item.path ? (
                        <SubNavLink
                          to={item.path}
                          onClick={handleMouseLeaves}
                          condition={Infor}
                        >
                          {item.title}
                        </SubNavLink>
                      ) : (
                        <SubNavText condition={Infor}>
                          <Typography variant="body">{item.title}</Typography>
                        </SubNavText>
                      )}
                    </SubNavItem>
                  ))}
                </SubNavList>
              ) : null
            ) : null}
          </MainNavItem>
        ))}
      </MainNavList>

      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ p:2 }}
      >
        <InforLogo
          src={InforAlliancePartner}
          alt="Kapil Technologies and Infor Alliance Partner "
        />
      </Stack> */}
    </MainContainer>
  );
}

export default Navbar;
