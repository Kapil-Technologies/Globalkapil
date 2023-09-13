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
    submenuid: 1,
    Mtitle: "Enterprise Software",
    icon: ERP,
    menu3: [
      {
        tlmenuid: 1,
        title: "ERP",
        path: "/what-we-do/services/enterprise-software/erp",
      },
      {
        tlmenuid: 2,
        title: "CRM ",
        // path: "/what-we-do/services/enterprise-software/crm",
      },
      {
        tlmenuid: 3,
        title: "Industry Platform",
        // path: "/what-we-do/services/enterprise-software/indutry-platform ",
      },
      {
        tlmenuid: 4,
        title: "EHS",
        // path: "/what-we-do/services/enterprise-software/ehs",
      },
      {
        tlmenuid: 5,
        title: "Digital Content Management ",
        // path: "/what-we-do/services/enterprise-software/digital-content-management",
      },
    ],
  },
  {
    submenuid: 2,
    Mtitle: "Cloud",
    icon: Cloud,
    menu3: [
      {
        tlmenuid: 1,
        title: "Cloud Services",
        // path: "/what-we-do/services/cloud/cloud-services",
      },
      {
        tlmenuid: 2,
        title: "Unified Communication ",
        // path: "/what-we-do/services/cloud/unified-communication",
      },
      {
        tlmenuid: 3,
        title: "Hybrid Workplace ",
        // path: "/what-we-do/services/cloud/hybrid-workplace  ",
      },
      {
        tlmenuid: 4,
        title: "Private Cloud & Infrastructure",
        // path: "/what-we-do/services/cloud/private-cloud-and-infrastructure",
      },
      {
        tlmenuid: 5,
        title: "Cyber Security ",
        // path: "/what-we-do/services/cloud/cyber-security",
      },
      {
        tlmenuid: 6,
        title: "Cloud Hyper Automation Platform ",
        // path: "/what-we-do/services/cloud/cloud-hyper-automation-platform",
      },
    ],
  },
  {
    submenuid: 3,
    Mtitle: " Application Development",
    icon: AppDev,
    menu3: [
      {
        tlmenuid: 1,
        title: "Agile",
        // path: "/what-we-do/services/application-development/agile",
      },
      {
        tlmenuid: 2,
        title: "Site Reliability Engineering ",
        // path: "/what-we-do/services/application-development/site-reliability-engineering",
      },
      {
        tlmenuid: 3,
        title: "Low Code / No Code ",
        // path: "/what-we-do/services/application-development/low-code-no-code  ",
      },
      {
        tlmenuid: 4,
        title: "DevOps",
        // path: "/what-we-do/services/application-development/devops",
      },
      {
        tlmenuid: 5,
        title: "Quality Asurance (QA) & Testing ",
        // path: "/what-we-do/services/application-development/quality-assurance-and-testing",
      },
      {
        tlmenuid: 6,
        title: "API & Microservices ",
        // path: "/what-we-do/services/application-development/api-microservices",
      },
      {
        tlmenuid: 7,
        title: "Legacy Modernization",
        // path: "/what-we-do/services/application-development/legacy-modernization",
      },
    ],
  },

  {
    submenuid: 4,
    Mtitle: "Digital",
    icon: Digital,
    menu3: [
      {
        tlmenuid: 1,
        title: "Customer Experience",
        // path: "/what-we-do/services/digital/customer-experience",
      },
      {
        tlmenuid: 2,
        title: "Data Analysis ",
        // path: "/what-we-do/services/digital/data-analysis",
      },
      {
        tlmenuid: 3,
        title: "SMaaS ",
        // path: "/what-we-do/services/digital/smaas",
      },
      {
        tlmenuid: 4,
        title: "Intelligent Automation",
        // path: "/what-we-do/services/digital/intelligent-automation",
      },
      {
        tlmenuid: 5,
        title: "BlockChain ",
        // path: "/what-we-do/services/digital/blockchain",
      },
    ],
  },
];

export const Solutions = [
  {
    submenuid: 1,
    title: "Infor",
    path: "https://www.infor.com/",
  },
  {
    submenuid: 2,
    title: "K-Mobillor",
    // path: "/what-we-do/solutions/k-mobillor",
  },
  {
    submenuid: 3,
    title: "Enstrapp",
    // path: "/what-we-do/solutions/Enstrapp",
  },
  // {
  //   submenuid: 4,
  //   title: "WorkDay",
  //   path: "/solutions/workday",
  // },
];

export const AboutData = [
  {
    submenuid: 1,
    title: "Our Story",
    path: "/about-us/our-story",
  },
  // {
  //   submenuid: 2,
  //   title: "Our Battalion",
  //   path: "/about-us/our-battalion",
  // },
  // {
  //   submenuid: 3,
  //   title: "Our Customers",
  //   path: "/about-us/our-customers",
  // },
  {
    submenuid: 4,
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
    title: "What We Do",
    // path: "/services",
    openicon: <UpArrow />,
    closeicon: <DownArrow />,
    submenudata: 2,
    submenu: [
      {
        id: 1,
        Mtitle: "Services",
        openicon: <UpArrow />,
        closeicon: <DownArrow />,
        mainIcon: ServiceIcon,
        menu3: Services,
      },
      {
        id: 2,
        Mtitle: "Solutions",
        mainIcon: SolutionIcon,
        openicon: <UpArrow />,
        closeicon: <DownArrow />,
        menu3: Solutions,
      },
    ],
  },
  {
    id: 3,
    title: "Our Alliances",
    path: "/our-alliances",
  },

  {
    id: 4,
    title: "Join Us",
    // path: "/services",
    openicon: <UpArrow />,
    closeicon: <DownArrow />,
    submenudata: 4,
    submenu: true,
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
    url: Zz3,
  },

  {
    id: 2,
    type: "text",
    content: {
      txt1: "Meet. Greet. Motivate.",
      txt2: "Collabrate",
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
