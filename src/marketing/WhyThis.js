import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({});

function WhyThis() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Typography>
          Sports Twitter is cool, but have you tried searching your favorite
          bench player on Twitter?
        </Typography>
      </Grid>
    </div>
  );
}

export default WhyThis;
