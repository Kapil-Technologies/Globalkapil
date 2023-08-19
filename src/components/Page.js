import React from "react";
import { Helmet } from "react-helmet-async";

function Page({ name, content }) {
  return (
    <Helmet>
      <title >{`${name} | Pt KCS Technologies Indonesia`}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
}

export default Page;
