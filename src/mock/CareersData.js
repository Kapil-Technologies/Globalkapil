import India from "../assets/Flags/roundedIndia.png";
import Singapore from "../assets/Flags/roundedSingapore.png";
import USA from "../assets/Flags/roundedUSA.png";
import Indonesia from "../assets/Flags/roundedIndonesi.png";
import InforLogo from '../assets/Partners/infor1.png'
import SAPlogo from '../assets/Partners/saplogo.png'
import OracleLogo from '../assets/Partners/oraclelogo.png'
import HR from '../assets/Partners/hr.png'
import Sales from "../assets/Partners/sales.png";
import WBT from "../assets/Partners/Wbt.png";




export const Department = [
  {
    id: 1,
    title: "Infor",
    icon: InforLogo,
    value: "infor",
  },
  {
    id: 2,
    title: "SAP",
    icon: SAPlogo,
    value: "sap",
  },
  {
    id: 3,
    title: "Oracle",
    icon: OracleLogo,
    value: "oracle",
  },
  {
    id: 4,
    title: "Web Technologies",
    icon: WBT,
    value: "webtech",
  },

  {
    id: 5,
    title: "Sales & Marketing",
    icon: Sales,
    value: "sales",
  },
  {
    id: 6,
    title: "HR",
    icon: HR,
    value: "hr",
  },
];

export const DepartmentList = [
  {
    id: 1,
    title: "Infor",
    value: "infor",
  },
  {
    id: 2,
    title: "SAP",
    value: "sap",
  },
  {
    id: 3,
    title: "Oracle",
    value: "oracle",
  },
  {
    id: 4,
    title: "Web Technologies",
    value: "webtech",
  },

  {
    id: 5,
    title: "Sales & Marketing",
    value: "sales",
  },
  {
    id: 6,
    title: "HR",
    value: "hr",
  },

  {
    id: 7,
    title: "Others",
    value: "others",
  },
];

export const Modes = [
  {
    id: 1,
    title: "Work From Home",
    value: "wfh",
  },
  {
    id: 2,
    title: "Onsite ",
    value: "onsite",
  },
  {
    id: 3,
    title: "Hybrid",
    value: "hybrid",
  },
];

export const Locations = [
  {
    id: 1,
    title: "Indonesia",
    value: "IDN",
    img:Indonesia
  },
  {
    id: 2,
    title: "India",
    value: "IND",
    img:India
  },
  {
    id: 3,
    title: "Singapore",
    value: "SGP",
    img:Singapore
  },
  {
    id: 4,
    title: "USA",
    value: "USA",
    img:USA
  },
];

export const CareersArray = [
  // {
  //   id: 1,
  //   job_title: "Software Sales Executive",
  //   department: "Sales and Marketing",
  //   mode: "Onsite",
  //   type: "Full Time",
  //   salary: "Not Disclosed",
  //   location: "Hyderabad,India",
  //   locationFlag: India,
  //   linkedin: "",
  //   mail: "hr@kcs-tech.com",
  //   mailto: "mailto:hr@kcs-tech.com",
  //   experience: "3+ years",
  //   deptimg: Sales,
  //   skillset: [
  //     {
  //       id: 1,
  //       skill: "IT Sales",
  //     },
  //     {
  //       id: 2,
  //       skill: "ERP Sales",
  //     },
  //     {
  //       id: 3,
  //       skill: "Staffing",
  //     },

  //     {
  //       id: 4,
  //       skill: "Resource Deployment",
  //     },
  //   ],

  //   deptvalue: "sales",
  //   lvalue: "india",
  //   modevalue: "onsite",
  // },

  {
    id: 2,
    job_title: "Senior WMS Consultant",
    department: "Infor",
    mode: "Onsite",
    type: "Full Time",
    salary: "Not Disclosed",
    location: "Hyderabad,India",
    locationFlag: India,
    linkedin: "https://www.linkedin.com/jobs/view/3708180924",
    mail: "hr@kcs-tech.com",
    mailto: "mailto:hr@kcs-tech.com",
    experience: "4 to 7+ years",
    deptimg: InforLogo,
    skillset: [
      {
        id: 1,
        skill: "Infor",
      },
      {
        id: 2,
        skill: "WMS",
      },
      // {
      //   id: 3,
      //   skill: "Staffing",
      // },

      // {
      //   id: 4,
      //   skill: "Resource Deployment",
      // },
    ],

    deptvalue: "infor",
    lvalue: "IND",
    modevalue: "onsite",
  },
  {
    id: 3,
    job_title: "Administrative Technician",
    department: "Internal Requirement",
    mode: "Onsite",
    type: "Full Time",
    salary: "Not Disclosed",
    location: "Hyderabad,India",
    locationFlag: India,
    linkedin: "https://www.linkedin.com/jobs/view/3711636153",
    mail: "hr@kcs-tech.com",
    mailto: "mailto:hr@kcs-tech.com",
    experience: "2+ years",
    // deptimg: Sales,
    skillset: [
      {
        id: 1,
        skill: "IT Infrastructure",
      },
      {
        id: 2,
        skill: "Window Server OS",
      },
      {
        id: 3,
        skill: "Networking",
      },

      {
        id: 3,
        skill: "Access Control",
      },
    ],

    deptvalue: "others",
    lvalue: "IND",
    modevalue: "onsite",
  },
];

