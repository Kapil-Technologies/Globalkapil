import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Zz1 from "../assets/Zigzag/1.jpg";
import Zz2 from "../assets/Zigzag/clearpath.png";
import Zz3 from "../assets/Zigzag/3.jpg";
import Zz4 from "../assets/Zigzag/4.png";
import Zz5 from "../assets/Zigzag/5.jpg";
import Zz6 from "../assets/Zigzag/6.jpg";

import { styled } from "@mui/material/styles";
import {
  FiArrowDownRight,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiMenu,
  FiX,
} from "react-icons/fi";

export const UpArrow = styled(FiChevronUp)(({ theme, image }) => ({}));

export const DownArrow = styled(FiChevronDown)(({ theme, image }) => ({}));

export const LeftArrow = styled(FiChevronLeft)(({ theme, image }) => ({}));

export const RightArrow = styled(FiChevronRight)(({ theme, image }) => ({}));

export const NavData = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    submenudata: 1,
  },

  // {
  //   id: 2,
  //   title: "About Us",
  //   openicon: <UpArrow />,
  //   closeicon: <DownArrow />,
  //   submenudata: 2,
  //   submenu: [
  //     {
  //       id: 1,
  //       title: "Company",
  //       // path: "/join-us/search-jobs",
  //     },
  //     {
  //       id: 2,
  //       title: "Our Team",
  //       // path: "/join-us/events",
  //     },
  //     {
  //       id: 3,
  //       title: "Life @ KCS",
  //       // path: "/join-us/events",
  //     },
  //   ],
  // },

  {
    id: 3,
    title: "Services",
    openicon: <UpArrow />,
    closeicon: <DownArrow />,
    submenudata: 3,
    submenu: [
      {
        id: 1,
        title: "Professional Services",
        submenul3: 1,
        submenu: [
          {
            id: 1,
            title: "SAP Consulting Services ",
            path: "/services/sap-consulting-services",
            icon: <FiArrowDownRight />,
          },
          {
            id: 2,
            title: "Digital Transformation",
            // path: "/services/infor-consulting-services/ref2",
            icon: <FiArrowDownRight />,
          },
          {
            id: 3,
            title: "Data & Analytics",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref3",
          },
          {
            id: 4,
            title: "Enterprise Software Development",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref4",
          },
          {
            id: 5,
            title: "Automation",
            icon: <FiArrowDownRight />,
            // path: "/services/infor-consulting-services/ref5",
          },
        ],
      },
      {
        id: 2,
        // title: "Managed Services",
        submenul3: 2,

        submenu: [
          {
            id: 1,
            title: "Managed Services",
            submenul3: 2,
            submenu: [
              {
                id: 1,
                title: "Managed Services for Infor",
                icon: <FiArrowDownRight />,
                path: "/services/managed-services-of-infor",
              },
              // {
              //   id: 2,
              //   title: "Managed Services for SAP",
              //   icon: <FiArrowDownRight />,
              //   path: "/services/managed-services-of-sap",
              // },
              // {
              //   id: 3,
              //   title: "Managed Services for SAP",
              //   icon: <FiArrowDownRight />,
              //   // path: "/services/infor-consulting-services",
              // },
            ],
          },
          {
            id: 2,
            title: "Other Services",
            submenul3: 2,
            submenu: [
              {
                id: 1,
                title: "Staffing Services",
                icon: <FiArrowDownRight />,
                // path: "/services/infor-consulting-services",
              },
              {
                id: 2,
                title: "TaaS (Testing as a Service)",
                icon: <FiArrowDownRight />,
                // path: "/services/infor-consulting-services",
              },
            ],
          },
        ],
      },

      {
        id: 3,
        title: "Products",
        submenul3: 3,
        submenu: [
          {
            id: 1,
            title: "Finstaa",
            icon: <FiArrowDownRight />,
            // path: "",
          },
          // {
          //   id: 2,
          //   title: "KT Fleet Management",
          //   icon: <FiArrowDownRight />,
          //   // path: "",
          // },
          // {
          //   id: 3,
          //   title: "KT Mobillor",
          //   icon: <FiArrowDownRight />,
          //   // path: "",
          // },
          // {
          //   id: 4,
          //   title: "KT MES (Manufacturing Excecution System)",
          //   icon: <FiArrowDownRight />,
          //   // path: "",
          // },
          // {
          //   id: 5,
          //   title: "KT MIP (Manufacturing Integration Platform)",
          //   icon: <FiArrowDownRight />,
          //   // path: "",
          // },
          // {
          //   id: 6,
          //   title: "KT APS (Advanced Planning & Scheduling System)",
          //   icon: <FiArrowDownRight />,
          //   // path: "",
          // },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Join Us",
    // path: "/services",
    openicon: <UpArrow />,
    closeicon: <DownArrow />,
    submenudata: 4,
    submenu: [
      {
        id: 1,
        title: "Search Jobs",
        path: "/join-us/search-jobs",
      },
      {
        id: 2,
        title: "Events ",
        // path: "/join-us/events",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us ",
    path: "/contact-us",
  },
];

export const ZigZagData = [
  {
    id: 1,
    type: "image",
    url: Zz2,
  },

  {
    id: 2,
    type: "text",
    content: {
      txt1: "A clear path to ",
      txt2: "good business",
      txt3: "ERP Practices",
      para: "Efficiently manage day to day business activities, ensure effective control in real time.",
    },
    bgcolor: "#F9B463",
    // bgcolor: "#05E2DB",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
    subcats: [
      {
        id: 1,
        li: "Infor |",
        font: "",
      },
      {
        id: 2,
        li: "SAP |",
        font: "",
      },
      {
        id: 3,
        li: "Oracle |",
        font: "",
      },
      {
        id: 4,
        li: "Microsoft",
        font: "",
      },
    ],
  },
  {
    id: 3,
    type: "text",
    content: {
      txt1: "Reimagine. Build. Grow.",
      txt2: "Business Intelligence",
      txt3: "",
      para: "Powers better business-critical decision-making with the help of meaningful insights and data visualizations.",
    },
    bdcolor: "#55B0B7",
    // bgcolor: "#D7D7D7",
    textalign: "left",
    txt1color: "#0E366A",
    paracolor: "black",
    subcats: [
      {
        id: 1,
        li: "Power BI |",
        font: "",
      },
      {
        id: 2,
        li: "Qlik |",
        font: "",
      },
      {
        id: 3,
        li: "Tableau",
        font: "",
      },
      // {
      //   id: 4,
      //   li: "MicroSoft",
      //   font: "",
      // },
    ],
  },
  {
    id: 5,
    type: "image",
    url: Zz5,
  },

  {
    id: 8,
    type: "image",
    url: Zz1,
  },
  {
    id: 7,
    type: "text",
    content: {
      txt1: "Develop. Test. Deploy.",
      txt2: "Resolve",
      txt3: "Application Development",
      para: "When you need the most - Ensuring Business continuity all times.",
    },
    bgcolor: "#C7D9CD",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
  },

  {
    id: 6,
    type: "text",
    content: {
      txt1: "New. Now. Always",
      txt2: "Disruptive Technologies",
      // txt3: "Application Development",
      para: "Advances that will transform life, business, and the global economy.",
    },
    bgcolor: "#D7D7D7",
    textalign: "left",
    txt1color: "#0E366A",
    paracolor: "black",
  },
  {
    id: 4,
    type: "image",
    url: Zz6,
  },

  // {
  //   id: 12,
  //   type: "image",
  //   url: Zz4,
  // },
  // {
  //   id: 11,
  //   type: "text",
  //   content: {
  //     txt1: "Get Closure to",
  //     txt2: "Digital Future",
  //     txt3: "CRM Practice",
  //     para: "Simple, predictable & robust applications to drive meaningful digital transformation and optimize your service delivery.",
  //   },
  //   bgcolor: "#B0DAE3",
  //   txt1color: "#0E366A",
  //   paracolor: "black",
  //   textalign: "right",
  // },

  {
    id: 9,
    type: "image",
    url: Zz3,
  },
  {
    id: 10,
    type: "text",
    content: {
      txt1: "Meet. Greet. Motivate.",
      txt2: "Collaborate",
      txt3: "Professional Services",
      para: "For everlasting Customer relationships.",
    },
    bgcolor: "#C7D9CD",
    textalign: "left",
    txt1color: "#0E366A",
    paracolor: "black",
  },
];
