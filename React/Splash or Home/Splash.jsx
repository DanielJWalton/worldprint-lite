import React from "react";

import Overview1 from "../components/overview/Overview1";
import Overview6 from "../components/overview/Overview6";
import debug from "sabio-debug";
import ProductLanding from "../components/products/ProductLanding";

const _logger = debug.extend("Overview");

export default function Overview(props) {
  _logger("rendering");
  return (
    <>
      <Overview1 {...props} />
      <ProductLanding />
      <Overview6 />
    </>
  );
}
