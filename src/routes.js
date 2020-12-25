import React from "react";
import { Navigate } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
// components
import CustomerListView from "./views/customer/CustomerListView";
import LandingView from "./views/LandingView";
import CallbackView from "./views/Callback";
import NotFoundView from "./views/errors/NotFoundView";
import NotAuthorizedView from "./views/errors/NotAuthorizedView";
import ServerErrorView from "./views/errors/ServerErrorView";

const auth = false;

const routes = [
  {
    path: "/app",
    element: auth ? <DashboardLayout /> : <Navigate to="/overview" />,
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
    element: null,
    children: [
      { path: "/", element: <Navigate to="/app/customers" /> },
      { path: "overview", element: <LandingView /> },
      { path: "/callback", element: <CallbackView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "401", element: <NotAuthorizedView /> },
      { path: "500", element: <ServerErrorView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
