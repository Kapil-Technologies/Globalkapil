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
import JobDescription from "../pages/joinus/Jobdescription";
import JobClosed from "../components/common/JobClosed";
import SAP2 from "../pages/whatwedo/services/enterpricesoftware/ERP/SAP2";
// import SAP2 from "../pages/whatwedo/services/enterpricesoftware/ERP/SAP2";



// -------------------------------------------------------------------------------------


function Routes() {
  // ----------------------------------------------------- Browser Details


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
              path: "application/:jobid",
              element: <JobDescription />,
            },

            {
              path: "application/:jobid/closed",
              element: <JobClosed />,
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
              path: "managed-services-of-infor",
              element: <Infor />,
            },
            {
              path: "sap-consulting-services",
              element: <SAP2 />,
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
