import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import About from "../pages/About/About";
import Consulting from "../pages/Consulting";
import Erp from "../pages/ERP/Erp";
import NotFound from "../components/NotFound";
import Patners from "../pages/About/Patners";
import Ppolicy from "../pages/About/Ppolicy";
import Infor from "../pages/ERP/Infor";
import SAP from "../pages/ERP/SAP";
// import Industries from "../pages/Industries/Industries";

function Routes() {
  const HostName = window.location.hostname
  
  console.log(HostName)

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
          path: "/what-we-do",
          children: [
            {
              path: "/what-we-do",
              element: (
                <Navigate to="/what-we-do/services/digital/:digital " exact replace />
              ),
            },
            // Digital
            // {
            //   path: "digital/:digital",
            //   element: <Consulting />,
            //   index: true,
            // },

            // Application devlopemnt
            {
              path: "services/application-development/:page",
              element: <Consulting />,
            },
            // Cloud
            {
              path: "services/cloud/:page",
              element: <Consulting />,
            },
            // Enterprice Solutions
            {
              path: "services/enterprise-software/erp",
              element: <Erp />,
            },

          
            {
              path: "services/enterprise-software/:page/infor",
              element: <Infor />,
            },
            {
              path: "services/enterprise-software/:page/SAP",
              element: <SAP />,
            },
            {
              path: "ervices/enterprise-software/:page/oracle",
              element: <SAP />,
            },
            
          ],
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
