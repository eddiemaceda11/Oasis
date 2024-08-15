import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
// add store and provider
import { store } from "./store";
import { Provider } from "react-redux";
import { create } from "domain";

import App from "./app/App";
import DashboardPage from "./app/pages/Dashboard/Dashboard";
import Tasks from "./features/Dashboard/TaskManager/TaskManager";
import TenantsTable from "@/features/Dashboard/Tenants/Tenants";
import DashboardHome from "./features/Dashboard/Home/Home";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "tenants",
        element: <TenantsTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
