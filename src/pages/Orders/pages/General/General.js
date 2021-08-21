import React from "react";
import Accordion from "components/Accordion";
import { accordionData } from "utils/content";

const General = () => {
  return (
    <React.Fragment>
      <h1>General Orders</h1>
      <Accordion queryId="c" accordionData={accordionData} />
    </React.Fragment>
  );
};

export default General;
