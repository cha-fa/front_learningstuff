import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
