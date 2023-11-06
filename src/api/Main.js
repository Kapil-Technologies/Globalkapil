import { APIURL } from "../config";
import axios from "axios";

console.log(APIURL)



export const postEnquiry = async (data) => {
  const response = await axios.post(
    `${APIURL}kapil-Enquiry`,
    JSON.stringify({
      fname: data.fname,
      lname: data.lname,
      cName: data.cname,
      email: data.cemail,
      businessVertical:data.industry,
      location: data.location,
      country:data.country,
      ccode: data.ccode,
      mobileNumber: data.mobile,
      message: data.message,
    }),
    {
      headers: {
        "Content-Type": "application/Json",
        //   Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(data)
  return response;
};
