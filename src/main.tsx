import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
// add store and provider
import { store } from "./store";
import { Provider } from "react-redux";
import { create } from "domain";

import App from "./app/App";
import DashboardPage from "./app/pages/Dashboard/Dashboard";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
