import React, { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { user, loading } = useContext(AuthContext);

  let location = useLocation();

  console.log(location);
  if (loading) {
    return <p>Hello world</p>;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
