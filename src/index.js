import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./services/useAuth";
import { GlobalContextProvider } from "./services/useGlobals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
