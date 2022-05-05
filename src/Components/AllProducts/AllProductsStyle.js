import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cartContainer: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "16px auto",
    padding: " 0px 16px",
    borderRadius: "15px",
    width: "250px",
    maxWidth: "100%",
    height: "90%",
    boxShadow:
      "-5px -5px 10px rgb(255 255 255 / 50%), 2px 2px 5px rgb(94 104 121 / 30%)",
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "83%",
    },
  },
  root: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  contextSection: {
    paddingTop: "20px",
  },
  productImg: {
    width: " 60%",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      backgroundColor: "#4b70e2",
    },
  },
  ProductTitle: {
    fontSize: "16px !important",
    lineHeight: "22px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
  },
}));
