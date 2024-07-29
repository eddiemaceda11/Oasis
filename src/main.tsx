import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./app/App";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

// add store and provider
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
