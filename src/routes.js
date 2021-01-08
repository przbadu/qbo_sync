import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/DashboardLayout";
// import MainLayout from "./layouts/MainLayout";
// components
import { CustomerImport, CustomerListView } from "./views/customer";
import Callback from "./views/auth/Callback";
import Dashboard from "./views/dashboard";
import LandingView from "./views/auth";
import NotFoundView from "./views/errors/NotFoundView";
import NotAuthorizedView from "./views/errors/NotAuthorizedView";
import Products from "./views/products";
import ServerErrorView from "./views/errors/ServerErrorView";
import Vendor from "./views/supplier";
// context
import { AuthContext } from "./context/auth/context";

const AppRoutes = () => {
  const context = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/app"
        element={
          context.isAuthenticated() ? (
            <DashboardLayout />
          ) : (
            <Navigate to="/overview" />
          )
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers">
          <Route path="/" element={<CustomerListView />} />
          <Route path="/import" element={<CustomerImport />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="vendors" element={<Vendor />} />
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
