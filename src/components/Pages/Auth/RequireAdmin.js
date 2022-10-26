import React, { lazy } from 'react';
import { signOut } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
// import Loading from "../Shared/Loading";
import Loading from "../Shared/Loading"

const RequireAdmin = ({ children }) => {
  const [admin, adminLoading] = useAdmin();
  const location = useLocation();
  if (adminLoading) {
    return <Loading />;
  }
  if (!admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
