import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import About from "../pages/About/About";
import Consulting from "../pages/Consulting";
import Erp from "../pages/ERP/Erp";
import ERPLayout from "../pages/ERP/ERPLayout";
import GlobalPresence from "../pages/GlobalPresence";
import NotFound from "../components/NotFound";
import Customers from "../pages/About/Customers";
import Patners from "../pages/About/Patners";
import Ppolicy from "../pages/About/Ppolicy";
import Infor from "../pages/ERP/Infor";
// import Industries from "../pages/Industries/Industries";

function Routes() {
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
              path: "our-customers",
              element: <Customers />,
            },
            {
              path: "our-alliances",
              element: <Patners />,
            },
          ],
        },

        {
          path: "/offerings",
          children: [
            {
              path: "/offerings",
              element: (
                <Navigate to="/offerings/digital/:digital " exact replace />
              ),
            },
            // Digital
            {
              path: "digital/:digital",
              element: <Consulting />,
              index: true,
            },

            // Application devlopemnt
            {
              path: "application-development/:page",
              element: <Consulting />,
            },
            // Cloud
            {
              path: "cloud/:page",
              element: <Consulting />,
            },
            // Enterprice Solutions
            {
              path: "enterprise-software/erp",
              element: <Erp />,
            },

            {
              path: "enterprise-software/crm",
              element: <Consulting />,
            },
            {
              path: "enterprise-software/industru-platform",
              element: <Consulting />,
            },
            {
              path: "enterprise-software/ehs",
              element: <Consulting />,
            },
            {
              path: "enterprise-software/digital-content-management",
              element: <Consulting />,
            },
            {
              path: "enterprise-software/:page/:subpage",
              element: <ERPLayout />,
            },
            {
              path: "enterprise-software/:page/oracle",
              element: <Consulting />,
            },
            {
              path: "enterprise-software/:page/infor",
              element: <Infor />,
            },
            {
              path: "solutions/:page",
              element: <Consulting />,
            },
          ],
        },
        // {
        //   path: "/solutions",
        //   children: [
        //     {
        //       path: ":page",
        //       element: <Consulting />,
        //       index: true,
        //     },
        //     {
        //       path: ":page",
        //       element: <Navigate to="/consulting/:page" exact replace />,
        //     },
        //   ],
        // },

        {
          path: "/contact-us/our-global-presence",
          element: <GlobalPresence />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },

        {
          path: "/our-alliances",
          element: <Patners />,
        },

        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "privacy-policy",
          element: <Ppolicy />,
        },
      ],
    },
  ]);
}

export default Routes;
