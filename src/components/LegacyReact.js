import React, { Fragment } from "react";
import { Columns } from "bloomer";

import image from "../images/react_legacy_lifecycle_methods.svg";

const LegacyReact = () => (
  <Fragment>
    <Columns isCentered>
      <img src={image} />
    </Columns>
  </Fragment>
);

export default LegacyReact;
