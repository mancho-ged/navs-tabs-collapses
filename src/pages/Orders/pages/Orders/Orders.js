import React from "react";
import Accordion from "components/Accordion";
import { accordionData } from "utils/content";

function OrdersSub() {

  return (
    <React.Fragment>
      <h1>Orders</h1>
      <Accordion queryId="b" accordionData={accordionData} />
    </React.Fragment>
  );
}

export default OrdersSub;
