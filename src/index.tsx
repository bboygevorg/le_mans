import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./app/provider";
import "@app/styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<AppProviders />);
