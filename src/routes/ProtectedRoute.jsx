import MobileNav from "../components/layout/MobileNav";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { useContext } from "react";
import { AppAuthContext } from "../context/Auth/AuthContext";

function ProtectedRoute() {
  const { login } = useContext(AppAuthContext);
  return (
    <>
      {login ? (
        <div>
          <Outlet />
          <MobileNav />
        </div>
      ) : (
        <Navigate to={"/login"} replace />
      )}
    </>
  );
}

export default ProtectedRoute;
