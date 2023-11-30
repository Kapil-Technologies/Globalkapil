import { APIURL } from "../config";
import axios from "axios";

// console.log(APIURL)

const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const postEnquiry = async (data, code) => {
  console.log(code);
  const response = await axios.post(
    `${APIURL}visitors`,
    JSON.stringify({
      fname: data.fname,
      lname: data.lname,
      cName: data.cname,
      email: data.cemail,
      businessVertical: data.industry,
      location: data.location,
      country: data.country,
      ccode: code,
      mobileNumber: data.mobile,
      message: data.message,
    }),
    {
      headers: HeaderData,
    }
  );
  // console.log(data)
  return response;
};

export const ViewCount = async (browser, device) => {
  const response = await axios.post(
    `${APIURL}visitors`,
    JSON.stringify({
      browserDetails: browser,
      deviceDetails: device,
      domain: "kapiltech.com",
    }),
    {
      headers: HeaderData,
    }
  );
  // console.log(data)
  return response;
};
