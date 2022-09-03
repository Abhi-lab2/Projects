import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthWrapper({ children }) {
  // const navigate = useNavigate();
  // const authStatus = useSelector((store) => store.authReducer.auth);

  // console.log("authStatus: - ",authStatus);

  // if (authStatus) {
  //   return children;
  // }
  // return <Navigate to="/login" state="/" />;
  const { user: authUser } = useSelector((x) => x.auth);

  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: Navigate.location }} />;
  }

  // authorized so return child components
  return children;
}

export default AuthWrapper;
