import React, { PureComponent, Fragment } from "react";
import {
  Content as BulmaContent,
  Tabs,
  TabList,
  TabLink,
  Tab,
  Message,
  MessageHeader,
  MessageBody
} from "bloomer";

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
    return this.state.version === version;
  };

  setCurrentVersion = version => {
    this.setState({ version });
  };

  render() {
    const { version } = this.state;

    return (
      <div style={{ marginBottom: "30px" }}>
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
        <Message>
          <MessageHeader>
            <p>Extended Reading</p>
          </MessageHeader>
          <MessageBody>
            <ol>
              <li>
                <a href="https://reactjs.org/docs/react-component.html#componentwillunmount">
                  React.Component
                </a>
              </li>

              <li>
                <a href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state">
                  You Probably Don't Need Derived State
                </a>
              </li>

              <li>
                <a href="https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d">
                  Understanding React — Component life-cycle
                </a>
              </li>
            </ol>
          </MessageBody>
        </Message>
      </div>
    );
  }
}

export default Content;
