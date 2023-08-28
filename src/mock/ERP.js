import { FaComments, FaSortNumericDown, FaStar, FaTh, FaThList } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { TbCertificate2, TbExchange, TbPencilPlus, TbSettingsCheck, TbSettingsUp, TbUserCog } from "react-icons/tb";
import SAP1 from '../assets/SAP/sap1.png'
import SAP2 from "../assets/SAP/sap2.png";
import SAP3 from "../assets/SAP/sap3.png";
import SAP4 from "../assets/SAP/sap4.png";
import SAP5 from "../assets/SAP/sap5.png";
import SAP6 from "../assets/SAP/sap6.png";
import InforLogo from '../assets/Partners/Infor.png'
import SAPlogo from "../assets/Partners/saplogo.png";
import Oraclelogo from "../assets/Partners/oraclelogo.png";



export const ERPServices = [
  {
    id: 1,
    title: "Infor",
    icon: InforLogo,
    logoheight: "60px",
    logowidth: "auto",
    path: "/offerings/enterprise-software/erp/infor",
    desc: "Metamorphose your business, deliver customer satisfaction, and improve efficiency with Kapil Technologies the foremost trusted Infor alliance partner. Our Infor experts are committed to meet client’s business objectives by delivering best in class solutions and offerings.",
  },
  {
    id: 2,
    title: "SAP",
    icon: SAPlogo,
    logoheight: "80px",
    logowidth: "auto",
    path: "/offerings/enterprise-software/erp/SAP",
    desc: "SAP (Systems, Applications, and Products) is a leading enterprise software company, providing integrated business solutions for various industries through its suite of software products and services.",
  },
  {
    id: 3,
    title: "Oracle NetSuite",
    icon: Oraclelogo,
    logoheight: "50px",
    logowidth: "",
    path: "/offerings/enterprise-software/erp/Oracle",
    desc: "NetSuite, acquired by Oracle, is a cloud-based ERP software suite. It integrates financials, CRM, e-commerce, and more to streamline business operations, offering scalability and real-time data for effective decision-making across various industries.",
  },
];


export const ERPBanner = [
  {
    id: 1,
    name: 'infor',
    banner:""
  },
  {
    id: 2,
    name: 'SAP',
    banner:""
  },
   {
    id: 3,
    name: 'Oracle NetSuite',
    banner:""
  }
]

export const ERPDataInfor = [
  {
    id: 1,
    mtitle: "Upgrades",
    icon: <TbSettingsUp />,
    color: "#F68C09",
    text: "white",
    iconback: "rgb(246, 140, 9,0.3)",
    icontext: "#F68C09 ",

    desc: "Continuous investment in business application is necessary to maintain best performance and an competitive edge. The lack of time, budget or resources to upgrade and maintain Infor systems can be a obstacle to the continuous growth of your business",
  },
  {
    id: 2,
    mtitle: "Migrations",
    icon: <TbExchange />,
    color: "#3175A5",
    text: "white",
    iconback: "rgb(207, 253, 223)",
    icontext: "#3175A5 ",
    desc: "Data migration is one of the crucial factors to make sure the success of upgrade or implementation. Our Infor experts will execute and guide in data migration to make sure long-term success.",
  },
  {
    id: 3,
    mtitle: "Customizations  ",
    icon: <TbPencilPlus />,
    color: "#AF5F30",
    text: "white",
    iconback: "rgb(248, 228, 253)",
    icontext: "#AF5F30 ",
    desc: "Customize the Infor system that suits the enterprise processes and delivers the critical data in the way which makes sense for businesses. ",
  },
  {
    id: 4,
    mtitle: "Management Consulting",
    icon: <TbUserCog />,
    color: "#2DB6FA",
    text: "white",
    iconback: "rgb(219, 243, 254)",
    icontext: "#2DB6FA ",
    desc: "Our Infor team expertise in Infor strategy development and Business processes which allows Kapil Technologies to bring transparency and foresight to the business-technology relationship. Kapil Technologies has expertise in Infor CloudSuite solutions with extensive and successful large global program delivery experience.",
  },

  {
    id: 5,
    mtitle: "Training",
    icon: <TbCertificate2 />,
    color: "#32770E",
    text: "white",
    iconback: "rgb(208, 182, 197)",
    icontext: "#32770E ",
    desc: "For any successful Enterprise Application implementation, well trained internal IT and end users are extremely important. Kapil Technologies training services delivered by the Infor Application Experts.",
  },
 
];

export const InforUpgradesTypes = [
  {
    id: 1,
    desc: "Upgrade Infor Applications to make sure that they do not go out of Infor support.",
  },
  {
    id: 2,
    desc: "Take benefit of new modules and functionality available in the updated releases.",
  },
  {
    id: 3,
    desc: "Take benefit of reduced IT costs by moving to the cloud.",
  },
];

export const InforUpgradesServices = [
  {
    id: 1,
    li: "Project Management",
  },
  {
    id: 2,
    li: "Technology Consulting",
  },
  {
    id: 3,
    li: "Data Migration / Conversion",
  },
  {
    id: 4,
    li: "Customizations and Integrations",
  },
  {
    id: 5,
    li: "Testing / QA",
  },
  {
    id: 6,
    li: "Data Purging and Archiving",
  },
  {
    id: 7,
    li: "Knowledge Transfer",
  },
];

export const MigrationBenefits = [
  {
    id: 1,
    li: "Reduce overall cost",
  },
  {
    id: 2,
    li: "Decrease project risk",
  },
  {
    id: 3,
    li: "Improve data quality",
  },
  {
    id: 4,
    li: "Avoid business disruption",
  },
  {
    id: 5,
    li: "Ensure on-time project delivery",
  },
];

export const CustomizationBenefits = [
  {
    id: 1,
    li: "Reduce overall cost",
  },
  {
    id: 2,
    li: "Decrease project risk",
  },
  {
    id: 3,
    li: "Ensure Quality delivery",
  },
  {
    id: 4,
    li: "Infor Development Standards compliant",
  },
  {
    id: 5,
    li: "Ensure on-time project delivery",
  },
];

export const TraiingList = [
  {
    id: 1,
    li: "New Implementations",
  },
  {
    id: 2,
    li: "Upgrades",
  },
  {
    id: 3,
    li: "Continuous Improvement",
  },
  
];



export const InforTrainingTabs1 = [
  {
    id: 1,
    tabname: "Products",
    tabvalue: "1", 
    tabicon:<FaTh />
  },
  {
    id: 2,
    tabname: "categories",
    tabvalue: "2",
    tabicon:<FaThList />
  },
  {
    id: 3,
    tabname: "levels",
    tabvalue: "3",
    tabicon:<FaSortNumericDown />
  },
  {
    id: 4,
    tabname: "benefits",
    tabvalue: "4",
    tabicon:<FaThumbsUp />
  },
];

export const InforTProducts = [
  {
    id: 1,
    pname: "Infor LN",
  },
  {
    id: 2,
    pname: "Baan IV",
  },
  {
    id: 3,
    pname: "Baan V",
  },
  {
    id: 4,
    pname: "Infor Cloud Industries",
  },
 
  {
    id: 5,
    pname: "Infor S3",
  },
  {
    id: 6,
    pname: "Infor OS",
  },
  {
    id: 7,
    pname: "Birst",
  },
 
  {
    id: 8,
    pname: "Infor EAM",
  },
  {
    id: 9,
    pname: "Infor SCM",
  },
  {
    id: 10,
    pname: "Infor WFM",
  },
];


export const InforTrainigBenefits = [
  {
    id: 1,
    title: "Reduce Training and travelling Expenses",
  },
  {
    id: 2,
    title: "Develop and Mainntain skills and Expertise",
  },
  {
    id: 3,
    title: "Drive performance, proficiency and Productivity",
  },
  {
    id: 4,
    title: "Gain Access to expert instructorss",
  },
  {
    id: 5,
    title: "Minimize costly downtime",
  },
  {
    id: 6,
    title: "Focus less on troubleshooting and more on doing business",
  },
];


export const InforCategories = [
  {
    id: 1,
    desc1: "Adminisraton",
    desc2: "Ideal for : System Administration",
  },
  {
    id: 2,
    desc1: "Developers",
    desc2: "Ideal for : Developers / Programmers",
  },
  {
    id: 3,
    desc1: "Functional",
    desc2: "Ideal for : Business Analysis, Function Managers, End Users ",
  },
  
];

export const InforLevel = [
  {
    id: 1,
    desc1: "Level1 (Overview & Use)",
    desc2:
      "Offers an overview of the product and prepares the participant with sufficient knowledge to use the system.",
  },
  {
    id: 2,
    desc1: "Level 2 (Advanced)",
    desc2:
      "Offers an in-depth training to enable the applicants to become experts and to start using the system effectively.",
  },
  
];

export const Recruiting = [
  {
    id: 1,
    desc1: "Fulltime Placements",
  },
  {
    id: 2,
    desc1: "Onsite Contractors",
  },
  {
    id: 3,
    desc1: "Remote Contractors",
  },
];

export const whyUs = [
  {
    id: 1,
    desc1: "INFOR EXPERTS",
    icon: <FaStar />,
    desc2:
      "Kapil Technologies is a consulting firm which is 100% focused on Infor. Our extensive expertise in this space, enables to find the best candidate within 10 business days.",
  },
  {
    id: 2,
    desc1: "WE SPEAK YOUR LANGUAGE",
    icon: <FaComments />,
    desc2:
      "We are knowledgeable about the various versions and modules within the Infor Suite of Applications.",
  },
];


// -----------------------------------------------------------------------------------------  SAP

export const ERPDataSAP = [
  {
    id: 1,
    mtitle: "SAP IMPLEMENTATION and UPGRADE ",
    icon: SAP1,
    color:"#1661be",
    desc:"Whether your organization needs a full-scale SAP ERP, a single module, or an upgrade, Kapil tech is ready to exceed expectations."
  },
  {
    id: 2,
    mtitle: "SAP SYSTEM REVIEW SERVICES ",
    icon: SAP2,
    color:"#1661be",
    desc:"We advance the Best and Leading Practices for implementing SAP. We can validate if you are getting the most out of your SAP system."
  },

  {
    id: 3,
    mtitle: "SAP APPLICATION MANAGEMENT SERVICES ",
    icon: SAP3,
    color:"#1661be",
    desc:"We Understand that every organization has unique support requirements. We offer custom packages that will fit your end-to-end application management needs."
  },
  {
    id: 4,
    mtitle: "SAP TRAINING ",
    icon: SAP4,
    color:"#1661be",
    desc:"Kapil Tech was founded by SAP training professionals. We understand having a comprehensive approach to staff training is essential."
  },
  {
    id: 5,
    mtitle: "SAP STAFF AUGMENTATION ",
    icon: SAP5,
    color:"#1661be",
    desc:"Providing the highest caliber talent is hallmark of our approach. Gain access to resources with 15+ years of experience."
  },
  {
    id: 6,
    mtitle: "SAP CLOUD MIGRATION and HOSTING ",
    icon: SAP6,
    color:"#1661be",
    desc:"Taking advantage of lower costs and easier  management with Cloud-Based servers. We offer a number of cloud deployment options."
  },
 
];



export const ERPDataSAP2 = [
  {
    id: 1,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
  {
    id: 2,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
  {
    id: 3,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
  {
    id: 4,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
  {
    id: 5,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
  {
    id: 6,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
  {
    id: 7,
    title: "SAP Financial Accounting and Controlling",
    desc: "",
  },
];