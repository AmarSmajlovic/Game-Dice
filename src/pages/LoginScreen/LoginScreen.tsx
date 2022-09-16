import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../../@types/Auth";
import { AuthContext } from "../../contexts";

const LoginScreen = () => {
  const { login, user } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return <div onClick={handleLogin}>login</div>;
};

export default LoginScreen;
