import React from "react";
import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/layout/MobileNav";

function PublicRoute() {
  return (
    <>
      <Header />

      <Outlet />

      <MobileNav />
    </>
  );
}

export default PublicRoute;
