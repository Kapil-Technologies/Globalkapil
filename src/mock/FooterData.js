import { FiLinkedin, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
  FaHandPointUp,
} from "react-icons/fa6";
import CIndia from '../assets/Flags/IndiaFlag.png'
import CIndonesia from '../assets/Flags/IndonesiaFlag.png'
import CUSA from '../assets/Flags/USAFlag.jpeg'
 

export const SMedia = [
  {
    id: 1,
    title: "Linkedin",
    path: "https://www.linkedin.com/company/kcsinfor/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    title: "Instagram",
    path: "https://www.instagram.com/kapil_technologies/?next=%2F",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    title: "Youtube",
    path: "https://www.youtube.com/@kcstechnologies7392",
    icon: <FaYoutube />,
  },
  {
    id: 4,
    title: "Facebook",
    path: "https://www.facebook.com/KapilTechnologies",
    icon: <FiFacebook />,
  },
];

export const SiteMapLinks = [
  {
    id: 1,
    title: "Company",
    submenu: [
      {
        submenuid: 1,
        title: "Our Story",
        path: "/about-us/our-story",
      },
      // {
      //   submenuid: 2,
      //   title: "Our Battalion ",
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
      {
        submenuid: 5,
        title: "Careers",
        path: "/careers",
      },
      {
        submenuid: 6,
        title: "Contact Us",
        path: "/contact/contact-us",
      },
      {
        submenuid: 6,
        title: "Our Global Presence",
        path: "/contact/our-global-presence",
      },
      {
        submenuid: 7,
        title: "Privacy Policy",
        path: "/privacy-policy",
      },
    ],
  },

  {
    id: 2,
    title: "Services",
    submenu: [
      {
        submenuid: 1,
        title: "ERP ",
        path: "",
      },
      {
        submenuid: 2,
        title: "Cloud",
        path: "",
      },
      {
        submenuid: 3,
        title: "Application Development",
        path: "",
      },
      {
        submenuid: 4,
        title: "Digital",
        path: "",
      },
    ],
  },

  {
    id: 3,
    title: "Solutions",
    submenu: [
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
        path: "/solutions/enstrapp",
      },
    ],
  },
];


export const Connect = [
  {
    id: 1,
    title: "Indonesia",
    phone: <FaPhone />,
    mail: <FaEnvelope />,
    flag: CIndonesia,
    mobile: "+62 852 1808 4208",
    mailid: "contact@ptkcs.com",
    mailto: "mailto:contact@ptkcs.com",
    phoneto: "tel:+62 852 1808 4208",
  },
  {
    id: 2,
    title: "India",
    phone: <FaPhone />,
    mail: <FaEnvelope />,
    flag: CIndia,
    mobile: "+91 88899 92186",
    mailid: "info@kapiltech.com",
    mailto: "mailto:info@kapiltech.com",
    phoneto: "tel:+91 88899 92186",
  },
  {
    id: 3,
    title: "USA",
    phone: <FaPhone />,
    mail: <FaEnvelope />,
    flag: CUSA,
    mobile: "+1 904 712 489 152",
    mailid: "info@kapiltech.com",
    mailto: "mailto:info@kapiltech.com",
    phoneto: "tel:+1 904 712 489 152",
  },
];