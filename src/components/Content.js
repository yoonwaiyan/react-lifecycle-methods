import React, { PureComponent, Fragment } from "react";
import { Content as BulmaContent, Tabs, TabList, TabLink, Tab } from "bloomer";

import React163 from "./React163";
import LegacyReact from "./LegacyReact";

const ToggleTab = ({ tabName, version, isActive, handleClick }) => (
  <Tab isActive={isActive} onClick={() => handleClick(version)}>
    <TabLink>
      <span>{tabName}</span>
    </TabLink>
  </Tab>
);

class Content extends PureComponent {
  state = {
    version: "16.3"
  };

  isCurrentVersion = version => {
    console.log("version", version);
    return this.state.version === version;
  };

  setCurrentVersion = version => {
    this.setState({ version });
  };

  render() {
    const { version } = this.state;

    return (
      <Fragment>
        <Tabs
          isAlign={"centered"}
          isBoxed={true}
          isToggle={true}
          style={{ marginBottom: "20px" }}
        >
          <TabList>
            <ToggleTab
              version="16.3"
              tabName="React 16.3"
              isActive={this.isCurrentVersion("16.3")}
              handleClick={this.setCurrentVersion}
            />
            <ToggleTab
              version="< 16.3"
              tabName="< React 16.3"
              isActive={this.isCurrentVersion("< 16.3")}
              handleClick={this.setCurrentVersion}
            />
          </TabList>
        </Tabs>
        <BulmaContent>
          {version === "16.3" && <React163 />}
          {version === "< 16.3" && <LegacyReact />}
        </BulmaContent>
      </Fragment>
    );
  }
}

export default Content;
