import React from "react";
import { AddEmp } from "./components/AddEmp";
import { EmpList } from "./components/EmpList";
import { Card, CardContent } from "@mui/material";
import { Landing } from "./components/Landing";

function App() {
  return (
    <Card sx={{ bgcolor: "gray" }}>
      <CardContent>
        {/* <AddEmp /> */}
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
