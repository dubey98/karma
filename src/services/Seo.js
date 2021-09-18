import { Helmet } from "react-helmet";
import React from "react";

const Seo = () => {
  const title = "Karma";
  const description = "A TODO App";
  const keywords = ["karma", "todo", "react", "app", "SPA"];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script
        src="https://kit.fontawesome.com/cf77766bad.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  );
};
export default Seo;
