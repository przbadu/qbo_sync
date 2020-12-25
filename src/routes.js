import React from "react";
import { Navigate } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
// components
import CustomerListView from "./views/customer/CustomerListView";
import NotFoundView from "./views/errors/NotFoundView";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Navigate to="/customers" /> },
      { path: "customers", element: <CustomerListView /> },
      // { path: "dashboard", element: <DashboardView /> },
      // { path: "settings", element: <SettingsView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/sessions",
    element: <MainLayout />,
    children: [
      // { path: "login", element: <LoginView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
