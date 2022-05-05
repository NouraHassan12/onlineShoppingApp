import React from "react";
import {
  Typography,
  Grid,
  Paper,
  FormControl,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import { useStyles } from "./LoginStyle";
function Login({ history }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.lgoinPage}>
        <div className={classes.title}>
          <Typography variant="h2">Welcome Back</Typography>
          <Typography variant="h5">Log In for best shopping</Typography>
        </div>
        <Grid
          item
          xs="auto"
          md={12}
          // sm={12}
          alignContent="center"
          className={classes.inputContainer}
        >
          <div>
            <Paper elevation={3}>
              <div
                style={{ display: "grid", height: "350px", padding: "30px" }}
              >
                <FormControl variant="standard">
                  <Typography className={classes.label}>
                    Email Address
                  </Typography>
                  <Input
                    id="input-with-icon-adornment"
                    placeholder="Enter Email Address"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="standard">
                  <Typography className={classes.label}>Password</Typography>
                  <Input
                    type="password"
                    id="input-with-icon-adornment"
                    placeholder="Enter Password"
                    startAdornment={
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Typography className={classes.label}>
                  Don't have an account ?{" "}
                  <span style={{ color: "green" }}>Sign up Now</span>
                </Typography>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{
                      width: "50%",
                      color: "white",
                      backgroundColor: "Green",
                    }}
                    onClick={() => history.push("/welcoming_Page")}
                  >
                    LOGIN
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
          <Typography style={{ margin: "15px 0px" }}>-OR-</Typography>
        </Grid>
      </Grid>

      <div className={classes.lgoinPage}>
        <Grid item>
          <Button
            variant="outlined"
            disableElevation
            style={{
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Facebook />
              <Typography style={{ marginLeft: "20px" }}>
                Sign in With Facebook
              </Typography>
            </div>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" disableElevation>
            <div style={{ display: "flex" }}>
              <GoogleIcon />
              <Typography style={{ marginLeft: "20px" }}>
                Sign in With google
              </Typography>
            </div>
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default Login;
