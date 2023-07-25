import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import "nprogress/nprogress.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AuthProvider } from "react-auth-kit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
