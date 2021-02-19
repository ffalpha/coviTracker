import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

function Cards(props) {
  console.log(props);
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>

            <Typography color="textSecondary">Date</Typography>

            <Typography variant="body2">
              Number of active case of COIVD-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Reacovered
            </Typography>
            <Typography variant="h5">Real Data</Typography>

            <Typography color="textSecondary">Date</Typography>

            <Typography variant="body2">
              Number of active case of COIVD-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>

            <Typography color="textSecondary">Date</Typography>

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
