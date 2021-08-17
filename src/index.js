import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeStore } from "fluxible-js";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";

initializeStore({
  initialStore: {
    authUser: null,
  },
  persist: {
    syncStorage: window.localStorage,
    restore({ authUser }) {
      return { authUser };
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
