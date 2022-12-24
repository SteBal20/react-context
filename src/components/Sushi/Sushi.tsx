import { Fragment } from "react";

import SushiSummary from "./SushiSummary";
import AvailableSushi from "./AvailableSushi";

const Sushi = () => {
  return (
    <Fragment>
      <SushiSummary />
      <AvailableSushi />
    </Fragment>
  );
};

export default Sushi;
