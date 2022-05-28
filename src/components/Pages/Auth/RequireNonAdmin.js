import { signOut } from "firebase/auth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const RequireNonAdmin = ({ children }) => {
  const [admin, adminLoading] = useAdmin();
  const location = useLocation();
  if (adminLoading) {
    return <Loading />;
  }
  if (admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireNonAdmin;
