import React from "react";
import { creatRoot } from "react-dom/client";
import { createRoutesFromElements } from "react-router-dom";
createRoutesFromElements
import { App } from "./components";


creatRoot(document.getElementById("root")).render(<App />)