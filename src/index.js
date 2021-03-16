import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import { Provider } from "react-redux";
import App from "./App";
import store from "./stores/store";
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="loading">
          <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
