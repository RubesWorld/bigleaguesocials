import React from "react";

//component import
import Header from "./Header";
import PlayerInfo from "./PlayerInfo";

import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Header: {
    fontFamily: "Archivo Black",
  },
});

function AppMain() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <div className="App">
  {*/} <Header />
        <Typography className={classes.Header} variant="h2">
          NBA BALLAZ!!!
        </Typography>
        <PlayerInfo />
      </div>
    </div>
  );
}

export default AppMain;
