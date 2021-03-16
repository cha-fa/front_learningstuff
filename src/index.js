import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import { Provider } from "react-redux";
import App from "./App";
import store from "./stores/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
