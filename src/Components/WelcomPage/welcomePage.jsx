import React from "react";
import LottieAnimation from "../../Common/assets/lottie/lottieAnimation";
import shopping from "../../Common/assets/lottie/74384-swipe-for-shopping.json";
import { useStyles } from "./welcomPageStyle";
import { Typography, Grid, Button } from "@material-ui/core";
function WelcomPage({ history }) {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <LottieAnimation lotti={shopping} className={classes.lottie} />
        </div>
      </Grid>
      <div>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ color: "gray" }}
        >
          most popular shopping website , with <br />
          lots of fashionable products
        </Typography>
      </div>
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "15px 0px",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          className={classes.btn}
          onClick={() => history.push("/home_Page")}
        >
          Continue
        </Button>
      </Grid>
    </>
  );
}

export default WelcomPage;
