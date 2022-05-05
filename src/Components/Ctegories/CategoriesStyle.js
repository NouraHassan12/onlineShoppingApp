import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  img_root: {
    display: "flex",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    border: "1px solid gray",
    margin: "0 auto",
    transition: "ease 0.7s",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "80px",
      height: "80px",
    },
  },
  img_responsive: {
    maxHeight: "100px",
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    padding: "10px 16px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  gridItem: {
    margin: "20px",
    transition: "ease 2s",
  },
}));
