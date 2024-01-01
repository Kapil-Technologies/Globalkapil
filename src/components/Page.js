import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ViewCount } from "../api/Main";
import { useLocation } from "react-router-dom";
import { Paths } from "../config";

function Page({ name, content, keywords }) {
 
   const { pathname } = useLocation();
   // ----------------------------------------------------- Browser Details

   const Browser = navigator.userAgentData.brands[0];

   const BrowserName = `${Browser.brand}`;

   const BrowserVersion = `V - ${Browser.version}`;

   // console.log(BrowserData);

   // ----------------------------------------------------- Device Details

   const Mobile = useMediaQuery((theme) =>
     theme.breakpoints.between("xs", "sm")
   );
   const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
   const Desktop = useMediaQuery((theme) =>
     theme.breakpoints.between("md", "lg")
   );

   const Large = useMediaQuery((theme) =>
     theme.breakpoints.between("lg", "xl")
   );

   const XstraLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

   let devicesize;
   let deviceViewport;

   // ----------------------------------------------------------------- Pag
   let pagevisited;

   switch (pathname) {
     case Paths.Home:
       pagevisited = "Home";
       break;
     case Paths.Infor:
       pagevisited = "Infor";
       break;
     case Paths.sap:
       pagevisited = "SAP";
       break;
     case Paths.contactus:
       pagevisited = "Contact";
       break;
     case Paths.jobopenings:
       pagevisited = "Job Openings";
       break;
   }

   // ----------------------------------------------------------------- Device

   if (Mobile) {
     devicesize = "Mobile";
     deviceViewport = "0-600px";
   } else if (Tab) {
     devicesize = "Tab";
     deviceViewport = "600px-900px";
   } else if (Desktop) {
     devicesize = "Desktop";
     deviceViewport = "900px-1200px";
   } else if (Large) {
     devicesize = "Large";
     deviceViewport = "1200px-1536px";
   } else if (XstraLarge) {
     devicesize = "TV";
     deviceViewport = ">= 1536px";
   } else {
     devicesize = "Devices More Than 1536px";
     deviceViewport = "1536px-more";
   }

   // ----------------------------------------------------------------- View Count

   useEffect(() => {
     const SiteData = {
       browsername:
         BrowserName === "Not_A Brand" || BrowserName === "Not=A?Brand"
           ? "Unknown Brand"
           : BrowserName,
       browserversion: BrowserVersion,
       deviceSizeType: devicesize,
       deviceVP: deviceViewport,
       page: pagevisited,
     };
     // console.log(SiteData)

     ViewCount(SiteData)
       .then((res) => {
         // console.log(res);
       })
       .catch((err) => {
         // console.log(err);
       });
   }, []);


 
  return (
    <Helmet>
      <title>{`${name} | Kapil Technologies Pvt Ltd `}</title>
      <meta name="description" content={content} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default Page;
