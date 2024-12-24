import useAuth from "@/hooks/use-auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { isAuth } = useAuth();
  if (isAuth) return <Navigate to="/" />;
  return <Outlet />;
};

export default AuthLayout;
