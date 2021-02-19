import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import styles from "./Card.css";
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                duration={5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">
              Number of active case of COIVD-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Reacovered
            </Typography>
            <Typography variant="h5">
              {" "}
              <Countup
                start={0}
                end={recovered.value}
                duration={5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">
              Number of active case of COIVD-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {" "}
              <Countup
                start={0}
                end={deaths.value}
                duration={5}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2">
              Number of daeths case of COIVD-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
