import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddEmp } from "./AddEmp";
import { EmpDetails } from "./EmpDetails";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEmp />} />
        <Route path="/empdtl" element={<EmpDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
