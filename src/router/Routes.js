import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import About from "../pages/About";
import Consulting from "../pages/Consulting";
import Erp from "../pages/ERP/Erp";
import ERPLayout from "../pages/ERP/ERPLayout";
import GlobalPresence from "../pages/GlobalPresence";
import NotFound from "../components/NotFound";
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
              element: <About />,
            },
            {
              path: "our-alliances",
              element: <About />,
            },
          ],
        },

        {
          path: "/services",
          children: [
            {
              path: "digital/:digital",
              element: <Consulting />,
              index: true,
            },
            {
              path: "/services",
              element: (
                <Navigate to="/services/digital/:digital " exact replace />
              ),
            },
            {
              path: "cloud/:cloud",
              element: <Consulting />,
            },

            {
              path: "application-development-and-maintainance/:page",
              element: <Consulting />,
            },
            {
              path: "enterprise-software/:page",
              element: <Erp />,
            },
            {
              path: "enterprise-software/:page/:subpage",
              element: <ERPLayout />,
            },
          ],
        },
        {
          path: "/solutions",
          children: [
            {
              path: ":page",
              element: <Consulting />,
              index: true,
            },
            {
              path: ":page",
              element: <Navigate to="/consulting/:page" exact replace />,
            },
          ],
        },

        {
          path: "/contact",
          children: [
            {
              path: "contact-us",
              element: <Contact />,
              index: true,
            },
            {
              path: "our-global-presence",
              element: <GlobalPresence />,
            
            },

            {
              path: ":page",
              element: <Navigate to="/contact/contact-us" exact replace />,
            },
          ],
        },

        {
          path: "careers",
          element: <Careers />,
        },
      ],
    },
  ]);
}

export default Routes;
