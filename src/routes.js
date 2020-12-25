import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/DashboardLayout";
// import MainLayout from "./layouts/MainLayout";
// components
import CustomerListView from "./views/customer/CustomerListView";
import LandingView from "./views/LandingView";
import Callback from "./views/Callback";
import NotFoundView from "./views/errors/NotFoundView";
import NotAuthorizedView from "./views/errors/NotAuthorizedView";
import ServerErrorView from "./views/errors/ServerErrorView";

const AppRoutes = () => {
  const [auth, setAuth] = useState({user: localStorage.getItem("user")});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setAuth({...auth , user});
  }, []);

  return (
    <Routes>
      <Route
        path="/app"
        element={
          auth && auth.user ? (
            <DashboardLayout />
          ) : (
            <Navigate to="/overview" />
          )
        }
      >
        <Route path="customers" element={<CustomerListView />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>

      <Route path="/">
        <Route path="/" element={<Navigate to="/app/customers" />} />
        <Route path="overview" element={<LandingView />} />
        <Route path="callback" element={<Callback />} />
        <Route path="404" element={<NotFoundView />} />
        <Route path="401" element={<NotAuthorizedView />} />
        <Route path="500" element={<ServerErrorView />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
