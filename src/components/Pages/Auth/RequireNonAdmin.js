import React, { lazy } from 'react';
import { signOut } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Loading = React.lazy(() => import('../Shared/Loading'));
const RequireNonAdmin = ({ children }) => {
  const [admin, adminLoading] = useAdmin();
  const location = useLocation();
  if (adminLoading) {
    return <React.Suspense fallback={<Loading/>}/>  }
  if (admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
 
};

export default RequireNonAdmin;
