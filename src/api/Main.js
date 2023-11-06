import { APIURL } from "../config";
import axios from "axios";

console.log(APIURL)



export const postEnquiry = async (data) => {
  const response = await axios.post(
    `${APIURL}kapil-Enquiry`,
    JSON.stringify({
      fname: data.fname,
      lname: data.lnamw,
      cName: data.cName,
      email: data.cemail,
      businessVertical:data.industry,
      location: data.location,
      country:data.country,
      ccode: data.ccode,
      mobileNumber: data.mobileNumber,
      message: data.message,
    }),
    {
      headers: {
        "Content-Type": "application/Json",
        //   Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
