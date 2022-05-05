import React, { useEffect } from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/ProductsList/action";
import { addToCart } from "../../Redux/Cart/Cart";
import {
  removeFromWishList,
  clearWishList,
} from "../../Redux/WishList/wishListReducer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyles } from "./WishListStyle";
import SideMenu from "../../Common/SideMenu/sideMenu.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const WishList = ({
  addToCart,
  wishListData,
  removeFromWishList,
  clearWishList,
}) => {
  const classes = useStyles();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishList(product);
    // history.push("/Cart_Page");
  };
  const handleRemoveFromWishList = (wishListItem) => {
    removeFromWishList(wishListItem);
  };
  const handleClearCart = () => {
    clearWishList();
  };
  return (
    <>
      <SideMenu />
      <div className={classes.wishListContainer}>
        <Typography variant="h3" align="left">
          Wish List
        </Typography>
        {wishListData.wishListItems.length === 0 ? (
          <div className={classes.wishListEmpty}>
            <Typography variant="p">
              Your Wishlist is currently empty
            </Typography>
            <div style={{ marginTop: "16px" }}>
              <Link to="/home_Page">
                <span style={{ marginLeft: "16px" }}>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Grid>
              {wishListData.wishListItems &&
                wishListData.wishListItems.map((wishListItem) => (
                  <Grid
                    className={classes.wishListItems}
                    style={{
                      borderTop: "1px solid rgb(187, 187, 187)",
                      padding: " 16px 0px",
                    }}
                    key={wishListItem.id}
                  >
                    <div className={classes.wishListProduct}>
                      <img
                        src={wishListItem.image}
                        style={{
                          width: "100px",
                          maxWidth: "100%",
                          marginRight: "16px",
                        }}
                        alt={wishListItem.title}
                      />
                      <div>
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          component="div"
                          className={classes.ProductTitle}
                        >
                          {wishListItem.title}
                        </Typography>

                        <Typography style={{ color: "gray" }}>
                          {wishListItem.category}
                        </Typography>
                        <Typography>${wishListItem.price}</Typography>
                      </div>
                    </div>
                    <Button
                      style={{ color: "red" }}
                      onClick={() => handleRemoveFromWishList(wishListItem)}
                    >
                      <DeleteForeverIcon />
                    </Button>
                    <Button onClick={() => handleAddToCart(wishListItem)}>
                      <ShoppingCartIcon />
                    </Button>
                  </Grid>
                ))}
            </Grid>
            <Grid className={classes.wishListSummary}>
              <button
                className={classes.clearBtn}
                onClick={() => handleClearCart()}
              >
                Clear wishlist
              </button>

              <div className={classes.continueShopping}>
                <Link
                  to="/home_Page"
                  style={{
                    color: "gray",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>
                    {" "}
                    <ArrowBackIcon />
                    Continue Shopping
                  </span>
                </Link>
              </div>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wishListData: state.wishList,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
  removeFromWishList,
  clearWishList,
})(WishList);
