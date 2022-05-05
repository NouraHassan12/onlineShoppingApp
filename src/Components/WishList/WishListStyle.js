import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wishListContainer: {
    padding: "100px 64px",
  },
  wishListEmpty: {
    fontSize: "20px",
    marginTop: "32px",
    color: "rgb(84, 84, 84)",
    display: " flex",
    flexDirection: " column",
    alignItems: "center",
  },
  titles: {
    margin: "2px 0 16px 0",
    display: " grid",
    alignItems: "center",
    gridTemplateColumns: "42fr 1fr 1fr 1fr",
    columnGap: "8px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  productTitle: {
    paddingLeft: "8px",
  },

  wishListItems: {
    gridTemplateColumns: "1fr",
    rowGap: "1rem",
    margin: "2px 0 16px 0",
    display: " grid",
    alignItems: "center",
    gridTemplateColumns: "40fr 1fr 1fr 1fr",
    columnGap: "8px",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
      padding: "20px",
    },
  },
  wishListProduct: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "unset",
    },
  },

  wishListSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
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

  continueShopping: {
    marginTop: "16px",
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
    fontSize: "16px !important",
    lineHeight: "22px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
  },
}));
