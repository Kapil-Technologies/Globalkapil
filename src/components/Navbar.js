import React, { Fragment, useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowRight, FiBox, FiMenu, FiX } from "react-icons/fi";
import MainLogo from "../assets/Logo/KTlogo2.png";
import { NavData } from "../mock/NavbarData";
import Media from "react-media";
import { GoDotFill } from "react-icons/go";
import Contact from "../pages/Contact";
import InforAliiancePatrner from '../assets/Partners/Infor Logos/inforAPTransperant2.png'
// ---------------------------------------------------------------- Styled Component

export const MainHeader = styled("header")(
  ({ theme, NavColor, menuopen, visibility }) => ({
    width: "100%",
    height: "15vh",
    position: "fixed",
    background: NavColor || menuopen ? "#162438" : "transperant",
    // top: visibility ?  0 : "-15vh ",
    zIndex: 99999,

    // -----------------------------  Responsive

    [theme.breakpoints.between("xs", "sm")]: {
      // Mobile
      width: "100%",
      height: "15vh",
    },

    [theme.breakpoints.between("sm", "md")]: {
      // tab
      width: "100%",
      height: "10vh",
    },

    [theme.breakpoints.between("md", "lg")]: {
      // Desktop
      width: "100%",
      height: "10vh",
    },

    // [theme.breakpoints.between("lg", "xl")]: {
    //   // large
    // },

    [theme.breakpoints.up("xl")]: {
      // xlarge
      width: "100%",
      height: "10vh",
    },
  })
);

export const MainNav = styled("nav")(({ theme }) => ({
  width: "inherit",
  height: "15vh",
  position: "fixed",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "8vh",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "10vh",
  },

  [theme.breakpoints.up("xl")]: {
    width: "100%",
    height: "10vh",
  },
  [theme.breakpoints.down("xl")]: {
    width: "100%",
    height: "15vh",
  },
}));

//  --------------------------------------------------------  Responsive Components

export const RespContainer = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  fontSize: "30px",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const OpenMenu = styled(FiMenu)(({ theme }) => ({}));

export const CloseMenu = styled(FiX)(({ theme }) => ({}));

//  --------------------------------------------------------  Logo Components

export const LogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "30px",
  paddingBottom: "30px",
  paddingLeft: "10px",
  paddingRight: "10px",
  textDecoration: "none",

  [theme.breakpoints.down("md")]: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  width: "53px",
  height: "72px",

  [theme.breakpoints.down("md")]: {
    width: "45px",
    height: "62px",
  },
}));

//  --------------------------------------------------------  Menu Components

export const MainNavList = styled("ul")(({ theme, menuopen }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MainNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "10px",

  [theme.breakpoints.down("md")]: {
    // mobile,
  },
}));

export const MainNavLink = styled(NavLink)(
  ({ theme, condition, NavColor }) => ({
    textDecoration: "none",
    color: NavColor || !condition ? "white" : "#1C3667",
    textTransform: "uppercase",
    padding: "10px",
    "&:focus": {
      outline: "none",
    },
  })
);

export const MainNavText = styled(Box)(({ theme, condition, NavColor }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  cursor: "pointer",
  color: NavColor || !condition ? "white" : "#1C3667",
}));

export const SubmenuList = styled("ul")(({ theme, condition }) => ({
  width: condition ? "90%" : "auto",
  background: condition ? "white" : "white",
  position: "absolute",
  right: condition ? "5%" : null,
  top: "15vh",
  // height: condition ? "90vh" : null,
  height: "auto",
  borderRadius: "10px",

  [theme.breakpoints.up("xl")]: {
    top: "10vh",
  },
}));

export const SubmenuItem = styled("li")(({ theme, condition }) => ({
  listStyle: "none",
  padding: "10px",
  color: "#1C3667",
}));

export const SubmenuLink = styled(NavLink)(({ theme, condition }) => ({
  textDecoration: "none",
  color: "#1C3667",
  "&:focus": {
    outline: "none",
  },
}));

export const SubmenuText = styled(Box)(({ theme, condition }) => ({
  color: "#1C3667",
  textTransform: condition ? "uppercase" : "capitalize",
  display: "flex",
  alignItems: "center",
  gap: 2,
  cursor: "pointer",
  fontWeight: "bold",
  "&:focus": {
    outline: "none",
  },
}));

export const SubmenuList1 = styled("ul")(({ theme, condition }) => ({
  width: condition ? "90%" : "auto",
  background: condition ? "white" : "white",
  position: "absolute",
  right: condition ? "5%" : null,
  top: "15vh",
  // height: condition ? "90vh" : null,
  height: "auto",
  borderRadius: "10px",

  [theme.breakpoints.up("xl")]: {
    top: "10vh",
  },
}));
export const SubmenuItem1 = styled("li")(({ theme, condition }) => ({
  listStyle: "none",
  width: "100%",
  // padding: "15px",
  color: "#1C3667",
  display: "flex",
  alignItems: "center",
}));

export const SubmenuLink1 = styled(NavLink)(({ theme, condition }) => ({
  textDecoration: "none",
  color: "#1C3667",
  "&:focus": {
    outline: "none",
  },
  // fontWeight:'bold'
}));

export const SubmenuText1 = styled(Box)(({ theme, condition }) => ({
  color: "#1C3667",
  textTransform: condition ? "uppercase" : "capitalize",
  fontWeight: condition ? "bold" : "normal",
}));

export const SubmenuItem2 = styled("li")(({ theme, condition }) => ({
  listStyle: "none",
  width: "100%",
  paddingTop: "15px",
  color: "#1C3667",
  display: "flex",
  alignItems: "center",
}));

export const SubmenuLink2 = styled(NavLink)(({ theme, condition, font }) => ({
  textDecoration: "none",
  color: "#1C3667",
  fontSize: font,
  "&:focus": {
    outline: "none",
  },
  // fontWeight:'bold'
}));

export const SubmenuText2 = styled(Box)(({ theme, condition }) => ({
  color: "#1C3667",
  textTransform: condition ? "uppercase" : "capitalize",
  // fontWeight: "bold",
}));

// ------------------------------------------------------------------------------ Responsive Components

export const MainNavListMobile = styled("ul")(({ theme, menuopen }) => ({
  position: "absolute",
  top: "15vh",
  width: "100%",
  background: "#162438",
  height: "90vh",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
  left: menuopen ? 0 : "-100%",
  overflowX: "hidden",
  overflowY: "scroll",
  // [theme.breakpoints.down("md")]: {
  //   color: "white",
  //   top: "15vh",
  //   background: "#162438",
  //

  // },

  [theme.breakpoints.down("xl")]: {
    // Tablet,
  },

  [theme.breakpoints.up("xl")]: {
    top: "10vh",
  },
}));

export const MainNavItemMobile = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "20px",
  cursor: "pointer",
}));

export const MainNavLinkMobile = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  "&:focus": {
    outline: "none",
  },
}));

export const MainNavTextMobile = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: 2,
}));

export const SubMenuListMobile1 = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
}));
export const SubMenuItemMobile1 = styled("li")(({ theme, condition }) => ({
  listStyle: "none",
  paddingTop: "20px",
  paddingLeft: condition ? "15px" : null,
  // paddingTop: "10px",
  // paddingBottom:'10px'
}));
export const SubMenuLinkMobile1 = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: 2,
  "&:focus": {
    outline: "none",
  },
}));
export const SubMenuTextMobile1 = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: 2,
}));

export const SubMenuListMobile2 = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
  paddingLeft: "15px",
}));
export const SubMenuItemMobile2 = styled("li")(({ theme, condition }) => ({
  listStyle: "none",
  paddingTop: "20px",
}));
export const SubMenuLinkMobile2 = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: 2,
  "&:focus": {
    outline: "none",
  },
}));
export const SubMenuTextMobile2 = styled(Box)(({ theme, condition }) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: 2,
  fontStyle: condition ? "italic" : " normal",
  textTransform: condition ? "uppercase" : "Capitalize",
}));

export const SubMenuListMobile3 = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "column",
}));
export const SubMenuItemMobile3 = styled("li")(({ theme }) => ({
  listStyle: "none",
  paddingTop: "20px",
  width: "100%",
}));
export const SubMenuLinkMobile3 = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  display: "flex",
  alignItems: "center",
  paddingLeft: "15px",
  gap: 2,
  "&:focus": {
    outline: "none",
  },
}));
export const SubMenuTextMobile3 = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: 2,
  paddingLeft: "15px",
}));

// ---------------------------------------------------------------- Main Component

function Navbar({ handleHover }) {
  // Media Quieries

  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const isLarge = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );

  const isXLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // ---------------------------------------------------------------- Quirers

  // scroll
  const [colorChange, setColorChange] = useState(false);

  // mainmenu
  const [open, setOpen] = useState(false);

  // submenu hover
  const [Hover, setHover] = useState(false);

  const [Hover1, setHover1] = useState(false);
  const [Hover2, setHover2] = useState(false);
  const [Hover3, setHover3] = useState(false);

  // submenu1 click
  const [menu1, setmenu1] = useState(false);
  // submenu2 click
  const [menu2, setmenu2] = useState(false);
  // submenu3 click
  const [menu3, setmenu3] = useState(false);

  // ------------------------------------------------------------ Scolling Effect

  const changeNavbarColor = () => {
    if (window.scrollY > 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  // ----------------------------------------------------------------- Scrolling

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  // ------------------------------------------------------------ Main Menu Toggle

  const handleMainMenuToggle = () => {
    setOpen(!open);
  };

  const handleMainMenuClose = () => {
    setOpen(false);
  };

  // ------------------------------------------------------------ submenu Toggle and Hover

  // Hover

  const [menuid, setmenuid] = useState(0);

  const handleMouseEnter = (id) => {
    setmenuid(id);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseEnter1 = (id) => {
    setmenuid(id);
    setHover1(true);
  };

  const handleMouseLeave1 = () => {
    setHover1(false);
  };

  const handleMouseEnter2 = (id) => {
    setmenuid(id);
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  // menu1

  const handleSubmenuOpen1 = (id) => {
    setmenuid(id);
    setmenu1(true);
  };

  const handleSubmenuClose1 = () => {
    setmenu1(false);
  };

  // menu2

  const handleSubmenuOpen2 = (id) => {
    setmenu2(true);
  };

  const handleSubmenuClose2 = () => {
    setmenu2(false);
  };

  // menu3

  const handleSubmenuOpen3 = (id) => {
    setmenu3(true);
  };

  const handleSubmenuClose3 = () => {
    setmenu3(false);
  };

  // ------------------------------------------------------------ submenu Toggle and Hover

  const { pathname } = useLocation();

  const Infor = pathname === "/services/infor-consulting-services";
  const Contactus = pathname === "/contact-us";

  return (
    <MainHeader
      className="MainNav"
      NavColor={colorChange}
      menuopen={open}
      visibility={visible}
      // onMouseEnter={handleMouseLeave}
      // onMouseLeave={handleMouseLeave}
    >
      <MainNav>
        <RespContainer onClick={handleMainMenuToggle} className="MainNav">
          {open ? <CloseMenu /> : <OpenMenu />}
        </RespContainer>
        <LogoContainer to="/home">
          {/* {Infor ? (
            <img src={InforAliiancePatrner} alt="Infor Alliance Partner " height="72px"  />
          ) : (
            <Logo
              src={MainLogo}
              alt="Kapil Technologies , Pt. KCS Technologies, KCS Technologies Inc"
            />
          )} */}
          <Logo
            src={MainLogo}
            alt="Kapil Technologies , Pt. KCS Technologies, KCS Technologies Inc"
          />
          {/* 
          <img
            src={InforAliiancePatrner}
            alt="Infor Alliance Partner "
            height="70px"
          /> */}
        </LogoContainer>

        <MainNavList>
          {NavData.map((item) => (
            <MainNavItem>
              {item.path ? (
                <MainNavLink
                  to={item.path}
                  condition={Infor || Contactus}
                  NavColor={colorChange}
                >
                  {item.title}
                </MainNavLink>
              ) : (
                <MainNavText
                  onClick={() => handleMouseEnter(item.id)}
                  condition={Infor || Contactus}
                  NavColor={colorChange}
                >
                  <Typography variant="body1">{item.title}</Typography>
                  {item.submenu && Hover && item.submenudata === menuid
                    ? item.openicon
                    : item.submenu
                    ? item.closeicon
                    : null}
                </MainNavText>
              )}
              {item.submenu && Hover && item.submenudata === menuid ? (
                <SubmenuList>
                  {item.submenu.map((item) => (
                    <SubmenuItem>
                      {item.path ? (
                        <SubmenuLink to={item.path} onClick={handleMouseLeave}>
                          {item.title}
                        </SubmenuLink>
                      ) : (
                        <SubmenuText onClick={handleMouseLeave}>
                          <Typography variant="body1">{item.title}</Typography>
                          {item.submenu && Hover1 && item.submenudata === menuid
                            ? item.openicon
                            : item.submenu
                            ? item.closeicon
                            : null}
                        </SubmenuText>
                      )}
                    </SubmenuItem>
                  ))}
                </SubmenuList>
              ) : null}
            </MainNavItem>
          ))}
        </MainNavList>

        {/* ------------------------------------------------  Mobile Compactable --------------------- */}

        {isMobile || isTab ? (
          <MainNavListMobile menuopen={open} className="MainNav">
            {NavData.map((item) => (
              <MainNavItemMobile key={item.id}>
                {item.path ? (
                  <MainNavLinkMobile
                    to={item.path}
                    onClick={handleMainMenuClose}
                  >
                    {item.title}
                  </MainNavLinkMobile>
                ) : (
                  <MainNavTextMobile
                    onClick={() => handleSubmenuOpen1(item.id)}
                  >
                    <Typography variant="body1">{item.title}</Typography>
                    {item.submenu && menu1 && item.submenudata === menuid
                      ? item.openicon
                      : item.submenu
                      ? item.closeicon
                      : null}
                  </MainNavTextMobile>
                )}
                {item.submenu && item.submenudata === menuid && menu1 ? (
                  <SubMenuListMobile1>
                    {item.submenu.map((item) => (
                      <SubMenuItemMobile1
                        key={item.id}
                        condition={!item.submenu}
                      >
                        {item.path ? (
                          <SubMenuLinkMobile1
                            to={item.path}
                            onClick={handleMainMenuClose}
                          >
                            <FiBox />
                            {item.title}
                          </SubMenuLinkMobile1>
                        ) : (
                          <SubMenuTextMobile1
                          // onClick={() => handleSubmenuOpen2(item.id)}
                          >
                            {!item.submenu ? <FiBox /> : null}
                            <Typography>{item.title}</Typography>
                            {item.submenu ? <FiArrowRight /> : null}
                          </SubMenuTextMobile1>
                        )}

                        {item.submenu ? (
                          <SubMenuListMobile2>
                            {item.submenu.map((item) => (
                              <SubMenuItemMobile2 key={item.id}>
                                {item.path ? (
                                  <SubMenuLinkMobile2
                                    to={item.path}
                                    target={item.target}
                                    onClick={handleMainMenuClose}
                                  >
                                    <FiBox />
                                    {item.title}
                                  </SubMenuLinkMobile2>
                                ) : (
                                  <SubMenuTextMobile2 condition={item.submenu}>
                                    {item.submenu ? <FiBox /> : <FiBox />}
                                    <Typography variant="body1">
                                      {item.title}
                                    </Typography>
                                  </SubMenuTextMobile2>
                                )}
                                {item.submenu ? (
                                  <SubMenuListMobile3>
                                    {item.submenu.map((item) => (
                                      <SubMenuItemMobile3>
                                        {item.path ? (
                                          <SubMenuLinkMobile3
                                            to={item.path}
                                            onClick={handleMainMenuClose}
                                          >
                                            <GoDotFill />
                                            {item.title}
                                          </SubMenuLinkMobile3>
                                        ) : (
                                          <SubMenuTextMobile3>
                                            <GoDotFill />
                                            <Typography variant="body1">
                                              {item.title}
                                            </Typography>
                                          </SubMenuTextMobile3>
                                        )}
                                      </SubMenuItemMobile3>
                                    ))}
                                  </SubMenuListMobile3>
                                ) : null}
                              </SubMenuItemMobile2>
                            ))}
                          </SubMenuListMobile2>
                        ) : null}
                      </SubMenuItemMobile1>
                    ))}
                  </SubMenuListMobile1>
                ) : null}
              </MainNavItemMobile>
            ))}
          </MainNavListMobile>
        ) : null}
      </MainNav>
    </MainHeader>
  );
}

export default Navbar;
