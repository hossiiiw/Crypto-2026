import MobileNav from "../components/layout/MobileNav";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

function ProtectedRoute() {
  return (
    <>
      <Outlet />
      <MobileNav />
    </>
  );
}

export default ProtectedRoute;
