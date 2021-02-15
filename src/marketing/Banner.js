import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  BannerGrid: {
    margin: "4% 2% 4% 20%",
  },
  head: {
    fontFamily: "Archivo Black, sans-serif",
  },
  TextLeft: {
    paddingRight: "4%",
    width: "54%",
    paddingTop: "5%",
    fontFamily: "'Montserrat', sans-serif",
  },
  headSpan: {
    fontWeight: "bold",
  },
  better: {
    fontFamily: "Archivo Black, sans-serif",
    marginLeft: "25%",
    width: "100%",
  },
});

function Banner() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.BannerGrid}>
        <Grid item className={classes.TextLeft}>
          <Typography variant="h2" className={classes.head}>
            BigLeague <br /> Socials
          </Typography>
          <Typography variant="h4" className={classes.TextLeft}>
            Athletes talking about the latest news is entertaining, but
            sometimes hard to find. <br /> Quickly find your favorite athletes*
            Twitter. <br /> <span className={classes.headSpan}>Anywhere. </span>
          </Typography>
        </Grid>
        <Grid item>
          <img src="../assets/mac-book.svg" />
        </Grid>
      </Grid>
      <div className={classes.better}>
        <Typography variant="h3">
          Never miss the buzz from an industry shaking event.
        </Typography>
      </div>
    </div>
  );
}

export default Banner;
