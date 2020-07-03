import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BrkProvider from "./context/brkProvider";

ReactDOM.render(
  <BrkProvider>
    <App />
  </BrkProvider>,
  document.getElementById("root")
);
