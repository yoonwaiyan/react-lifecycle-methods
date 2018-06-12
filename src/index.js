import React from "react";
import ReactDOM from "react-dom";

import Content from "./components/Content";

import "bulma/css/bulma.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1 class="title">React Lifecycle Methods</h1>
      </div>

      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
