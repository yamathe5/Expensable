import { Global } from "@emotion/react";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { global, reset } from "./styles";
import { AuthProvider } from "./context/auth-context"


ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
