import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddEmp } from "./AddEmp";
import { EmpDetails } from "./EmpDetails";
import { Dashboard } from "./Dashboard";
import { Nav } from "./Nav";
import { Logout } from "./Logout";
import { Login } from "./Login";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<AddEmp />} />
        <Route path="/empdtl" element={<EmpDetails />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
