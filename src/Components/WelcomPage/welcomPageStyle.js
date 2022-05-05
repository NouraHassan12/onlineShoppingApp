import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  btn: {
    width: "30%",
    color: "white",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "55%",
    },
  },
}));
