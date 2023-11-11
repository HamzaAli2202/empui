import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    navigate("/login");
  }, []);
  return (
    <div>
      <h1>logout</h1>
    </div>
  );
};
