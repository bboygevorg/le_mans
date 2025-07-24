import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./app/provider";
import "@app/styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <AppProviders />
  </Provider>
);
