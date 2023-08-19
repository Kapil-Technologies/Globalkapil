import { FaCaretUp, FaCaretDown } from "react-icons/fa";

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
    Mtitle: " Applicaion Development",
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
];

export const AboutData = [
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
