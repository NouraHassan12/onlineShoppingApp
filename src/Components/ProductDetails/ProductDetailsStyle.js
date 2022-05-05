import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "50px",
    // background: "#eee",
    padding: "3em",
    lineHeight: "1.5em",
  },
  img: {
    maxWidth: "55%",
  },
  continueShopping: {
    marginTop: "16px",
  },
  rate: {
    marginBottom: "15px",
  },
  price: {
    margin: "25px 0px",
  },
  addToCart: {
    color: "green",
  },
  productDescription: {
    color: "gray",
    lineHeight: "23px",
  },
}));
