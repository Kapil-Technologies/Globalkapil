import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Zz1 from "../assets/Zigzag/1.jpg";
import Zz2 from "../assets/Zigzag/clearpath.png";
import Zz3 from "../assets/Zigzag/3.jpg";
import Zz4 from "../assets/Zigzag/4.png";
import Zz5 from "../assets/Zigzag/5.jpg";
import Zz6 from "../assets/Zigzag/6.jpg";
import Digital from "../assets/IconImages/digital.png";
import AppDev from "../assets/IconImages/APD.png";
import Cloud from "../assets/IconImages/cloud.png";
import ERP from "../assets/IconImages/ERP.png";
import { styled } from "@mui/material/styles";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import ServiceIcon from "../assets/IconImages/Services.png";
import SolutionIcon from "../assets/IconImages/solutions.png";

export const UpArrow = styled(FiChevronUp)(({ theme, image }) => ({}));

export const DownArrow = styled(FiChevronDown)(({ theme, image }) => ({}));

export const Services = [
  {
    submenudata: 1,
    Mtitle: "Enterprise Software",
    icon: ERP,
    menu3: [
      // {
      //   submenudata: 1,
      //   title: "ERP",
      //   path: "/services/enterprise-software/erp",
      // },
      // {
      //   submenudata: 2,
      //   title: "CRM ",
      //   // path: "/services/enterprise-software/crm",
      // },
      // {
      //   submenudata: 3,
      //   title: "Industry Platform",
      //   // path: "/services/enterprise-software/indutry-platform ",
      // },
      // {
      //   submenudata: 4,
      //   title: "EHS",
      //   // path: "/services/enterprise-software/ehs",
      // },
      // {
      //   submenudata: 5,
      //   title: "Digital Content Management ",
      //   // path: "/services/enterprise-software/digital-content-management",
      // },

      {
        submenudata: 1,
        title: "Infor",
        path: "/services/enterprice-software/infor",
      },
      {
        submenudata: 2,
        title: "SAP",
        path: "/services/enterprice-software/sap",
      },
      {
        submenudata: 3,
        title: "Oracle",
        path: "/services/enterprice-software/oracle",
      },
    ],
  },
  {
    submenudata: 2,
    Mtitle: "Cloud",
    icon: Cloud,
    menu3: [
      {
        submenudata: 1,
        title: "Cloud Services",
        // path: "/services/cloud/cloud-services",
      },
      {
        submenudata: 2,
        title: "Unified Communication ",
        // path: "/services/cloud/unified-communication",
      },
      {
        submenudata: 3,
        title: "Hybrid Workplace ",
        // path: "/services/cloud/hybrid-workplace  ",
      },
      {
        submenudata: 4,
        title: "Private Cloud & Infrastructure",
        // path: "/services/cloud/private-cloud-and-infrastructure",
      },
      {
        submenudata: 5,
        title: "Cyber Security ",
        // path: "/services/cloud/cyber-security",
      },
      {
        submenudata: 6,
        title: "Cloud Hyper Automation Platform ",
        // path: "/services/cloud/cloud-hyper-automation-platform",
      },
    ],
  },
  {
    submenudata: 3,
    Mtitle: " Application Development",
    icon: AppDev,
    menu3: [
      {
        submenudata: 1,
        title: "Agile",
        // path: "/services/application-development/agile",
      },
      {
        submenudata: 2,
        title: "Site Reliability Engineering ",
        // path: "/services/application-development/site-reliability-engineering",
      },
      {
        submenudata: 3,
        title: "Low Code / No Code ",
        // path: "/services/application-development/low-code-no-code  ",
      },
      {
        submenudata: 4,
        title: "DevOps",
        // path: "/services/application-development/devops",
      },
      {
        submenudata: 5,
        title: "Quality Asurance (QA) & Testing ",
        // path: "/services/application-development/quality-assurance-and-testing",
      },
      {
        submenudata: 6,
        title: "API & Microservices ",
        // path: "/services/application-development/api-microservices",
      },
      {
        submenudata: 7,
        title: "Legacy Modernization",
        // path: "/services/application-development/legacy-modernization",
      },
    ],
  },

  {
    submenudata: 4,
    Mtitle: "Digital",
    icon: Digital,
    menu3: [
      {
        submenudata: 1,
        title: "Customer Experience",
        // path: "/services/digital/customer-experience",
      },
      {
        submenudata: 2,
        title: "Data Analysis ",
        // path: "/services/digital/data-analysis",
      },
      {
        submenudata: 3,
        title: "SMaaS ",
        // path: "/services/digital/smaas",
      },
      {
        submenudata: 4,
        title: "Intelligent Automation",
        // path: "/services/digital/intelligent-automation",
      },
      {
        submenudata: 5,
        title: "BlockChain ",
        // path: "/services/digital/blockchain",
      },
    ],
  },
];

export const Solutions = [
  {
    submenudata: 1,
    title: "Infor",
    path: "https://partners.infor.com/?q=KCS&ch=false&al=false&dv=false&apac=false&emea=false&gl=false&la=false&na=false#1666",
    target: "_blank",
  },
  {
    submenudata: 2,
    title: "K-Mobillor",
    // path: "/solutions/k-mobillor",
  },
  {
    submenudata: 3,
    title: "Enstrapp",
    // path: "/solutions/Enstrapp",
  },
  // {
  //   submenudata: 4,
  //   title: "WorkDay",
  //   path: "/solutions/workday",
  // },
];

export const AboutData = [
  {
    submenudata: 1,
    title: "Our Story",
    path: "/about-us/our-story",
  },
  // {
  //   submenudata: 2,
  //   title: "Our Battalion",
  //   path: "/about-us/our-battalion",
  // },
  // {
  //   submenudata: 3,
  //   title: "Our Customers",
  //   path: "/about-us/our-customers",
  // },
  {
    submenudata: 4,
    title: "Our Alliances",
    path: "/about-us/our-alliances",
  },
];

export const ContactData = [
  {
    id: 1,
    title: "Contact Us",
    path: "/contact/contact-us",
  },
  {
    id: 2,
    title: "Our Global Presence ",
    path: "/contact/our-global-presence",
  },
];

export const JoinUsData = [
  {
    id: 1,
    title: "Serach Jobs",
    path: "/join-us/search-jobs",
  },
  {
    id: 2,
    title: "Events ",
    // path: "/join-us/events",
  },
];

export const NavData = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    submenudata: 1,
  },

  {
    id: 2,
    title: "What we do",
    openicon: <UpArrow />,
    closeicon: <DownArrow />,
    submenudata: 2,
    submenu: [
      {
        id: 1,
        title: "Services",
        submenudata: 1,
        submenu: [
          {
            id: 1,
            title: "Enterprise Software",
            // path:""
            submenudata: 1,
            submenu: [
              {
                id: 1,
                title: "Infor",
                path: "/what-we-do/services/enterprice-software/infor",
              },
              {
                id: 2,
                title: "SAP",
                path: "/what-we-do/services/enterprice-software/sap",
              },
              {
                id: 3,
                title: "Oracle",
                // path: "/what-we-do/services/enterprice-software/oracle",
              },
            ],
          },

          {
            id: 2,
            title: "Cloud",
            // path:""
            submenudata: 2,
            submenu: [
              {
                id: 1,
                title: "Cloud Services",
                // path: "/what-we-do/services/cloud/cloud-services",
              },
              {
                id: 2,
                title: "Unified Communication",
                // path: "/what-we-do/services/cloud/unified-communication",
              },
              {
                id: 3,
                title: "hybrid-work-place",
                // path: "/what-we-do/services/cloud/hybrid-work-place",
              },

              {
                id: 4,
                title: "Private Cloud & Infrastructure",
                // path: "/what-we-do/services/cloud/private-cloud-and-infrastructure",
              },
              {
                id: 5,
                title: "Cyber Security",
                // path: "/what-we-do/services/cloud/cyber-security",
              },
              {
                id: 6,
                title: "Cloud Hyper Automation Platform",
                // path: "/what-we-do/services/cloud/cloud-hyper-automation-platform",
              },
            ],
          },

          {
            id: 3,
            title: "Application Developement",
            // path:""
            submenudata: 3,
            submenu: [
              {
                id: 1,
                title: "Agile",
                // path: "/what-we-do/services/application-development/agile",
              },
              {
                id: 2,
                title: "Site Reliability Engineering",
                // path: "/what-we-do/services/application-development/site-reliability-engineering",
              },
              {
                id: 3,
                title: "Low Code / No Code",
                // path: "/what-we-do/services/application-development/low-code-no-code",
              },

              {
                id: 4,
                title: "DevOps",
                // path: "/what-we-do/services/application-development/devops",
              },
              {
                id: 5,
                title: "Quality Asurance (QA) & Testing",
                // path: "/what-we-do/services/application-development/quality-assurance",
              },
              {
                id: 6,
                title: "API & Microservices",
                // path: "/what-we-do/services/application-development/api-and-microservices",
              },
            ],
          },
          {
            id: 4,
            title: "digital",
            // path:""
            submenudata: 4,
            submenu: [
              {
                id: 1,
                title: "Customer Experience",
                // path: "/what-we-do/services/digital/customer-experience",
              },
              {
                id: 2,
                title: "Data Analysis",
                // path: "/what-we-do/services/digital/data-analysis",
              },
              {
                id: 3,
                title: "SMaas",
                // path: "/what-we-do/services/digital/smaas",
              },

              {
                id: 4,
                title: "Intelligent Automation",
                // path: "/what-we-do/services/digital/intelligent-automation",
              },
              {
                id: 5,
                title: "Block Chain",
                // path: "/what-we-do/services/digital/block-chain",
              },
             
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Solutions ",
        // path: "/join-us/events",
        submenudata: 2,
        submenu: [
          {
            id: 1,
            title: "Infor",
            path: "https://partners.infor.com/?q=KCS&ch=false&al=false&dv=false&apac=false&emea=false&gl=false&la=false&na=false#1666",
            target: "blank",
            submenudata: 1,
          },
          {
            id: 2,
            title: "K-Mobillor",
            // path: "/what-we-do/solutions/k-mobillor",
            submenudata: 2,
          },
          {
            id: 3,
            title: "Enstarpp",
            // path: "/what-we-do/solutions/enstrapp",
            submenudata: 3,
          },
        ],
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Solutions",
  //   openicon: <UpArrow />,
  //   closeicon: <DownArrow />,
  //   submenudata: 3,
  //   submenu: Solutions,
  // },
  // {
  //   id: 4,
  //   title: "Our Alliances",
  //   path: "/our-alliances",
  // },

  {
    id: 3,
    title: "Join Us",
    // path: "/services",
    openicon: <UpArrow />,
    closeicon: <DownArrow />,
    submenudata: 3,
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
    id: 6,
    title: "Contact Us ",
    path: "/contact-us",
  },
];

export const ZigZagData = [
  {
    id: 1,
    type: "image",
    url: Zz3,
  },

  {
    id: 2,
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
  {
    id: 3,
    type: "text",
    content: {
      txt1: "New. Now. Always",
      txt2: "Disruptive Technologies",
      txt3: "Application Development",
      para: "Transform your core business operations with emerging technologies to enable better human interaction and end user experiences.",
    },
    bgcolor: "#D7D7D7",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
  },
  {
    id: 4,
    type: "image",
    url: Zz6,
  },
  {
    id: 5,
    type: "image",
    url: Zz1,
  },
  {
    id: 6,
    type: "text",
    content: {
      txt1: "Reimagine. Build. Grow.",
      txt2: "Business Intelligence",
      txt3: "",
      para: "Transform your core business operations with web technologies to enable better human interaction and end user experiences.",
    },
    bdcolor: "#55B0B7",
    // bgcolor: "#D7D7D7",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
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
    textalign: "left",
    txt1color: "#0E366A",
    paracolor: "black",
  },
  {
    id: 8,
    type: "image",
    url: Zz5,
  },
  {
    id: 9,
    type: "image",
    url: Zz2,
  },
  {
    id: 10,
    type: "text",
    content: {
      txt1: "A clear path to ",
      txt2: "good business",
      txt3: "ERP Practice",
      para: "Efficiently manage day to day business activities, ensure effective control real time.",
    },
    bgcolor: "#F9B463",
    // bgcolor: "#05E2DB",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
  },

  {
    id: 11,
    type: "text",
    content: {
      txt1: "Get Closure to",
      txt2: "Digital Future",
      txt3: "CRM Practice",
      para: "Simple, predictable & robust applications to drive meaningful digital transformation and optimize your service delivery.",
    },
    bgcolor: "#B0DAE3",
    txt1color: "#0E366A",
    paracolor: "black",
    textalign: "left",
  },
  {
    id: 12,
    type: "image",
    url: Zz4,
  },
];
