import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Support from "../pages/Support";
import Market from "../pages/Market";
import BuyCrypto from "../pages/BuyCrypto";
import Register from "../pages/Register";
import Wallet from "../pages/Wallet";
import Header from "../components/layout/Header";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import EasyTrade from "../pages/EasyTrade";
import Setting from "../pages/Setting";
import Profile from "../pages/Profile";
import ProTrade from "../pages/ProTrade";
import History from "../pages/History";
import Dashboard from "../pages/Dashboard";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          <Route path="/market" element={<Market />} />
          <Route path="/buy-crypto" element={<BuyCrypto />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/easy-trade" element={<EasyTrade />} />
          <Route path="/pro-trade" element={<ProTrade />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoute;
