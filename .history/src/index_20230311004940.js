
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components";
import "./styles/index.css"


const rootElement = document.getElementById("root")
const root = createRoot(rootElement);
root.render(
  <Pro
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
