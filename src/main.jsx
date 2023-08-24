import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Inicial from "./views/inicial/Inicial";
import Remove from "./views/remove/Remove"
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <BrowserRouter>
   <Inicial/>
   </BrowserRouter>
  </React.StrictMode>
);
