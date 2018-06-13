import React, { PureComponent, Fragment } from "react";
import axios from "axios";
import { Button } from "bloomer";

import ExampleTable from "./ExampleTable";

class ExampleParent extends PureComponent {
  state = {
    currentPage: 0,
    rows: []
  };

  // static async getDerivedStateFromProps(nextProps, prevState) {
  //   const result = await axios.get(
  //     `https://reqres.in/api/users?per_page=4&page=${1}`
  //   );

  //   console.log("result", result.data.data);

  //   return { currentPage: 1, rows: result.data.data };
  // }

  componentDidMount() {
    this.fetchData(1);
  }

  async fetchData(page) {
    const result = await axios.get(
      `https://reqres.in/api/users?per_page=4&page=${page}`
    );

    this.setState({ currentPage: page, rows: result.data.data });
  }

  render() {
    const { rows, currentPage } = this.state;
    return (
      <Fragment>
        <div className="title">Example Table: Users</div>
        <span>
          Current page: {currentPage}{" "}
          <Button
            onClick={() => {
              this.fetchData(currentPage - 1);
            }}
          >
            {"< Previous Page"}
          </Button>
          <Button
            onClick={() => {
              this.fetchData(currentPage + 1);
            }}
          >
            {"Next Page >"}
          </Button>
        </span>

        <ExampleTable rows={rows} />
      </Fragment>
    );
  }
}

export default ExampleParent;
