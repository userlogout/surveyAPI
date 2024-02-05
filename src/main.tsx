import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { GlobalStyle } from "./GlobalStyles.tsx";
import { DeviceThemeProvider, SSRProvider } from "@salutejs/plasma-ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DeviceThemeProvider>
      <SSRProvider>
        <App />
        <GlobalStyle />
      </SSRProvider>
    </DeviceThemeProvider>
  </React.StrictMode>
);
