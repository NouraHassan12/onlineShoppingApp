import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  lgoinPage: {
    textAlign: "center",
  },
  title: {
    textAlign: "start",
    padding: "40px",
  },
  header: {
    color: "red",
  },
  inputContainer: {
    width: "40%",
    display: "inline-grid",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  label: {
    margin: "20px 0px",
    textAlign: "left",
  },
}));
