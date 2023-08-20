import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Zz1 from '../assets/Zigzag/1.jpg'
import Zz2 from "../assets/Zigzag/2.jpg";
import Zz3 from "../assets/Zigzag/3.jpg";
import Zz4 from "../assets/Zigzag/4.png";
import Zz5 from "../assets/Zigzag/5.jpg";
import Zz6 from "../assets/Zigzag/6.jpg";

export const Services = [
  {
    submenuid: 1,
    Mtitle: "Enterprise Software",
    menu3: [
      {
        tlmenuid: 1,
        title: "ERP",
        path: "/services/enterprise-software/erp",
      },
      {
        tlmenuid: 2,
        title: "CRM ",
        path: "/services/enterprise-software/crm",
      },
      {
        tlmenuid: 3,
        title: "Industry Platform",
        path: "/services/enterprise-software/indutry-platform ",
      },
      {
        tlmenuid: 4,
        title: "EHS",
        path: "/services/enterprise-software/ehs",
      },
      {
        tlmenuid: 5,
        title: "Digital Content Management ",
        path: "/services/cloud/digital-content-management",
      },
    ],
  },
  {
    submenuid: 2,
    Mtitle: "Cloud",
    menu3: [
      {
        tlmenuid: 1,
        title: "Cloud Services",
        path: "/services/cloud/cloud-services",
      },
      {
        tlmenuid: 2,
        title: "Unified Communicatin ",
        path: "/services/cloud/unified-communication",
      },
      {
        tlmenuid: 3,
        title: "Hybrid Workplace ",
        path: "/services/cloud/hybrid-workplace  ",
      },
      {
        tlmenuid: 4,
        title: "Private Cloud & Infrastructure",
        path: "/services/cloud/private-cloud-and-infrastructure",
      },
      {
        tlmenuid: 5,
        title: "Cyber Security ",
        path: "/services/cloud/cyber-security",
      },
      {
        tlmenuid: 6,
        title: "Cloud Hyper Automation Platform ",
        path: "/services/cloud/cloud-hyper-automation-platform",
      },
    ],
  },
  {
    submenuid: 3,
    Mtitle: " Application Development",
    menu3: [
      {
        tlmenuid: 1,
        title: "Cloud Services",
        path: "/services/cloud/cloud-services",
      },
      {
        tlmenuid: 2,
        title: "Unified Communicatin ",
        path: "/services/cloud/unified-communication",
      },
      {
        tlmenuid: 3,
        title: "Hybrid Workplace ",
        path: "/services/cloud/hybrid-workplace  ",
      },
      {
        tlmenuid: 4,
        title: "Private Cloud & Infrastructure",
        path: "/services/cloud/private-cloud-and-infrastructure",
      },
      {
        tlmenuid: 5,
        title: "Cyber Security ",
        path: "/services/cloud/cyber-security",
      },
      {
        tlmenuid: 6,
        title: "Cloud Hyper Automation Platform ",
        path: "/services/cloud/cloud-hyper-automation-platform",
      },
      {
        tlmenuid: 7,
        title: "Cloud Hyper Automation Platform ",
        path: "/services/cloud/cloud-hyper-automation-platform",
      },
    ],
  },

  {
    submenuid: 4,
    Mtitle: "Digital",
    menu3: [
      {
        tlmenuid: 1,
        title: "Customer Experience",
        path: "/services/digital/customer-experience",
      },
      {
        tlmenuid: 2,
        title: "Data Analysis ",
        path: "/services/digital/data-analysis",
      },
      {
        tlmenuid: 3,
        title: "SMaaS ",
        path: "/services/digital/smaas",
      },
      {
        tlmenuid: 4,
        title: "Intelligent Automation",
        path: "/services/digital/intelligent-automation",
      },
      {
        tlmenuid: 5,
        title: "BlockChain ",
        path: "/services/digital/blockchain",
      },
      {
        tlmenuid: 6,
        title: "Health Care Digital Analytic platform ",
        path: "/services/digital/healthcare-digital-analytics-platform",
      },
    ],
  },
  // {
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
    path: "/solutions/k-mobillor",
  },
  {
    submenuid: 3,
    title: "Enstrapp",
    path: "/solutions/Enstrapp",
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
  {
    submenuid: 3,
    title: "Our Customers",
    path: "/about-us/our-customers",
  },
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

export const NavData = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    submenudata: 1,
  },
  {
    id: 2,
    title: "About",
    // path: "/about-us",
    openicon: <FaCaretDown />,
    closeicon: <FaCaretUp />,
    submenudata: 2,
    submenu: [
      {
        submenuid: 1,
        title: "Our Story",
        path: "/about-us/our-story",
      },
      {
        submenuid: 2,
        title: "Our Battalion",
        path: "/about-us/our-battalion",
      },
      {
        submenuid: 3,
        title: "Our Customers",
        path: "/about-us/our-customers",
      },
      {
        submenuid: 4,
        title: "Our Alliances",
        path: "/about-us/our-alliances",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    // path: "/services",
    openicon: <FaCaretDown />,
    closeicon: <FaCaretUp />,
    submenudata: 3,
    submenu: true,
  },
  {
    id: 4,
    title: "In House  Solutions",
    // path: "",
    submenudata: 4,
    openicon: <FaCaretDown />,
    closeicon: <FaCaretUp />,
    submenu: [
      {
        submenuid: 1,
        title: "Infor",
        path: "/solutions/infor",
      },
      // {
      //   submenuid: 2,
      //   title: "SAP",
      //   path: "/solutions/SAP",
      // },
      {
        submenuid: 3,
        title: "Enstrapp",
        path: "/solutions/Enstrapp",
      },
      // {
      //   submenuid: 4,
      //   title: "WorkDay",
      //   path: "/solutions/workday",
      // },
    ],
  },

  {
    id: 5,
    title: "Careers",
    path: "/careers",
  },
  {
    id: 6,
    title: "Contact Us ",
    // path: "/contact",
    submenudata: 6,
    openicon: <FaCaretDown />,
    closeicon: <FaCaretUp />,
    submenu: [
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
    ],
  },
];

export const ZigZagData = [
  {
    id: 1,
    type: "image",
    url: Zz1,
  },

  {
    id: 2,
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
    id: 3,
    type: "text",
    content: {
      txt1: "A clear path to ",
      txt2: "good business",
      txt3: "ERP Practice",
      para: "Efficiently manage day to day business activities, ensure effective control real time.",
    },
    bgcolor: "#05E2DB",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
  },
  {
    id: 4,
    type: "image",
    url: Zz2,
  },

  {
    id: 5,
    type: "image",
    url: Zz3,
  },

  {
    id: 6,
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
    id: 7,
    type: "text",
    content: {
      txt1: "Reimagine. Build. Grow.",
      txt2: "Business Intelligence",
      txt3: "",
      para: "Transform your core business operations with web technologies to enable better human interaction and end user experiences.",
    },
    bgcolor: "#D7D7D7",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
  },
  {
    id: 8,
    type: "image",
    url: Zz4,
  },
  {
    id: 9,
    type: "image",
    url: Zz5,
  },

  {
    id: 10,
    type: "text",
    content: {
      txt1: "Develop. Test. Deploy.",
      txt2: "Resolve",
      txt3: "Application Dvelopment",
      para: "When you need the most - Ensuring Business continuity all times  .",
    },
    bgcolor: "#C7D9CD",
    textalign: "left",
    txt1color: "#0E366A",
    paracolor: "black",
  },

  {
    id: 11,
    type: "text",
    content: {
      txt1: "New. Now. Always",
      txt2: "Disruptive Technologies",
      txt3: "Application Dvelopment",
      para: "Transform your core business operations with emerging technologies to enable better human interaction and end user experiences.",
    },
    bgcolor: "#D7D7D7",
    textalign: "right",
    txt1color: "#0E366A",
    paracolor: "black",
  },
  {
    id: 12,
    type: "image",
    url: Zz6,
  },
];
