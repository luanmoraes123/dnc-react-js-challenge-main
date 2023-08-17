import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Inicial from "./views/inicial/Inicial";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial/>,
  }
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
