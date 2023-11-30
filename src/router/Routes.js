import React, { useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Careers from "../pages/joinus/Careers";
import About from "../pages/About/About";
// import Consulting from "../pages/Consulting";
import Erp from "../pages/whatwedo/services/enterpricesoftware/ERP/Erp";
import NotFound from "../components/NotFound";
import Patners from "../pages/About/Patners";
import Ppolicy from "../pages/About/Ppolicy";
import Infor from "../pages/whatwedo/services/enterpricesoftware/ERP/Infor";
import SAP from "../pages/whatwedo/services/enterpricesoftware/ERP/SAP";
import Events from "../pages/joinus/Events";
import DigitalContent from "../pages/whatwedo/services/enterpricesoftware/digitalcontent/DigitalContent";
import CloudServices from "../pages/whatwedo/services/cloud/cloudservices/CloudServices";
import { useMediaQuery } from "@mui/material";
import { ViewCount } from "../api/Main";


// -------------------------------------------------------------------------------------


function Routes() {
  // ----------------------------------------------------- Browser Details

  const Browser = navigator.userAgentData.brands[0];

  const BrowserData = `${Browser.brand} | V - ${Browser.version}`;

  // console.log(BrowserData);

  // ----------------------------------------------------- Device Details

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const Desktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const Large = useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));

  const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  let Devices;

  Mobile
    ? (Devices = "Mobile | (0-600px)")
    : Tab
    ? (Devices = "Tab | (600px-900px)")
    : Desktop
    ? (Devices = "Desktop | (900px-1200px)")
    : Large
    ? (Devices = "Large | (1200px-1536px)")
    : XstraLarge
    ? (Devices = "TV | (>1536px)")
    : (Devices = "Devices More Than 1536px");

  // ----------------------------------------------------------------- View Count

  useEffect(() => {
    ViewCount(BrowserData, Devices)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "404",
          element: <NotFound />,
        },
        {
          path: "/",
          element: <Navigate to="/home" exact replace />,
        },

        {
          path: "*",
          element: <Navigate to="/404" exact replace />,
        },

        // ---------------------------------------------Join us
        {
          path: "/join-us",
          children: [
            {
              path: "search-jobs",
              element: <Careers />,
              index: true,
            },
            {
              path: "/join-us",
              element: <Navigate to="/join-us/search-jobs" exact replace />,
            },

            {
              path: "events",
              element: <Events />,
            },
          ],
        },

        // -------------------------------------------------- What we do

        {
          path: "/services",
          children: [
            // --------------------------------------------------- Services
            {
              path: "infor-consulting-services",
              element: <Infor />,
            },
            {
              path: "managed-services-of-sap",
              element: <SAP />,
            },

            // {
            //   path: "services/enterprice-software/oracle",
            //   element: <SAP />,

            // },

            // ---------------------------------------- Solution
          ],
        },

        // -------------------------------------------------- Contact Us

        {
          path: "/contact-us",
          element: <Contact />,
        },
      ],
    },
  ]);
}

export default Routes;
