import React, { useState } from "react";
import {
  Grid,
  Switch,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";

export const AddEmp = () => {
  const [empid, setEmpid] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [city, setCity] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async () => {
    const url = "http://localhost:1021/addemp";
    const payload = { empid, fname, lname, email, mobile, city, isActive };
    const result = await axios.post(url, payload);
    // console.log(result, "result==========");
    setEmpid("");
    setFname("");
    setLname("");
    setEmail("");
    setMobile();
    setCity("");
    setIsActive(false);
  };

  const handleClear = () => {
    setEmpid("");
    setFname("");
    setLname("");
    setEmail("");
    setMobile();
    setCity("");
    setIsActive(false);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              value={empid}
              onChange={(e) => setEmpid(e.target.value)}
              required
              type="number"
              variant="outlined"
              label="Employee Id"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              variant="outlined"
              label="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              variant="outlined"
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              label="Email ID"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="number"
              required
              variant="outlined"
              label="Mobile"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              variant="outlined"
              label="City"
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <Switch
              isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={handleSubmit}
              sx={{ height: 55 }}
              variant="contained"
              fullWidth
            >
              submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={handleClear}
              sx={{ height: 55 }}
              variant="outlined"
              fullWidth
            >
              clear
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
