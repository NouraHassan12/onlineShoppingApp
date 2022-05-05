import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cartContainer: {
    padding: "100px 64px",
  },
  cartEmpty: {
    fontSize: "20px",
    marginTop: "32px",
    color: "rgb(84, 84, 84)",
    display: " flex",
    flexDirection: " column",
    alignItems: "center",
  },
  titles: {
    margin: "32px 0 16px 0",
    display: " grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
    columnGap: "8px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  productTitle: {
    paddingLeft: "8px",
  },
  cartItem: {
    borderTop: "1px solid rgb(187, 187, 187)",
    padding: " 16px 0px",
  },
  cartItems: {
    gridTemplateColumns: "1fr",
    rowGap: "1rem",
    margin: "0px 0 16px 0",
    display: " grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
    columnGap: "8px",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      padding: "20px",
    },
  },
  cartProduct: {
    display: "flex",
  },

  cartQuantity: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "130px",
    maxWidth: "100%",
    border: "0.5px solid rgb(177, 177, 177)",
    borderRadius: "5px",
  },
  cartProductTotalPrice: {
    paddingRight: "8px",
    justifySelf: "right",
    fontWeight: "700",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15px",
    },
  },

  cartSummary: {
    display: "flex",
    justifyContent: "end",

    borderTop: "1px solid rgb(187, 187, 187)",
    paddingTop: "32px",
    [theme.breakpoints.down("xs")]: {
      display: "unset",
    },
  },
  clearBtn: {
    width: "130px",
    height: "40px",
    borderRadius: "5px",
    fontWeight: "400",
    letterSpacing: "1.15px",
    border: "0.5px solid rgb(177, 177, 177)",
    color: "gray",
    background: "none",
    outline: "none",
    cursor: "pointer",
  },
  cartCheckout: { width: " 270px", maxWidth: "100%" },
  subtotal: {
    display: "flex",
    justifyContent: "space-between",
    fontsize: "20px",
  },
  amount: { fontWeight: "700", marginBottom: "15px" },
  continueShopping: {
    marginTop: "25px",
  },
  checkOutBtn: {
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    fontWeight: "400",
    letterSpacing: "1.15px",
    backgroundColor: "#4b70e2",
    color: "#f9f9f9",
    border: "none",
    outline: "none",
    cursor: "pointer",
    marginTop: "10px",
    "&:hover ": {
      backgroundColor: "#4b70e2",
    },
  },
  ProductTitle: {
    fontSize: "17px !important",
    lineHeight: "22px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
  },
}));
