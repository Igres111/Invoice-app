import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainContext from "./logic/MainContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainContext />
  </React.StrictMode>
);
