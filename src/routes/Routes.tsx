import React from "react";
import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";
import { Board } from "../components";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import AuthRoute from "./AuthRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<AuthRoute />}>
          <Route path="/game" element={<Board />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
