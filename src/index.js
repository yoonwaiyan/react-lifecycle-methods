import React from "react";
import ReactDOM from "react-dom";

import Content from "./components/Content";

import "bulma/css/bulma.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Lifecycle Methods</h1>
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
