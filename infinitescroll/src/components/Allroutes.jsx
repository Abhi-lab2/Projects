import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./home/home";
import { Login } from "./login/Login";
import AuthWrapper from "./AuthWrapper";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthWrapper><Home /></AuthWrapper> }></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
