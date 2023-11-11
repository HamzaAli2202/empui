import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { EmpItem } from "./EmpItem";
import { useNavigate } from "react-router-dom";

export const EmpList = ({ item, handleUpdate, setShow }) => {
  const [data, setData] = useState([]);
  const [pegi, setPegi] = useState(3);

  const navigate = useNavigate();

  const getApi = async () => {
    const result = await axios.get("http://localhost:1021/allemp");
    setData(result.data);
  };
  const handlePrevious = () => {
    if (pegi > 5) {
      setPegi(pegi - 3);
    }
  };

  const handleNext = () => {
    if (pegi < data.length) {
      setPegi(pegi + 3);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={1}>
                <b>Employee Id</b>
              </Grid>
              <Grid item xs={2}>
                <b>Full Name</b>
              </Grid>
              <Grid item xs={2}>
                <b>Email Id</b>
              </Grid>
              <Grid item xs={2}>
                <b>Mobile</b>
              </Grid>
              <Grid item xs={2}>
                <b>City</b>
              </Grid>

              <Grid item xs={1}>
                <b>Status</b>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            {data.slice(pegi - 3, pegi).map((item) => (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <EmpItem
                      setShow={setShow}
                      handleUpdate={handleUpdate}
                      item={item}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{ display: pegi <= 4 ? "none" : "block" }}
          onClick={handlePrevious}
          variant="contained"
          fullWidth
        >
          Previous
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => navigate("/dash", { state: data })}
          variant="contained"
          fullWidth
          color="warning"
        >
          dashboard
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <Button
          sx={{ display: pegi > data.length ? "none" : "block" }}
          onClick={handleNext}
          variant="contained"
          fullWidth
        >
          next
        </Button>
      </Grid>
    </Grid>
  );
};
