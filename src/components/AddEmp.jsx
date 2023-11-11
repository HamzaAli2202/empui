import React, { useEffect, useState } from "react";
import {
  Grid,
  Switch,
  Card,
  CardContent,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmpList } from "./EmpList";
import Select from "react-select";

export const AddEmp = () => {
  // const navigate = useNavigate();

  const [empid, setEmpid] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [city, setCity] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const [_id, set_id] = useState();
  const [valid, setValid] = useState(false);
  const [show, setShow] = useState("");
  // console.log("isactive", isActive);
  const option = [
    {
      label: "Mumbai",
      value: "Mumbai",
    },
    {
      label: "Pune",
      value: "Pune",
    },
    {
      label: "Nanded",
      value: "Nanded",
    },
    {
      label: "Nagpur",
      value: "Nagpur",
    },
    {
      label: "Hyderabad",
      value: "Hyderabad",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Banglore",
      value: "Banglore",
    },
    {
      label: "Chennai",
      value: "Chennai",
    },
    {
      label: "Kolkata",
      value: "Kolkata",
    },
    {
      label: "Aurangabad",
      value: "Aurangabad",
    },
    {
      label: "Solapur",
      value: "Solapur",
    },
  ];
  const handleSubmit = async () => {
    if (update === true) {
      const url = "http://localhost:1021/empupd";
      const payload = {
        _id,
        empid,
        fname,
        lname,
        email,
        mobile,
        city,
        IsActive,
      };
      const result = await axios.post(url, payload);
      setShow(result.data);
      // console.log(result, "result==========");
      result.status === 200 && setUpdate(false);

      setEmpid("");
      setFname("");
      setLname("");
      setEmail("");
      setMobile();
      setCity("");
      setIsActive(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
      // navigate("/");
      // const result2 = await axios.post(url, payload);
    } else {
      const url = "http://localhost:1021/addemp";
      const payload = { empid, fname, lname, email, mobile, city, IsActive };
      const result = await axios.post(url, payload);
      setShow(result.data);
      // console.log(result, "result==========");
      result.status === 200 && setEmpid("");
      setEmpid("");
      setFname("");
      setLname("");
      setEmail("");
      setMobile();
      setCity("");
      setIsActive(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
      // navigate("/");
      // const result3 = await axios.post(url, payload);
    }
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
  const handleUpdate = (item) => {
    setEmpid(item.empid);
    setFname(item.fname);
    setLname(item.lname);
    setEmail(item.email);
    setMobile(item.mobile);
    setCity(item.city);
    setIsActive(item.IsActive);
    set_id(item._id);
    setUpdate(true);
  };
  useEffect(() => {
    setValid(
      fname !== "" &&
        lname !== "" &&
        // city !== "" &&
        email !== "" &&
        empid.length <= 5 &&
        mobile.length <= 10
    );
  }, [empid, fname, lname, mobile, city, email]);

  return (
    <div>
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
              {/* <TextField
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                variant="outlined"
                label="City"
                fullWidth
              /> */}
              <Select onChange={(e) => setCity(e.value)} options={option} />
            </Grid>
            <Grid item xs={1}>
              <Switch
                isActive={IsActive}
                onClick={() => setIsActive(!IsActive)}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                disabled={update ? "" : !valid}
                onClick={handleSubmit}
                sx={{ height: 55 }}
                variant="contained"
                fullWidth
              >
                {update ? "update" : "submit"}
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
      <br />
      {show && <Alert severity="success">{show}</Alert>}
      <br />
      <EmpList setShow={setShow} handleUpdate={handleUpdate} />
    </div>
  );
};
