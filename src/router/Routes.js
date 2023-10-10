import React from "react";
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


// -------------------------------------------------------------------------------------


function Routes() {
  const HostName = window.location.hostname;

  console.log(HostName);

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

        {
          path: "/about-us",
          children: [
            {
              path: "our-story",
              element: <About />,
              index: true,
            },
            {
              path: "/about-us",
              element: <Navigate to="/about-us/our-story" exact replace />,
            },

            {
              path: "our-battalion",
              element: <About />,
            },

            {
              path: "our-alliances",
              element: <Patners />,
            },
          ],
        },

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

        {
          path: "/solutions",
          children: [
            {
              path: "k-mobillor",
              element: <Careers />,
              index: true,
            },
            {
              path: "k-mobillor",
              element: <Navigate to="/solution/K-mobillor" exact replace />,
            },
          ],
        },
        // --------------------------------------------------------------------- SERVICES
        {
          path: "/services",
          children: [
            {
              path: "/services",
              element: (
                <Navigate to="/services/digital/:digital " exact replace />
              ),
            },
            // ---------------------------------------------------------- Digital
            {
              path: "digital/:page",
              // element: <Consulting />,
              index: true,
            },

            // ---------------------------------------------------------- Application devlopemnt

            {
              path: "application-development/:page",
              // element: <Consulting />,
            },
            // ---------------------------------------------------------- Cloud
            {
              path: "cloud/cloud-services",
              element: <CloudServices />,
            },
            // ---------------------------------------------------------- Enterprice Solutions
            {
              path: "enterprise-software/erp",
              element: <Erp />,
            },

            {
              path: "enterprise-software/:page/infor",
              element: <Infor />,
            },
            {
              path: "enterprise-software/:page/SAP",
              element: <SAP />,
            },
            {
              path: "enterprise-software/:page/oracle",
              element: <SAP />,
            },
            {
              path: "enterprise-software/digital-content-management",
              element: <DigitalContent />,
            },
          ],
        },

        {
          path: "/contact-us",
          element: <Contact />,
        },

        // {
        //   path: "/our-alliances",
        //   element: <Patners />,
        // },

        {
          path: "privacy-policy",
          element: <Ppolicy />,
        },
      ],
    },
  ]);
}

export default Routes;
