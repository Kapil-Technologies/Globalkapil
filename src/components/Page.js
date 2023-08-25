import React from "react";
import { Helmet } from "react-helmet-async";

function Page({ name, content }) {
  return (
    <Helmet>
      <title >{`${name} | Kapil Technologies Pvt Ltd`}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
}

export default Page;
