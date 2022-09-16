import React from "react";
import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";
import { Board } from "../components";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import { TodosScreen } from "../pages/Todos";
import AuthRoute from "./AuthRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Board />} />
        </Route>
        <Route path="/todos" element={<TodosScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
