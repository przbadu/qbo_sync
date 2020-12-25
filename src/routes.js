import React from "react";
import { Navigate } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
// components
import CustomerListView from "./views/customer/CustomerListView";
import LandingView from "./views/LandingView";
import NotFoundView from "./views/errors/NotFoundView";

const routes = [
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      { path: "customers", element: <CustomerListView /> },
      // { path: "dashboard", element: <DashboardView /> },
      // { path: "settings", element: <SettingsView /> },
      // { path: 'customers', element: <Customer />, children: [
      //   {path: '/', element: <CustomerListView/>},
      //   {path: ':id', element: <CustomerView/>},
      // ]},
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/app/customers" /> },
      { path: "overview", element: <LandingView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
