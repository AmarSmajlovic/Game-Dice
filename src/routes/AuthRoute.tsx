import React, { useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { AuthContextType } from "../@types/Auth";
import { AuthContext } from "../contexts";

const AuthRoute = () => {
  const { user } = useContext(AuthContext) as AuthContextType;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
