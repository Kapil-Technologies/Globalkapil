import React from "react";
import { Helmet } from "react-helmet-async";

function Page({ name, content, keywords }) {
  const HostName = window.location.hostname;

 
  return (
    <Helmet>
      <title>{`${name} | Kapil Technologies Pvt Ltd `}</title>
      <meta name="description" content={content} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default Page;
