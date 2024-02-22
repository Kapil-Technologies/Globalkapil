import { APIURL } from "../config";
import { APIURL2 } from "../config";
import axios from "axios";

// console.log(APIURL);
// console.log(APIURL2);

const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

const HeaderDataMedia = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/form-data",
  //   Authorization: `Bearer ${token}`,
};

// --------------------------------------------------------------------------  Post An Enquiry

export const Enquiry = async (data, code, pagename) => {
  console.log(data);
  const response = await axios.post(
    `${APIURL}enquiry`,
    JSON.stringify({
      fullname: data.fullname,
      company: data.cname,
      email: data.cemail,
      country: data.country,
      ccode: code,
      mobile: data.mobile,
      domain: "kcs-tech.com",
      page: pagename,
      message: data.message,
    }),
    {
      headers: HeaderData,
    }
  );

  return response;
};

// --------------------------------------------------------------------------  View Count

export const ViewCount = async (data) => {
  const response = await axios.post(
    `${APIURL}visitors`,
    JSON.stringify({
      browsername: data.browsername,
      browserversion: data.browserversion,
      deviceSizeType: data.deviceSizeType,
      deviceVP: data.deviceVP,
      visitedPage: data.page,
      domain: "kcs-tech.com",
    }),
    {
      headers: HeaderData,
    }
  );
  // console.log(data)
  return response;
};

// --------------------------------------------------------------------------  Careers

export const ApplyJob = async (data) => {
  const formdata = new FormData();

  formdata.append("firstname", data.firstname);
  formdata.append("lastname", data.lastname);
  formdata.append("appliedto", data.applied);
  formdata.append("email", data.email);
  formdata.append("mobile", data.mobile);
  formdata.append("status", data.status);
  formdata.append("filename", data.filename);
  formdata.append("pdf", data.filedata);
  formdata.append("internalR", data.internalR);
  formdata.append("empid", data.empid);
  formdata.append("empname", data.empname);
  formdata.append("experience", data.experience);
  formdata.append("relavent", data.relavent);
  formdata.append("ctc", data.ctc);
  formdata.append("ectc", data.ectc);
  formdata.append("notice", data.notice);
  formdata.append("domain", "kapiltech.com");
  formdata.append("relocation", data.relocation);


  const response = await axios.post(
    `${APIURL}create-application`,
    // JSON.stringify({
    //   firstname: data.firstname,
    //   lastname: data.lastname,
    //   appliedto: data.applied,
    //   experience: data.experience,
    //   email: data.email,
    //   mobile: data.mobile,
    //   status: data.status,
    //   filename: data.filename,
    //   resume: data.filedata,
    //   internalR: data.internalR,
    //   empid: data.empid,
    //   empname: data.empname,
    //   relavent: data.relavent,
    //   cemployer: data.cemployer,
    //   ctc: data.ctc,
    //   ectc: data.ectc,
    //   notice: data.notice,
    // }),
    formdata,
    {
      headers: HeaderDataMedia,
    }
  );
  // console.log(filedata)
  return response;
};

export const getOpenings = async () => {
  const response = await axios.get(`${APIURL}getpositions`, {
    headers: HeaderData,
  });

  return response;
};
