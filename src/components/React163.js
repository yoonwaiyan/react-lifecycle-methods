import React, { Fragment } from "react";
import { Table, Columns } from "bloomer";

import image from "../images/react_16_3_lifecycle_methods.svg";

const React163 = () => (
  <Fragment>
    <Columns isCentered>
      <img src={image} />
    </Columns>

    <div>
      <h3 class="subtitle is-5">Deprecation methods:</h3>
      <Table isBordered isStriped>
        <thead>
          <tr>
            <th>Old Name</th>
            <th>New Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>componentWillMount</td>
            <td>UNSAFE_componentWillMount</td>
          </tr>
          <tr>
            <td>componentWillReceiveProps</td>
            <td>UNSAFE_componentWillReceiveProps</td>
          </tr>
          <tr>
            <td>componentWillUpdate</td>
            <td>UNSAFE_componentWillUpdate</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </Fragment>
);

export default React163;
