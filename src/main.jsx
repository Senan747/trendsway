import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "./UserDataContext";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
