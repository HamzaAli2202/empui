import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState();

  const handleLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);

    const emails = localStorage.getItem("email");
    const passwords = localStorage.getItem("pass");

    if (emails === "shahrukh@gmail.com" && passwords === "Welcome@1") {
      navigate("/");
    } else {
      navigate("/login");
      setErrors("Invalid Email or Password");
    }
  };
  setTimeout(() => {
    setErrors("");
  }, 3000);
  return (
    <div className="content-login">
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <img style={{ height: 500 }} src="software.png" alt="" />
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ marginTop: 10 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Employee Login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        label="Email Id"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) => setPass(e.target.value)}
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        onClick={handleLogin}
                        variant="contained"
                        color="info"
                        fullWidth
                      >
                        login
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <span style={{ color: "red" }}>{errors}</span>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
