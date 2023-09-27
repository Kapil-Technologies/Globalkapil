import React from "react";
import { Helmet } from "react-helmet-async";

function Page({ name, content, keywords }) {
  const HostName = window.location.hostname;

  const CompanyName =
    HostName === "www.kapiltech.com"
      ? "Kapil Technologies Pvt Ltd"
      : HostName === "ptkcs.com"
      ? "PTKCS Technologies Indonesia"
      : HostName === "kcs-tech.com"
      ? "KCS Technologies Inc"
      : "Kapil Technologies Pvt Ltd";
  return (
    <Helmet>
      <title>{`${name} | ${CompanyName}`}</title>
      <meta name="description" content={content} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default Page;
