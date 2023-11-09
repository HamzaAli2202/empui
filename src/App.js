import React from "react";
import { AddEmp } from "./components/AddEmp";
import { EmpList } from "./components/EmpList";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card sx={{ bgcolor: "gray" }}>
      <CardContent>
        <AddEmp />
        <br />
        <br />
        <EmpList />
      </CardContent>
    </Card>
  );
}

export default App;
