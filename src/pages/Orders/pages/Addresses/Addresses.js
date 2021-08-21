import React from "react";
import Accordion from "components/Accordion";
import { accordionData } from 'utils/content';

function Addresses() {
  return (
    <React.Fragment>
      <h1>Addresses</h1>
      <Accordion queryId="a" accordionData={accordionData} />
    </React.Fragment>
  );
}

export default Addresses;
