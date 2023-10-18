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
          path: "/what-we-do",
          children: [
          
          // --------------------------------------------------- Services
            {
              path: "services/enterprice-software/infor",
              element: <Infor />,
             
            },
            {
              path: "services/enterprice-software/sap",
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
