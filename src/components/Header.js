import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  MenuText: {
    margin: "0 2% 0 2%",
    fontSize: "1.1rem",
  },
  Use: {
    border: "solid 1px black",
    borderRadius: "10%",
    padding: "3px 6px",
    background: "black",
    color: "white",
    fontSize: "1.3rem",
    margin: "0 2% 0 2%",
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h4"
            fontFamily="Archivo Black"
            className={classes.title}
          >
            BigLeagueSocials
          </Typography>
          <Typography className={classes.MenuText}>How It Works</Typography>
          <Typography className={classes.MenuText}>Why Use This?</Typography>
          <Typography className={classes.MenuText}>FAQs</Typography>
          <Typography className={classes.Use}>Use It</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
