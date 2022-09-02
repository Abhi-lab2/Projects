import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthWrapper({ children }) {
  //   const navigate = useNavigate();
  const authStatus = useSelector((store) => store.authReducer.auth);

  console.log(authStatus);

  if (authStatus) {
    return children;
  }
  return <Navigate to="/login" state="/" />;
}

export default AuthWrapper;
