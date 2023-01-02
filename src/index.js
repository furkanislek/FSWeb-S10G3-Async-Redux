import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import depo from "./components/redux";

ReactDOM.render(
  <Provider store={depo}>
    <Router>
      <App />
    </Router>
   </Provider>,

  document.getElementById("root")
);
